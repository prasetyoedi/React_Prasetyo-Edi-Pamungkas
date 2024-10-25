# Summary Deployment with Vercel

## Pengertian Deploy

Deploy adalah proses mengirimkan aplikasi atau situs web ke lingkungan produksi sehingga dapat diakses dan digunakan oleh pengguna. Setelah aplikasi selesai dibangun, langkah ini menjadi krusial untuk menyebarkan versi produksi dari aplikasi ke server atau platform hosting. Dengan deployment, aplikasi dapat diakses melalui domain atau URL, menjadikan langkah ini sebagai tahapan akhir dalam pengembangan sebelum aplikasi benar-benar tersedia bagi publik.

## Deploy Aplikasi React

Deploy aplikasi React khususnya melibatkan proses _build_ dan pengunggahan hasil build ke platform hosting. React perlu dibangun terlebih dahulu menjadi kode yang dioptimalkan untuk produksi menggunakan perintah `npm run build`. Platform hosting seperti **Vercel**, **Netlify**, atau **Heroku** sering digunakan untuk menyimpan dan mengakses aplikasi React. Platform ini menyediakan infrastruktur untuk menangani kebutuhan server, kecepatan akses, dan performa aplikasi.

## Vercel

**Vercel** adalah platform yang sangat populer di kalangan pengembang untuk deployment aplikasi frontend, termasuk React. Platform ini menawarkan proses deployment yang mudah dan cepat, integrasi dengan GitHub, serta kemampuan untuk melakukan _automatic deployment_ setiap kali kode diperbarui. Mendeploy aplikasi React dengan Vercel hanya memerlukan beberapa langkah: setelah menyiapkan aplikasi dan menghubungkannya ke Vercel, proses deploy dapat dilakukan secara otomatis setelah setiap commit atau perubahan. Keuntungan deployment ini mencakup kecepatan akses yang optimal, keamanan, skalabilitas, dan dukungan CDN sehingga aplikasi dapat diakses dengan cepat dari berbagai wilayah.
