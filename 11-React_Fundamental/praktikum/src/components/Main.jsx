import React from 'react'
import ProductForm from './ProductForm'

export default function Main() {
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
                        <div className="title">Create Product</div>
                        <p className="text-center">
                            Below is an example form built entirely with Bootstrap’s form controls.
                            Each required form group has a validation state that can be triggered by
                            attempting to submit the form without completing it.
                        </p>
                        <div className="detailProduct">
                            <ProductForm />
                        </div>
                    </div>
                    <div className="col-md-2" />
                </div>
            </div>
        </>
    )
}
