# Summary React Fundamental

## JSX

**JSX (JavaScript XML)** adalah ekstensi sintaksis untuk JavaScript yang digunakan untuk menulis elemen HTML di dalam kode JavaScript. JSX mempermudah pengembangan antarmuka pengguna dengan menggabungkan markup HTML dan logika JavaScript dalam satu file. Dengan JSX, kode menjadi lebih intuitif dan mudah dipahami karena kita dapat menulis komponen UI seolah-olah sedang bekerja dengan HTML. Meskipun JSX tidak wajib digunakan, ia memberikan pengalaman pengembangan yang lebih nyaman dan memungkinkan React menginterpretasikan kode yang menyerupai HTML dengan efisien.

## React Component

**React Component** adalah blok utama dalam React. Komponen adalah potongan kode yang dapat digunakan kembali untuk membangun antarmuka pengguna. Komponen dalam React dapat berupa **functional components** atau **class components**. Functional components adalah komponen sederhana yang ditulis sebagai fungsi JavaScript biasa dan sering digunakan dalam pengembangan modern karena lebih ringan dan mendukung fitur React Hooks. Sebaliknya, class components adalah komponen yang ditulis menggunakan kelas dan memiliki akses ke metode siklus hidup (lifecycle methods) seperti `componentDidMount()` dan `componentDidUpdate()` untuk mengelola status dan perilaku komponen selama siklus hidupnya.

## Props dan React Lifecycle

**Props (Properties)** adalah mekanisme untuk mengirim data dari satu komponen ke komponen lainnya, biasanya dari komponen induk ke komponen anak. Dengan props, Anda bisa menyusun komponen secara modular dan dinamis. Komposisi props memungkinkan komponen menerima data dari luar dan menampilkannya sesuai kebutuhan. Selain itu, metode siklus hidup (lifecycle methods) di React membantu mengelola siklus hidup komponen seperti saat rendering, updating, dan unmounting. Functional components juga bisa menggunakan lifecycle events melalui **Hooks** seperti `useEffect()` untuk menangani efek samping seperti pengambilan data dan pembersihan (cleanup).
