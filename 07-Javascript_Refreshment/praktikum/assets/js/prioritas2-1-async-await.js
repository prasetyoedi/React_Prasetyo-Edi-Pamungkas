async function fetchData() {
    const simulateAPICall = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Data berhasil diambil dari API");
            }, 2000);
        });
    };

    try {
        console.log("Mengambil data...");
        const data = await simulateAPICall();
        console.log(data);
    } catch (error) {
        console.error("Terjadi kesalahan:", error);
    }
}

fetchData();
