import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ListProduct from './ListProduct';

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

export default function CreateProduct() {
    const [language, setLanguage] = useState('en');

    const toggleLanguage = () => {
        setLanguage(prevLang => (prevLang === 'en' ? 'id' : 'en'));
    };

    const [productName, setProductName] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productFreshness, setProductFreshness] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImage, setProductImage] = useState(null);

    const [error, setError] = useState('');
    const [isProductNameValid, setIsProductNameValid] = useState(true);
    const [isProductPriceValid, setIsProductPriceValid] = useState(true);
    const [isProductFreshnessValid, setIsProductFreshnessValid] = useState(true);
    const [isProductImageValid, setIsProductImageValid] = useState(true);
    const [editingProduct, setEditingProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        setProducts(storedProducts);
    }, []);

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    }, [products]);

    const handleProductNameChange = (e) => {
        const value = e.target.value;
        const regex = /^[A-Za-z\s]*$/;
        if (!regex.test(value)) {
            setError('Product Name must contain only letters and spaces.');
            setIsProductNameValid(false);
        } else if (value.length > 25) {
            setError('Product Name must not exceed 25 characters.');
            setIsProductNameValid(false);
        } else {
            setError('');
            setIsProductNameValid(true);
        }
        setProductName(value);
    };

    const handleProductCategoryChange = (e) => {
        const value = e.target.value;
        const regex = /^[A-Za-z\s]*$/;
        if (!regex.test(value)) {
            setError('Product Category must contain only letters and spaces.');
            setIsProductNameValid(false);
        } else {
            setError('');
            setIsProductNameValid(true);
        }
        setProductCategory(value);
    };

    const handleProductFreshnessChange = (e) => {
        const value = e.target.value;
        const validOptions = ['Brand New', 'Second Hand', 'Refurbished'];
        if (!validOptions.includes(value)) {
            setError('Invalid Product Freshness value.');
            setIsProductFreshnessValid(false);
        } else {
            setError('');
            setIsProductFreshnessValid(true);
        }
        setProductFreshness(value);
    };

    const handleProductPriceChange = (e) => {
        const value = e.target.value;
        const regex = /^[1-9]\d*(\.\d+)?$/;
        if (!regex.test(value)) {
            setError('Product Price must be a positive number.');
            setIsProductPriceValid(false);
        } else {
            setError('');
            setIsProductPriceValid(true);
        }
        setProductPrice(value);
    };

    const handleProductImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const validTypes = ['image/jpeg', 'image/png'];
            if (!validTypes.includes(file.type)) {
                setIsProductImageValid(false);
            } else {
                setProductImage(file);
                setIsProductImageValid(true);
                setError('');
            }
        } else {
            setIsProductImageValid(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let isValid = true;

        if (!productName) {
            alert('Please enter a valid product name.');
            setIsProductNameValid(false);
            isValid = false;
        }

        if (!productPrice || productPrice <= 0) {
            setIsProductPriceValid(false);
            isValid = false;
        } else {
            setIsProductPriceValid(true);
        }

        if (!productFreshness) {
            setIsProductFreshnessValid(false);
            isValid = false;
        } else {
            setIsProductFreshnessValid(true);
        }

        if (!productImage) {
            setIsProductImageValid(false);
            isValid = false;
        } else {
            setIsProductImageValid(true);
        }

        if (isValid) {
            const newProduct = {
                productName,
                productCategory,
                productFreshness,
                productPrice,
                productImage: productImage ? URL.createObjectURL(productImage) : null,
            };

            try {
                const response = await axios.post('https://6726cde1302d03037e6e5a5c.mockapi.io/products/', newProduct);
                setProducts([...products, response.data]);
                alert('Product successfully saved!');
            } catch (error) {
                console.error('Error saving product:', error);
                alert('There was an error saving the product.');
            }
        }
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            const updatedProducts = products.filter(product => product.id !== id);
            setProducts(updatedProducts);
            localStorage.setItem('products', JSON.stringify(updatedProducts));
        }
    };

    const handleEdit = (e, product) => {
        e.stopPropagation();
        setEditingProduct(product);
        setProductName(product.productName);
        setProductCategory(product.productCategory);
        setProductFreshness(product.productFreshness);
        setProductPrice(product.productPrice);
        setShowModal(true);
    };

    const handleUpdate = () => {
        const updatedProducts = products.map(product =>
            product.id === editingProduct.id ? { ...editingProduct, productName, productCategory, productFreshness, productPrice } : product
        );
        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
        setShowModal(false);
        setEditingProduct(null);
        setProductName('');
        setProductCategory('');
        setProductFreshness('');
        setProductPrice('');
    };

    const navigate = useNavigate();
    const handleRowClick = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-2" />
                    <div className="col-md-8">
                        <div className="d-flex justify-content-center">
                            <img src="/bootstrap-logo.png" alt="Logo Bootstrap" className="logo" />
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
                            <form onSubmit={handleSubmit}>
                                <h2 className='mt-4'>Detail Product</h2>
                                <p>Product Name</p>
                                <input
                                    type="text"
                                    className={`form-control ${!isProductNameValid ? 'is-invalid' : ''}`}
                                    value={productName}
                                    onChange={handleProductNameChange}
                                />
                                {error && <p style={{ color: 'red' }}>{error}</p>}
                                <p style={{ marginTop: 33 }}>Product Category</p>
                                <div className="dropdown">
                                    <button
                                        className="btn dropdown-toggle"
                                        style={{ border: "1px solid #000" }}
                                        type="button"
                                        id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {productCategory || 'Choose ...'}
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li>
                                            <a className="dropdown-item" href="#" onClick={() => setProductCategory('Electronics')}>
                                                Electronics
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#" onClick={() => setProductCategory('Fashion')}>
                                                Fashion
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#" onClick={() => setProductCategory('Home Appliance')}>
                                                Home Appliance
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <p style={{ marginTop: 33 }}>Product Freshness</p>
                                <div>
                                    <input
                                        type="radio"
                                        id="brandNew"
                                        name="productFreshness"
                                        value="Brand New"
                                        checked={productFreshness === 'Brand New'}
                                        onChange={handleProductFreshnessChange}
                                    />
                                    <label htmlFor="brandNew">Brand New</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="secondHand"
                                        name="productFreshness"
                                        value="Second Hand"
                                        checked={productFreshness === 'Second Hand'}
                                        onChange={handleProductFreshnessChange}
                                    />
                                    <label htmlFor="secondHand">Second Hand</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="refurbished"
                                        name="productFreshness"
                                        value="Refurbished"
                                        checked={productFreshness === 'Refurbished'}
                                        onChange={handleProductFreshnessChange}
                                    />
                                    <label htmlFor="refurbished">Refurbished</label>
                                </div>
                                <p style={{ marginTop: 33 }}>Product Price</p>
                                <input
                                    type="number"
                                    className={`form-control ${!isProductPriceValid ? 'is-invalid' : ''}`}
                                    value={productPrice}
                                    onChange={handleProductPriceChange}
                                />
                                <p style={{ marginTop: 33 }}>Product Image</p>
                                <input
                                    type="file"
                                    accept="image/*"
                                    className={`form-control ${!isProductImageValid ? 'is-invalid' : ''}`}
                                    onChange={handleProductImageChange}
                                />
                                <button type="submit" className="btn btn-primary mt-4">
                                    Submit
                                </button>
                            </form>
                        </div>
                        <ListProduct products={products} setProducts={setProducts} />
                    </div>
                    <div className="col-md-2" />
                </div>
            </div>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <p>Product Name</p>
                        <input
                            type="text"
                            className="form-control"
                            value={productName}
                            onChange={handleProductNameChange}
                        />
                        <p style={{ marginTop: 33 }}>Product Category</p>
                        <input
                            type="text"
                            className="form-control"
                            value={productCategory}
                            onChange={handleProductCategoryChange}
                        />
                        <p style={{ marginTop: 33 }}>Product Freshness</p>
                        <input
                            type="text"
                            className="form-control"
                            value={productFreshness}
                            onChange={handleProductFreshnessChange}
                        />
                        <p style={{ marginTop: 33 }}>Product Price</p>
                        <input
                            type="number"
                            className="form-control"
                            value={productPrice}
                            onChange={handleProductPriceChange}
                        />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
