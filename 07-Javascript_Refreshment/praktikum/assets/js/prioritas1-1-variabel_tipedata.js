function swapValues(a, b) {
    let temp = a;
    a = b;
    b = temp;
    console.log("Setelah ditukar: a =", a, "b =", b);
}

swapValues(5, 10);

// Yang sebaiknya digunakan adalah let dimana digunakan untuk mendeklarasikan variabel yang dapat diubah dalam blok fungsi tanpa efek samping seperti yang ada pada var.
// Menggunakan const tidak cocok dalam hal ini karena kita perlu mengubah nilai a dan b.