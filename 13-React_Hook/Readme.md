# Summary React Hooks

## React Hooks

**React Hooks** adalah fitur di React yang menggunakan state dan fitur lain tanpa perlu menulis class component. Diperkenalkan pada versi 16.8, hooks menyederhanakan pengelolaan logika komponen dan memudahkan penulisan kode yang lebih modular dan dapat digunakan kembali. Dengan hooks, kita bisa menangani logika stateful di dalam komponen fungsional, yang sebelumnya hanya bisa dilakukan di dalam class component. Salah satu keuntungan besar dari hooks adalah kemampuannya untuk memisahkan logika komponen ke dalam custom hooks yang dapat digunakan kembali di beberapa komponen.

## Jenis-Jenis Hooks

Beberapa **hooks** yang paling sering digunakan di React adalah `useState`, `useEffect`, `useContext`, `useReducer`, dan `useRef`.

- **`useState`** digunakan untuk menyimpan dan memperbarui state lokal di dalam komponen.
- **`useEffect`** sering dipakai untuk mengelola efek samping seperti pengambilan data (data fetching), subscription, atau mengelola event listener.
- **`useContext`** memudahkan pengaksesan context API tanpa perlu prop drilling.
- **`useReducer`** adalah alternatif dari `useState` yang lebih kompleks dan digunakan untuk logika pengelolaan state yang lebih rumit.
- **`useRef`** digunakan untuk menyimpan referensi elemen DOM atau nilai yang tidak memerlukan rerender saat berubah.

## Penjelasan `useState` dan `useEffect`

**`useState`** adalah hook yang paling dasar dan berguna untuk mengelola state di dalam komponen fungsional. Hook ini mengembalikan array yang terdiri dari nilai state dan fungsi untuk memperbarui nilai tersebut. Contohnya, `[state, setState] = useState(initialValue)` yang digunakan untuk mengubah nilai `state` dengan memanggil `setState`.

**`useEffect`** adalah hook yang digunakan untuk mengelola efek samping di dalam komponen, seperti melakukan request HTTP, mengatur timer, atau mengelola subscription. Dengan `useEffect`, kita bisa mengatur kapan efek tersebut dijalankan dengan mendefinisikan **dependency array**, yang berisi variabel yang akan memicu ulang efek ketika berubah.
