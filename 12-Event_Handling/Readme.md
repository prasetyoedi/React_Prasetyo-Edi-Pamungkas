# Summary Event Handling

## Apa itu State?

**State** adalah sebuah objek yang digunakan untuk menyimpan data yang bersifat dinamis dan bisa berubah seiring waktu. State memungkinkan komponen untuk melacak dan merespons perubahan data secara otomatis, dengan memicu render ulang komponen ketika state berubah. Setiap komponen dapat memiliki state internalnya sendiri, dan perubahan pada state dilakukan menggunakan metode `setState` untuk komponen berbasis class atau `useState` untuk komponen berbasis fungsi. State sangat penting dalam membuat aplikasi React yang interaktif karena memungkinkan komponen merespons interaksi pengguna dan perubahan data secara langsung.

## Perbedaan Props dan State

**Props** dan **state** adalah dua konsep penting dalam React yang digunakan untuk mengelola data dalam komponen. Props adalah data yang dikirim dari komponen induk ke komponen anak dan bersifat read-only, artinya komponen penerima tidak bisa mengubah props tersebut. Props ideal untuk data yang statis atau yang tidak perlu diubah oleh komponen. Di sisi lain, **state** adalah data lokal yang dikelola oleh komponen itu sendiri dan bisa diubah sesuai kebutuhan. Jadi, jika props bersifat pasif (tidak bisa diubah), state bersifat aktif (dapat berubah seiring waktu). Props digunakan untuk mengirim data antar komponen, sedangkan state digunakan untuk menyimpan dan mengubah data lokal dalam satu komponen.

## Stateful vs Stateless Components dan Event Handling

**Stateful components** adalah komponen yang mengelola state internal dan dapat menangani perubahan data seiring interaksi pengguna. Komponen-komponen ini lebih kompleks karena mereka bertanggung jawab untuk menyimpan, mengubah, dan merespons data yang ada di dalam state. Sebaliknya, **stateless components** (atau lebih dikenal sebagai **functional components**) tidak memiliki state dan hanya digunakan untuk menampilkan UI berdasarkan props yang diterima. Stateless components lebih sederhana karena mereka hanya fokus pada rendering dan tidak menangani perubahan data internal.

**Event handling** dalam React adalah cara untuk menangani interaksi pengguna seperti klik, input, atau event lainnya yang dapat memicu perubahan state atau aksi lainnya. React menyediakan berbagai event handler seperti `onClick`, `onChange`, dan `onSubmit` yang dapat digunakan untuk menangani interaksi dan memperbarui state sesuai kebutuhan.
