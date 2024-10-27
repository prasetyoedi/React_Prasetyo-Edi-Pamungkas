import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
    const { productId } = useParams(); // Ambil ID dari parameter URL
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products'));
        if (storedProducts) {
            const foundProduct = storedProducts.find(prod => prod.id === productId);
            setProduct(foundProduct);
        }
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header">
                    <h2>Product Detail</h2>
                </div>
                <div className="card-body">
                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <th scope="row">ID</th>
                                <td>{product.id}</td>
                            </tr>
                            <tr>
                                <th scope="row">Product Name</th>
                                <td>{product.productName}</td>
                            </tr>
                            <tr>
                                <th scope="row">Product Category</th>
                                <td>{product.productCategory}</td>
                            </tr>
                            <tr>
                                <th scope="row">Product Freshness</th>
                                <td>{product.productFreshness}</td>
                            </tr>
                            <tr>
                                <th scope="row">Product Price</th>
                                <td>{product.productPrice}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
