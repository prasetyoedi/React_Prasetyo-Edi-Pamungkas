# Summary Introduction to RESTful API

## API

API, atau **Application Programming Interface**, adalah antarmuka yang memungkinkan aplikasi untuk berkomunikasi satu sama lain. API berfungsi sebagai jembatan antara berbagai sistem atau perangkat lunak sehingga mereka dapat bertukar data dan fungsi tanpa harus memahami implementasi teknis di baliknya. Misalnya, sebuah aplikasi cuaca bisa menggunakan API untuk mengambil data cuaca dari layanan eksternal. Dengan API, pengembang dapat mempercepat pengembangan aplikasi karena dapat menggunakan fitur atau data dari aplikasi lain tanpa perlu membangunnya dari awal.

## REST API

**REST API** adalah jenis API yang paling umum digunakan saat ini, berdasarkan arsitektur Representational State Transfer (REST). REST API bekerja dengan prinsip HTTP, di mana setiap permintaan dapat melakukan tindakan seperti mengambil data (**GET**), mengirim data baru (**POST**), memperbarui data (**PUT** atau **PATCH**), dan menghapus data (**DELETE**). REST API dikenal karena kesederhanaannya dan skalabilitasnya, sehingga cocok untuk aplikasi web dan mobile yang memerlukan pertukaran data yang efisien. Ketika berinteraksi dengan REST API, client akan menerima berbagai **HTTP response codes**, seperti:

- **200** (OK)
- **201** (Created)
- **400** (Bad Request)
- **404** (Not Found)
- **500** (Internal Server Error)

Response codes ini membantu mengidentifikasi status dan hasil dari setiap permintaan yang dilakukan.

## Mock API

**Mock API** adalah alat yang sangat berguna bagi pengembang untuk menguji aplikasi yang sedang dikembangkan sebelum API sebenarnya selesai atau tersedia. Dengan mock API, pengembang dapat mensimulasikan respons API dengan data sementara untuk melihat bagaimana aplikasi akan berinteraksi dengan data tersebut. Ini sangat membantu dalam mempercepat pengembangan dan pengujian tanpa harus menunggu backend selesai.
