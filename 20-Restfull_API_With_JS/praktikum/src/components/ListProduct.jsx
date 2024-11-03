import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';

export default function ListProduct({ products, setProducts }) {
    const [editingProduct, setEditingProduct] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [productName, setProductName] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productFreshness, setProductFreshness] = useState('');
    const [productPrice, setProductPrice] = useState('');

    useEffect(() => {
        fetchProducts();
    }, []);

    // Fetch all products from the API
    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://6726cde1302d03037e6e5a5c.mockapi.io/products/');
            console.log("Fetched products:", response.data); // Tambahkan log ini
            setProducts(response.data);
        } catch (error) {
            console.error("Failed to fetch products:", error);
        }
    };


    // Handle delete product
    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            try {
                await axios.delete(`https://6726cde1302d03037e6e5a5c.mockapi.io/products/${id}`);
                alert("Product successfully deleted!");
                fetchProducts(); // Refresh products list after deletion
            } catch (error) {
                console.error("Error deleting product:", error);
                alert("There was an error deleting the product.");
            }
        }
    };

    // Open the edit modal and set the product details
    const openEditModal = (product) => {
        setEditingProduct(product);
        setProductName(product.productName);
        setProductCategory(product.productCategory);
        setProductFreshness(product.productFreshness);
        setProductPrice(product.productPrice);
        setShowEditModal(true);
    };

    // Handle update product
    const handleUpdate = async () => {
        if (editingProduct) {
            const updatedProduct = {
                productName,
                productCategory,
                productFreshness,
                productPrice
            };

            try {
                await axios.put(`https://6726cde1302d03037e6e5a5c.mockapi.io/products/${editingProduct.id}`, updatedProduct);
                alert("Product successfully updated!");
                fetchProducts(); // Refresh products list after update
                setShowEditModal(false);
            } catch (error) {
                console.error("Error updating product:", error);
                alert("There was an error updating the product.");
            }
        }
    };

    return (
        <div>
            <h3>Product List</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Freshness</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.productName}</td>
                            <td>{product.productCategory}</td>
                            <td>{product.productFreshness}</td>
                            <td>{product.productPrice}</td>
                            <td>
                                <button
                                    className="btn btn-primary me-2"
                                    onClick={() => openEditModal(product)}
                                >
                                    Update
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(product.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Edit Modal */}
            <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
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
                            onChange={(e) => setProductName(e.target.value)}
                        />
                        <p style={{ marginTop: 33 }}>Product Category</p>
                        <input
                            type="text"
                            className="form-control"
                            value={productCategory}
                            onChange={(e) => setProductCategory(e.target.value)}
                        />
                        <p style={{ marginTop: 33 }}>Product Freshness</p>
                        <input
                            type="text"
                            className="form-control"
                            value={productFreshness}
                            onChange={(e) => setProductFreshness(e.target.value)}
                        />
                        <p style={{ marginTop: 33 }}>Product Price</p>
                        <input
                            type="number"
                            className="form-control"
                            value={productPrice}
                            onChange={(e) => setProductPrice(e.target.value)}
                        />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowEditModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
