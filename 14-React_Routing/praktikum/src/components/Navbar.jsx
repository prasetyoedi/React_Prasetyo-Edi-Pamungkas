import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Simple Header</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul class="navbar-nav gap-5">
                            <li class="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/createproduct">Product</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/">Pricing</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/">FAQs</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
