import React from 'react';

const About = () => (
    <main className="bg-dark text-light py-5">
        <div className="container">
            <h1>Tentang Kami</h1>
            <section>
                <h2>Misi Kami</h2>
                <p>Website ini bertujuan untuk mengedukasi masyarakat mengenai pentingnya keberlanjutan dalam industri teknologi. Kami berharap dapat meningkatkan kesadaran akan dampak lingkungan dari praktik teknologi yang kurang ramah lingkungan dan memberikan solusi berkelanjutan.</p>
            </section>
            <section>
                <h2>Langkah-Langkah yang Kami Lakukan</h2>
                <ul>
                    <li>Mengurangi penggunaan energi pada situs dengan teknik optimasi.</li>
                    <li>Mendorong penggunaan bahan dan produk elektronik yang dapat didaur ulang.</li>
                    <li>Menyediakan informasi mengenai praktik pengembangan web berkelanjutan.</li>
                </ul>
            </section>
        </div>
    </main>
);

export default About;
