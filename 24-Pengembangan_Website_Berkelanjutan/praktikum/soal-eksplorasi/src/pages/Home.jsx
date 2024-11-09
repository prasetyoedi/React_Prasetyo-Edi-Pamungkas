import React from 'react';

const Home = () => (
    <main className="bg-dark text-light py-5">
        <div className="container">
            <h1>Selamat Datang di Teknologi Berkelanjutan</h1>
            <p>Di sini kami berbagi informasi tentang praktik-praktik ramah lingkungan di dunia teknologi.</p>
            <img src="https://via.placeholder.com/600x400" alt="Keberlanjutan dalam teknologi" className="img-fluid" />
            <section className="mt-4">
                <h2>Kenapa Penting untuk Menjaga Lingkungan?</h2>
                <p>Teknologi sering kali berkontribusi pada emisi karbon dan konsumsi energi yang tinggi. Di situs ini, kami memaparkan langkah-langkah yang dapat diambil oleh perusahaan teknologi dan pengguna dalam mengurangi dampak lingkungan, mulai dari optimasi website hingga penggunaan energi terbarukan di pusat data.</p>
            </section>
        </div>
    </main>
);

export default Home;
