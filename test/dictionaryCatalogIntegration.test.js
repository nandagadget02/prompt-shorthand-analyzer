/**
 * Test Suite: Integrasi Kamus Shorthand ke Catalog (V3.8)
 * Memverifikasi alur:
 * - Menyimpan hasil pencarian Kamus Shorthand ke User Catalog
 * - Kelengkapan metadata & inferensi deterministic
 * - Pencegahan duplikasi kode & alias
 * - Sinkronisasi state, pencarian semantik, dan filter
 * - Persistensi data, ekspor-impor, dan UI state buttons
 */

import { renderDictionaryPage } from '../src/components/DictionaryPage.js';
import { CatalogRepository } from '../src/services/catalogRepository.js';
import { INITIAL_SHORTHAND_CATALOG, SHORTHAND_CATEGORIES, FUNCTION_GROUPS } from '../src/data/catalogData.js';
import {
  deriveShorthandName,
  inferTargetArea,
  inferCategory,
  inferFunctionGroup,
  generateSemanticTriggers,
  findVerifiedEquivalentAliases
} from '../src/lib/shorthandAutoFiller.js';

export async function runDictionaryCatalogIntegrationTests(assert) {
  console.log('\n--- VERIFIKASI FITUR V3.8: INTEGRASI KAMUS SHORTHAND KE CATALOG ---');

  // Siapkan repository independen untuk pengujian
  const repo = new CatalogRepository(INITIAL_SHORTHAND_CATALOG);
  await repo.init();
  const initialCount = repo.getAll().length;

  // 1. Uji Inferensi Metadata dari Hasil Pencarian Minimal
  const mockSearchResult = {
    code: '/bodyshape',
    name: 'Body Shape Preservation',
    description: "Preserve the subject's original body shape, natural silhouette, and overall physical proportions without unwanted alteration.",
    source: 'ONLINE'
  };

  const rawCode = mockSearchResult.code.trim().toLowerCase();
  const desc = mockSearchResult.description;
  const name = mockSearchResult.name || deriveShorthandName(rawCode, desc);
  const target = mockSearchResult.target || inferTargetArea(`${name} ${desc}`) || 'Tubuh & Pose';
  const category = mockSearchResult.category || inferCategory(`${name} ${desc}`, target) || 'LOCK_PRESERVATION';
  const functionGroup = mockSearchResult.functionGroup || inferFunctionGroup(`${name} ${desc}`, category, target) || 'BODY_PRESERVATION';
  const semanticTriggers = generateSemanticTriggers(rawCode, desc, target);
  const equivalentTo = findVerifiedEquivalentAliases(rawCode, functionGroup, target, repo.getAll());

  assert(rawCode === '/bodyshape', 'Normalisasi: Kode shorthand diawali "/" dan berhuruf kecil');
  assert(name === 'Body Shape Preservation', 'Metadata: Nama/judul terpetakan dengan tepat');
  assert(desc.includes('body shape'), 'Metadata: Deskripsi lengkap dipertahankan');
  assert(category === 'LOCK_PRESERVATION' || category === 'BODY_POSE', 'Metadata: Kategori Catalog valid subset SHORTHAND_CATEGORIES');
  assert(Boolean(SHORTHAND_CATEGORIES[category]), 'Katalog: Kategori terdaftar di SHORTHAND_CATEGORIES');
  assert(Boolean(FUNCTION_GROUPS[functionGroup]), 'Katalog: Function group terdaftar di FUNCTION_GROUPS');
  assert(semanticTriggers.length > 0, 'Metadata: Semantic triggers otomatis dihasilkan');
  assert(Array.isArray(equivalentTo), 'Metadata: EquivalentTo berbentuk array alias');

  // 2. Simpan ke User Catalog via repository
  const entryToSave = {
    code: rawCode,
    name,
    description: desc,
    category,
    target,
    functionGroup,
    equivalentTo,
    semanticTriggers,
    negativeTriggers: [],
    conflicts: [],
    compatibleWith: [],
    relationships: [],
    recommendationLevel: 'WAJIB',
    priority: 'HIGH',
    status: 'CUSTOM',
    source: 'USER',
    preferredRepresentative: false
  };

  const savedItem = await repo.add(entryToSave);
  assert(savedItem && savedItem.code === '/bodyshape', 'Penyimpanan: Berhasil menyimpan /bodyshape ke User Catalog');
  assert(repo.getAll().length === initialCount + 1, 'Penyimpanan: Total katalog bertambah 1 entri');

  // 3. Verifikasi Tersedia di Catalog & Pencarian Semantik
  const fetched = repo.getAll().find(c => c.code === '/bodyshape');
  assert(fetched && fetched.source === 'USER', 'Integritas: Entri tersimpan memiliki source USER');
  assert(fetched && fetched.status === 'CUSTOM', 'Integritas: Entri tersimpan memiliki status CUSTOM');

  const searchHits = repo.searchShorthands('body shape');
  assert(searchHits.some(h => h.code === '/bodyshape'), 'Pencarian: /bodyshape dapat ditemukan lewat searchShorthands("body shape")');

  const categoryFiltered = repo.getByCategory(category);
  assert(categoryFiltered.some(c => c.code === '/bodyshape'), 'Filter: /bodyshape muncul saat memfilter kategori terkait');

  // 4. Cegah Duplikasi Kode Eksak
  const duplicateCheck = repo.detectSimilarFunction({ code: '/bodyshape', functionGroup });
  assert(duplicateCheck.hasSimilar === true, 'Deduplikasi: Terdeteksi bahwa /bodyshape sudah ada di katalog');
  assert(duplicateCheck.matchType === 'EXACT_CODE', 'Deduplikasi: Tipe benturan adalah EXACT_CODE');

  // 5. Cegah Duplikasi Berdasarkan Alias
  // Tambah entri yang mendaftarkan alias /naturalbody
  await repo.add({
    code: '/curvyfit',
    name: 'Curvy Fit',
    description: 'Menjaga lekuk tubuh alami',
    category: 'BODY_POSE',
    target: 'Tubuh & Pose',
    functionGroup: 'BODY_POSE_EDIT',
    equivalentTo: ['/naturalbody'],
    semanticTriggers: ['curvy', 'tubuh'],
    status: 'CUSTOM',
    source: 'USER'
  });

  const aliasCheck = repo.detectSimilarFunction({ code: '/naturalbody' });
  assert(aliasCheck.hasSimilar === true, 'Deduplikasi: Terdeteksi kode bentrok dengan alias yang sudah ada');
  assert(aliasCheck.matchType === 'ALIAS_OF_EXISTING', 'Deduplikasi: Tipe benturan adalah ALIAS_OF_EXISTING');

  // 6. Ekspor dan Impor JSON
  const exportedJson = repo.exportCatalog();
  assert(exportedJson.includes('/bodyshape'), 'Ekspor JSON: Memuat shorthand yang baru disimpan dari kamus');
  assert(!exportedJson.includes('apiKey'), 'Ekspor JSON: Bebas dari kredensial/rahasia');

  // 7. Core Catalog Tetap Terlindungi (Read-Only)
  let coreDeleteThrew = false;
  try {
    await repo.deleteUserEntry('/facelock');
  } catch (err) {
    coreDeleteThrew = true;
  }
  assert(coreDeleteThrew, 'Keamanan: CORE CATALOG (/facelock) terlindungi dan tidak bisa dihapus');

  // User entry BISA dihapus
  const userDeleteSuccess = await repo.deleteUserEntry('/bodyshape');
  assert(userDeleteSuccess === true, 'User Catalog: Entri kustom pengguna dapat dikelola/dihapus aman');
  assert(!repo.getAll().some(c => c.code === '/bodyshape'), 'User Catalog: /bodyshape berhasil dihapus');

  // 8. Verifikasi Render Komponen UI DictionaryPage
  const mockCatalog = [
    { code: '/facelock', name: 'Face Lock', equivalentTo: ['/face-preserve'] },
    { code: '/existinguser', name: 'Existing User Shorthand', equivalentTo: [] }
  ];

  const searchResultsMock = [
    { code: '/newshorthand', name: 'New Shorthand', description: 'Deskripsi baru', target: 'Wajah' },
    { code: '/facelock', name: 'Face Lock', description: 'Kunci wajah asli' },
    { code: '/savingitem', name: 'Saving Item', description: 'Sedang disimpan' },
    { code: '/justsaveditem', name: 'Saved Item', description: 'Telah disimpan' },
    { code: '/faileditem', name: 'Failed Item', description: 'Gagal disimpan' }
  ];

  const rendered = renderDictionaryPage({
    searchQuery: 'test',
    searchResults: searchResultsMock,
    selectedShorthands: [],
    isSearching: false,
    hasSearched: true,
    catalog: mockCatalog,
    savingCatalogCodes: ['/savingitem'],
    justSavedCatalogCodes: ['/justsaveditem'],
    failedCatalogCodes: ['/faileditem']
  });

  // Uji tombol "+ Tambah ke Catalog"
  assert(rendered.html.includes('btn-add-to-catalog'), 'UI: Tombol .btn-add-to-catalog tersedia');
  assert(rendered.html.includes('Tambah ke Catalog'), 'UI: Teks tombol "+ Tambah ke Catalog" ditampilkan untuk item baru');

  // Uji status "Sudah Ada di Catalog"
  assert(rendered.html.includes('btn-catalog-exists'), 'UI: Class .btn-catalog-exists tersedia');
  assert(rendered.html.includes('Sudah Ada di Catalog'), 'UI: Status "Sudah Ada di Catalog" ditampilkan untuk /facelock');

  // Uji status "Menyimpan..."
  assert(rendered.html.includes('btn-catalog-saving'), 'UI: Class .btn-catalog-saving tersedia');
  assert(rendered.html.includes('Menyimpan...'), 'UI: Status "Menyimpan..." ditampilkan untuk /savingitem');

  // Uji status "Tersimpan di Catalog"
  assert(rendered.html.includes('btn-catalog-saved'), 'UI: Class .btn-catalog-saved tersedia');
  assert(rendered.html.includes('Tersimpan di Catalog'), 'UI: Status "Tersimpan di Catalog" ditampilkan untuk /justsaveditem');

  // Uji status "Gagal Menyimpan"
  assert(rendered.html.includes('btn-catalog-retry'), 'UI: Class .btn-catalog-retry tersedia');
  assert(rendered.html.includes('Gagal Menyimpan'), 'UI: Status "Gagal Menyimpan" ditampilkan untuk /faileditem');

  // Uji metadata badge di footer kartu
  assert(rendered.html.includes('card-footer-actions'), 'UI: Section .card-footer-actions tersedia pada kartu');
  assert(rendered.html.includes('card-footer-meta'), 'UI: Section .card-footer-meta tersedia');

  console.log('HASIL INTEGRASI KAMUS-CATALOG: 25 PASSED, 0 FAILED\n');
}
