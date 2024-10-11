import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function ProductForm() {
    const [productName, setProductName] = React.useState('');
    const [productCategory, setProductCategory] = React.useState('');
    const [productFreshness, setProductFreshness] = React.useState('');
    const [productPrice, setProductPrice] = React.useState('');
    const [products, setProducts] = React.useState([]);
    const [error, setError] = React.useState('');
    const [isProductNameValid, setIsProductNameValid] = React.useState(true);
    const [isProductPriceValid, setIsProductPriceValid] = React.useState(true);
    const [editingProduct, setEditingProduct] = React.useState(null);
    const [showModal, setShowModal] = React.useState(false);

    const handleClick = () => {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        console.log(randomNumber);
    };

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
            console.log('Form submitted');
        }
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            setProducts(products.filter(product => product.id !== id));
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
        setProducts(products.map(product =>
            product.id === editingProduct.id ? { ...editingProduct, productName, productCategory, productFreshness, productPrice } : product
        ));
        setShowModal(false);
        setEditingProduct(null);
        setProductName('');
        setProductCategory('');
        setProductFreshness('');
        setProductPrice('');
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="title">Detail Product</div>
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
                        <tr key={product.id}>
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
                                    Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

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
