# Summary Basic React Form

## Pengertian Basic React Form

Basic React Form adalah komponen yang digunakan untuk mengumpulkan input dari pengguna dalam aplikasi React. Form ini berfungsi sebagai antarmuka bagi pengguna untuk memasukkan data, seperti teks, angka, dan pilihan. Dalam React, kita dapat menggunakan dua pendekatan utama untuk mengelola form: **Controlled Components** dan **Uncontrolled Components**. Controlled Components mengandalkan state React untuk mengontrol nilai input, sedangkan Uncontrolled Components membiarkan elemen DOM mengelola nilai input-nya sendiri.

## Controller Component dan Uncontroller Component

**Controlled Component** adalah komponen dimana nilai input dikelola sepenuhnya oleh React melalui state. Setiap perubahan pada input akan memperbarui state, dan sebaliknya, nilai input akan disinkronkan dengan state tersebut. Ini digunakan untuk memiliki kontrol penuh atas data yang diinputkan. Di sisi lain, **Uncontrolled Component** membiarkan elemen DOM mengelola nilai input-nya sendiri, dan pengembang hanya akan menarik nilai tersebut ketika diperlukan, misalnya saat formulir disubmit. Pendekatan ini dapat mengurangi kompleksitas dalam beberapa kasus, tetapi mengurangi kontrol penuh atas data input.

## Penjelasan Validasi pada Form React

Validasi form dalam React adalah proses untuk memastikan bahwa data yang dimasukkan oleh pengguna memenuhi kriteria tertentu sebelum dikirim atau diproses. Validasi ini penting untuk meningkatkan kualitas data dan mencegah kesalahan. Dalam React, validasi dapat dilakukan dengan cara sederhana, seperti memeriksa nilai input ketika pengguna mengetik, atau lebih kompleks dengan menggunakan library pihak ketiga seperti Formik atau Yup. Pengembang dapat memberikan umpan balik langsung kepada pengguna melalui pesan kesalahan atau penanda visual, sehingga pengguna dapat memperbaiki kesalahan sebelum mengirimkan form.
