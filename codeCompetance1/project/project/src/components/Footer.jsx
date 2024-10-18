import React from 'react'

export default function Footer() {
    return (
        <>
            <div className="bg-dark text-light py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h3 className="h5 mb-4">
                                Join 99,999+ people who get our web marketing tips twice a month
                            </h3>
                            <div className="input-group mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email Address"
                                    aria-label="Email Address"
                                />
                                <button className="btn btn-danger" type="button">
                                    Sign me up
                                </button>
                            </div>
                            <p className="text-muted small">
                                By signing up you agree to our{" "}
                                <a href="#" className="text-danger">
                                    Privacy Policy
                                </a>
                                .
                            </p>
                            <div className="d-flex mt-3 gap-3">
                                <a href="https://www.instagram.com/prasetyoedi451">
                                    <img
                                        src="/instagram.svg"
                                        alt="Logo Instagram"
                                        className="icon"
                                    />
                                </a>
                                <a href="https://wa.me/6283134339542">
                                    <img
                                        src="/whatsapp.svg"
                                        alt="Logo Whatsapp"
                                        className="icon"
                                    />
                                </a>
                                <a href="https://www.linkedin.com/in/prasetyo-edi-pamungkas-4426611b0/">
                                    <img
                                        src="/linkedin.svg"
                                        alt="Logo Linkedin"
                                        className="icon"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h3 className="h5 mb-4">Prasetyo Edi's Group</h3>
                            <p className="mb-4">
                                We strive to educate and collaborate with like-minded businesses to
                                make a difference environmentally and socially. Together we can make
                                an impact.
                            </p>
                            <p href="#" className="text-danger">
                                Learn About Our Edi's Values
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h3 className="h5 mb-4">My Address</h3>
                            <p>
                                Jae Soemantoro Street
                                <br />
                                Suite 316
                                <br />
                                Godean, Sleman, 60613
                            </p>
                            <h3 className="mt-3 h5">My Phone Number</h3>
                            <p className="text-danger fw-bold">0831 3433 9542</p>
                        </div>
                    </div>
                </div>
                <div className="container text-center mt-5">
                    <hr className="border-gray" />
                    <div className="small text-muted">
                        <a href="#" className="text-muted">
                            Privacy Policy
                        </a>{" "}
                        |
                        <a href="#" className="text-muted">
                            Sitemap
                        </a>{" "}
                        |
                        <a href="#" className="text-muted">
                            Support
                        </a>
                        <p className="mt-2">© 2024 Marvel Studios</p>
                    </div>
                </div>
            </div>
        </>
    )
}
