import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

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
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
    const [isProductNameValid, setIsProductNameValid] = useState(true);
    const [isProductPriceValid, setIsProductPriceValid] = useState(true);
    const [editingProduct, setEditingProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products'));
        if (storedProducts) {
            setProducts(storedProducts);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    }, [products]);

    const handleProductNameChange = (e) => {
        const value = e.target.value;
        if (value.length > 25) {
            alert('Product Name must not exceed 25 characters.');
        }
        if (value.length > 10) {
            setError('Product Name tidak boleh melebihi 10 karakter');
            setIsProductNameValid(false);
        } else {
            setError('');
            setIsProductNameValid(true);
        }
        setProductName(value);
    };

    const handleSubmit = (e) => {
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

        if (isValid) {
            const newProduct = {
                id: crypto.randomUUID(),
                productName,
                productCategory,
                productFreshness,
                productPrice,
            };
            setProducts([...products, newProduct]);
            localStorage.setItem('products', JSON.stringify([...products, newProduct])); // Save to localStorage
            console.log('Form submitted');
        }
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            const updatedProducts = products.filter(product => product.id !== id);
            setProducts(updatedProducts);
            localStorage.setItem('products', JSON.stringify(updatedProducts)); // Save to localStorage
        }
    };

    const handleEdit = (product) => {
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
        localStorage.setItem('products', JSON.stringify(updatedProducts)); // Save to localStorage
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
                                            <a className="dropdown-item" href="#" onClick={() => setProductCategory('Home Appliances')}>
                                                Home Appliances
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <p style={{ marginTop: 33 }}>Image of Product</p>
                                <input type="file" className="form-control" />
                                <p style={{ marginTop: 33 }}>Product Freshness</p>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="productFreshness"
                                        id="brandNew"
                                        value="Brand New"
                                        onChange={(e) => setProductFreshness(e.target.value)}
                                    />
                                    <label className="form-check-label" htmlFor="brandNew">
                                        Brand New
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="productFreshness"
                                        id="secondhand"
                                        value="Second Hand"
                                        onChange={(e) => setProductFreshness(e.target.value)}
                                    />
                                    <label className="form-check-label" htmlFor="secondhand">
                                        Second Hand
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="productFreshness"
                                        id="refurbished"
                                        value="Refurbished"
                                        onChange={(e) => setProductFreshness(e.target.value)}
                                    />
                                    <label className="form-check-label" htmlFor="refurbished">
                                        Refurbished
                                    </label>
                                </div>
                                <p className="mt-3">Additional Description</p>
                                <textarea className="form-control" rows={5} defaultValue={""} />
                                <p style={{ marginTop: 33 }}>Product Price</p>
                                <input
                                    type="number"
                                    name="productPrice"
                                    className={`form-control ${!isProductPriceValid ? 'is-invalid' : ''}`}
                                    placeholder="$1"
                                    value={productPrice}
                                    onChange={(e) => setProductPrice(e.target.value)}
                                />
                                <div
                                    className="d-flex justify-content-center"
                                    style={{ marginTop: 138, paddingBottom: 100 }}
                                >
                                    <button className="btn btn-primary" style={{ width: 557 }} type="submit">
                                        Submit
                                    </button>
                                </div>
                            </form>
                            <table className="table mt-5">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Product Name</th>
                                        <th>Product Category</th>
                                        <th>Product Freshness</th>
                                        <th>Product Price</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product, index) => (
                                        <tr key={product.id} onClick={() => handleRowClick(product.id)}>
                                            <td>{index + 1}</td>
                                            <td>{product.productName}</td>
                                            <td>{product.productCategory}</td>
                                            <td>{product.productFreshness}</td>
                                            <td>{product.productPrice}</td>
                                            <td>
                                                <button className="btn btn-danger" onClick={() => handleDelete(product.id)}>
                                                    Delete
                                                </button>
                                            </td>
                                            <td>
                                                <button className="btn btn-warning" onClick={() => handleEdit(product)}>
                                                    Show
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
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
                        <div className="mb-3">
                            <label className="form-label">Product Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={productName}
                                onChange={handleProductNameChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Product Category</label>
                            <input
                                type="text"
                                className="form-control"
                                value={productCategory}
                                onChange={(e) => setProductCategory(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Product Freshness</label>
                            <input
                                type="text"
                                className="form-control"
                                value={productFreshness}
                                onChange={(e) => setProductFreshness(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Product Price</label>
                            <input
                                type="number"
                                className="form-control"
                                value={productPrice}
                                onChange={(e) => setProductPrice(e.target.value)}
                            />
                        </div>
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
