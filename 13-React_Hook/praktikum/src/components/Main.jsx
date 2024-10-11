import React, { useState } from 'react';
import ProductForm from './ProductForm';

const article = {
    title: {
        id: "Buat Produk",
        en: "Create Product"
    },
    description: {
        id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
        en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."
    }
};

export default function Main() {
    const [language, setLanguage] = useState('en');

    const toggleLanguage = () => {
        setLanguage(prevLang => (prevLang === 'en' ? 'id' : 'en'));
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-2" />
                    <div className="col-md-8">
                        <div className="d-flex justify-content-center">
                            <img
                                src="/bootstrap-logo.png"
                                alt="Logo Bootstrap"
                                className="logo"
                            />
                        </div>
                        <div className="title">{article.title[language]}</div>
                        <p className="text-center description">
                            {article.description[language]}
                        </p>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-primary" onClick={toggleLanguage}>
                                {language === 'en' ? 'Ubah ke Bahasa Indonesia' : 'Ubah ke English'}
                            </button>
                        </div>
                        <div className="detailProduct">
                            <ProductForm />
                        </div>
                    </div>
                    <div className="col-md-2" />
                </div>
            </div>
        </>
    );
}
