# 📖 Manual Instruksi — ICD-10 Auto Coder
**Created by Dimas Abimanyu · Powered by Google Gemini AI**

> Aplikasi bantu coding diagnosis ICD-10 2nd Edition 2005 (WHO) dan prosedur ICD-9-CM Volume 3 berbasis kecerdasan buatan.

---

## 🌐 Akses Aplikasi
Buka browser → kunjungi: **https://autocodingicd10.netlify.app/**

---

## 🚀 Cara Penggunaan

### 1. Masukkan Catatan Klinis
- Paste **resume medis**, **catatan SOAP**, atau **anamnesa** pasien ke dalam kotak teks
- Bisa dalam **Bahasa Indonesia** maupun **Bahasa Inggris**
- Semakin lengkap catatan → semakin akurat hasil coding

**Informasi yang sebaiknya ada:**
- Diagnosis akhir dokter
- Tindakan/prosedur yang dilakukan
- Riwayat penyakit relevan (bekas SC, DM, HT, dll)
- Hasil pemeriksaan penunjang

### 2. Gunakan Contoh Kasus (Opsional)
Klik tombol contoh kasus yang tersedia untuk mencoba:
- `▸ Obstetri (Ny. X)` — kasus persalinan kompleks
- `▸ STEMI` — serangan jantung
- `▸ Stroke + HT` — stroke dengan hipertensi
- `▸ DM + Retinopati` — diabetes dengan komplikasi
- `▸ Fraktur Femur` — patah tulang

### 3. Klik "Analyze & Code"
Tunggu beberapa detik, AI akan menganalisis dan menghasilkan kode.

---

## 📋 Membaca Hasil Coding

### Badge Diagnosis
| Badge | Arti |
|-------|------|
| 🔴 **DU** | Diagnosis Utama — kondisi utama penyebab perawatan |
| 🔵 **DS** | Diagnosis Sekunder — komorbiditas/komplikasi |
| 🟢 **PROC** | Prosedur tindakan (ICD-9-CM) |

### Simbol Dagger-Asterisk
| Simbol | Arti | Posisi |
|--------|------|--------|
| **†** (Dagger) | Kode etiologi/penyebab | Selalu DU jika berpasangan |
| **\*** (Asterisk) | Kode manifestasi | Selalu DS, **tidak boleh** jadi DU |

> ⚠️ Kode dagger dan asterisk **selalu berpasangan** — keduanya harus dicantumkan, dagger ditulis lebih dulu.

### Volume 3 Index Path
Menampilkan jalur penelusuran dari **ICD-10 Volume 3 Alphabetical Index**, contoh:
```
Section
- caesarean (for) O82.9
- - previous
- - - caesarean section O34.2
O34.2 Maternal care due to uterine scar from previous surgery
```
Klik tombol **📋 Copy** untuk menyalin jalur index.

### Volume 1 Tabular Notes
Menampilkan catatan penting dari **ICD-10 Volume 1** per kode:
| Label | Warna | Arti |
|-------|-------|------|
| **Includes** | Hijau | Kondisi yang termasuk dalam kode ini |
| **Excludes** | Merah | Kondisi yang dikecualikan — perhatikan! |
| **Note** | Biru | Catatan tambahan penggunaan kode |
| **Use additional code** | Kuning | Wajib tambahkan kode pendamping |
| **Code first** | Pink | Kode ini harus ditulis setelah kode lain |

### Validasi Kaidah Coding
Banner oranye di atas hasil berisi peringatan otomatis:
- 🔴 **ERROR** — pelanggaran kaidah coding
- 🟡 **WARNING** — potensi masalah yang perlu dicek
- 🔵 **INFO** — pengingat penting

### Confidence Score
Persentase keyakinan AI terhadap kode yang dipilih:
- **90–100%** — diagnosis eksplisit, kode sangat yakin
- **70–89%** — probable, sebaiknya diverifikasi
- **< 70%** — perlu verifikasi manual lebih teliti

---

## ⚠️ Penting Diperhatikan
1. **Selalu verifikasi** hasil coding dengan buku ICD-10 Vol.1, Vol.3, dan ICD-9-CM yang berlaku
2. Kode dengan confidence **< 80%** wajib dicek manual
3. Periksa semua **Excludes notes** — bisa membatalkan penggunaan kode
4. Aplikasi ini **bukan pengganti** penilaian coder profesional bersertifikat
5. Untuk keperluan **akademik dan pembelajaran** saja

---

## 🔤 Singkatan Medis yang Dikenali
| Singkatan | Kepanjangan |
|-----------|-------------|
| SC / SCTP | Sectio Caesarea Transperitonealis |
| TTTS | Twin-to-Twin Transfusion Syndrome |
| IUFD | Intrauterine Fetal Death |
| Gemelli | Multiple Gestation (Kembar) |
| Partus prematurus | Preterm Labour |
| Bekas SC | Uterine Scar from Previous Caesarean |
| HT | Hypertension |
| DM | Diabetes Mellitus |
| ORIF | Open Reduction Internal Fixation |
| ai | Atas Indikasi (Due to / Because of) |
| OD/OS/ODS | Oculus Dexter/Sinister/Uterque |

---

*Created by Dimas Abimanyu · Powered by Google Gemini AI*
