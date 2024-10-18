# Summary Router React

## Pengertian Router React

Router React adalah pustaka yang memungkinkan pengembang untuk menavigasi antar berbagai halaman atau komponen dalam aplikasi React tanpa harus memuat ulang seluruh halaman. Router ini berfungsi untuk mengatur URL dan menampilkan konten yang relevan sesuai dengan URL yang diakses. Terdapat dua jenis aplikasi web yang sering dibahas dalam konteks routing: **Single Page Application (SPA)** dan **Multi Page Application (MPA)**. SPA memuat satu halaman HTML yang secara dinamis memperbarui kontennya tanpa memuat ulang halaman, sementara MPA memuat halaman baru dari server untuk setiap navigasi.

## Keunggulan SPA dan MPA

**Single Page Application (SPA)** memiliki keunggulan dalam memberikan pengalaman pengguna yang lebih cepat dan responsif karena tidak ada pemuatan ulang halaman yang memakan waktu. Hal ini membuat interaksi pengguna menjadi lebih lancar dan aplikatif. Di sisi lain, **Multi Page Application (MPA)** memiliki keunggulan dalam SEO (Search Engine Optimization), karena setiap halaman memiliki URL unik dan dapat diindeks secara terpisah oleh mesin pencari. MPA juga lebih mudah untuk diimplementasikan pada aplikasi yang lebih besar dan kompleks, di mana setiap halaman dapat dikelola secara terpisah.

## URL Parameter dan Hook Routing

**URL parameter** adalah bagian dari URL yang memungkinkan kita untuk mengirimkan informasi tambahan kepada aplikasi, seperti ID atau kategori, yang dapat digunakan untuk mengambil data tertentu. Dalam React Router, kita dapat menggunakan berbagai hook routing seperti `useHistory`, `useLocation`, `useParams`, dan `useRouteMatch`.

- **`useHistory`** memungkinkan kita untuk mengelola riwayat navigasi.
- **`useLocation`** memberikan informasi tentang lokasi saat ini, termasuk state yang mungkin dikirimkan.
- **`useParams`** digunakan untuk mengakses URL parameter.
- **`useRouteMatch`** membantu dalam mencocokkan rute dan mendapatkan informasi tentang rute yang aktif.