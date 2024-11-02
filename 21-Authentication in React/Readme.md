# Summary Authentication in React

# Autentikasi dan Otorisasi

**Autentikasi** dan **otorisasi** adalah dua konsep penting dalam keamanan aplikasi yang memastikan pengguna adalah siapa yang mereka klaim dan dapat mengakses sumber daya sesuai dengan hak akses mereka.

**Autentikasi** adalah proses memverifikasi identitas pengguna atau sistem yang mencoba mengakses aplikasi. Ini biasanya melibatkan kredensial seperti nama pengguna dan kata sandi. Setelah pengguna berhasil masuk, aplikasi mengenali identitas mereka. Di sisi lain, **otorisasi** menentukan apa yang diizinkan untuk dilakukan oleh pengguna yang telah diautentikasi dalam aplikasi. Dengan kata lain, setelah autentikasi mengonfirmasi siapa pengguna tersebut, otorisasi mendefinisikan tindakan apa yang dapat mereka lakukan, seperti mengakses sumber daya atau fungsionalitas tertentu.

## Perbedaan Utama

Perbedaan utama antara autentikasi dan otorisasi terletak pada tujuannya:

- **Autentikasi** memeriksa identitas pengguna.
- **Otorisasi** menentukan hak akses dan izin pengguna.

Autentikasi terjadi sebelum otorisasi dalam alur pengguna. Misalnya, seorang pengguna mungkin berhasil masuk ke aplikasi (autentikasi), tetapi mereka mungkin tidak memiliki akses ke panel admin jika peran mereka tidak memberikan izin tersebut (otorisasi).

## Alur Autentikasi dan Otorisasi di React

Dalam aplikasi React, alur autentikasi dan otorisasi melibatkan baik **Frontend (FE)** maupun **Backend (BE)**.

1. **Login Pengguna:** Proses dimulai di Frontend ketika pengguna mengirimkan kredensial mereka (nama pengguna dan kata sandi) melalui formulir login.
2. **Permintaan API:** Frontend mengirimkan permintaan API ke Backend untuk verifikasi kredensial ini.
3. **Penerbitan Token:** Setelah autentikasi berhasil, Backend merespons dengan **token** (misalnya, JSON Web Token - JWT).
4. **Penyimpanan Token:** Frontend menyimpan token ini, biasanya di `localStorage` atau `sessionStorage`.
5. **Permintaan Terproteksi:** Untuk permintaan berikutnya ke sumber daya terproteksi, Frontend menyertakan token ini di **header Authorization**.
6. **Verifikasi Otorisasi:** Backend memverifikasi token untuk mengautentikasi pengguna dan memeriksa izin mereka, memastikan bahwa mereka berhak untuk melakukan tindakan yang diminta.
