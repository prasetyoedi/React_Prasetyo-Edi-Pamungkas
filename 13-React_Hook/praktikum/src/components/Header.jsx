import React from 'react'

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Simple Header
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarNav"
                    >
                        <ul className="navbar-nav gap-5">
                            <li className="nav-item">
                                <div
                                    className="btn btn-primary"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Coba fitur Tooltip"
                                >
                                    Home
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Features
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Pricing
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    FAQs
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
