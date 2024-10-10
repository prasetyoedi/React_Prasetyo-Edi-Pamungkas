import React from 'react'

export default function ProductForm() {
    return (
        <>
            <form action="">
                <div className="title">Detail Product</div>
                <p>Product Name</p>
                <input type="text" className="form-control" required="" />
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
                                Something else here
                            </a>
                        </li>
                    </ul>
                </div>
                <p style={{ marginTop: 33 }}>Image of Product</p>
                <input type="file" className="form-control" required="" />
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
                <p style={{ marginTop: 33 }}>Product Pice</p>
                <input
                    type="number"
                    className="form-control"
                    placeholder="$1"
                    required=""
                />
                <div
                    className="d-flex justify-content-center"
                    style={{ marginTop: 138, paddingBottom: 100 }}
                >
                    <button className="btn btn-primary" style={{ width: 557 }}>
                        Submit
                    </button>
                </div>
            </form>
        </>
    )
}
