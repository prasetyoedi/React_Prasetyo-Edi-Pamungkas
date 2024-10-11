import React from 'react';

export default function ProductForm() {
    const [productName, setProductName] = React.useState('');
    const [error, setError] = React.useState('');
    const [isProductNameValid, setIsProductNameValid] = React.useState(true);
    const [isProductPriceValid, setIsProductPriceValid] = React.useState(true);

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

        const productPrice = e.target.elements.productPrice.value;
        if (!productPrice || productPrice <= 0) {
            setIsProductPriceValid(false);
            isValid = false;
        } else {
            setIsProductPriceValid(true);
        }

        if (isValid) {
            console.log('Form submitted');
        }
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
                        onClick={handleClick}
                    >
                        Choose ...
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li>
                            <a className="dropdown-item" href="#">
                                Action
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Another action
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                omethinglse
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
                        defaultValue="brandNew"
                        defaultChecked=""
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
                        defaultValue="secondhand"
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
                        id="Refufbished"
                        defaultValue="Refufbished"
                    />
                    <label className="form-check-label" htmlFor="Refufbished">
                        Refufbished
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
        </>
    );
}
