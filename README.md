# Interactive Grading App

Aplikasi sederhana berbasis Node.js untuk memasukkan nama siswa, menentukan nilai, dan menampilkan grade berdasarkan nilai yang diperoleh. Aplikasi berjalan melalui terminal dan menggunakan **ES Modules** untuk memisahkan logika input interaktif dan proses penilaian.

## Fitur

- Memasukkan nama siswa dan nilai.
- Memvalidasi input nama dan nilai.
- Menentukan grade secara otomatis.
- Menampilkan riwayat data siswa yang telah dimasukkan.
- Mengakhiri aplikasi dengan mengetik `keluar`.

## Cara Menjalankan

Pastikan Node.js sudah terinstal, kemudian jalankan perintah berikut di terminal:

```bash
npm run start
```

Masukkan nama siswa dan nilai sesuai instruksi yang muncul. Untuk mengakhiri aplikasi, ketik `keluar` saat diminta memasukkan nama.

## Cara Kerja

1. **`index.mjs`** menjadi titik awal aplikasi dengan memanggil fungsi `interactive()` dari `interaktif.mjs`.
2. **`interaktif.mjs`** menggunakan modul `readline` untuk menerima input pengguna melalui terminal.
3. Aplikasi memvalidasi nama dan nilai agar input sesuai dengan ketentuan.
4. Nilai dikirim ke fungsi `grading()` dari `grading.mjs` untuk menentukan grade.
5. Data siswa disimpan dalam array `history`, kemudian seluruh riwayat ditampilkan kembali di terminal.
6. Proses input diulang sampai pengguna mengetik `keluar`.

## Ketentuan Grade

| Rentang Nilai | Grade |
|---|---|
| 80–100 | A |
| 70–79 | B |
| 60–69 | C |
| 50–59 | D |
| 0–49 | E |

