// ListProduct.jsx
import React from 'react';

export default function ListProduct({ products, onDelete }) {
    return (
        <div className="table-responsive mt-4">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Freshness</th>
                        <th>Price</th>
                        <th>Image</th>
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
                                {product.productImage && (
                                    <img src={product.productImage} alt="Product" style={{ width: '50px', height: '50px' }} />
                                )}
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => onDelete(product.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
