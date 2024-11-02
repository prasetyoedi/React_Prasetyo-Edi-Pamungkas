import React from 'react'

export default function Footer() {
    return (
        <>
            <footer id="footer" className='mt-5'>
                <div className="footer-container">
                    <div className="footer-column">
                        <h3>ARSHA</h3>
                        <p>
                            A108 Adam Street
                            <br />
                            New York, NY 535022
                            <br />
                            United States
                        </p>
                        <p>
                            <strong>Phone:</strong> +1 5589 55488 55
                        </p>
                        <p>
                            <strong>Email:</strong> info@example.com
                        </p>
                    </div>
                    <div className="footer-column">
                        <h4>Useful Links</h4>
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About us</a>
                            </li>
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">Terms of service</a>
                            </li>
                            <li>
                                <a href="#">Privacy policy</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Our Services</h4>
                        <ul>
                            <li>
                                <a href="#">Web Design</a>
                            </li>
                            <li>
                                <a href="#">Web Development</a>
                            </li>
                            <li>
                                <a href="#">Product Management</a>
                            </li>
                            <li>
                                <a href="#">Marketing</a>
                            </li>
                            <li>
                                <a href="#">Graphic Design</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Our Social Networks</h4>
                        <p>
                            Cras fermentum odio eu feugiat lide par naso tierra videa magna derita
                            valies.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-circle" />
                            <a href="#" className="social-circle" />
                            <a href="#" className="social-circle" />
                            <a href="#" className="social-circle" />
                            <a href="#" className="social-circle" />
                        </div>
                    </div>
                </div>
                <div
                    className="footer-bottom"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        padding: "30px 90px"
                    }}
                >
                    <p style={{ margin: 0 }} className='text-light'>© Copyright All Rights Reserved</p>
                    <p className='text-light' style={{ margin: 0 }}>
                        Designed by{" "}
                        <a href="#" style={{ color: "#007bff", textDecoration: "none" }}>
                            BootstrapMade
                        </a>
                    </p>
                </div>
            </footer>
        </>
    )
}
