import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="bg-dark p-3">
        <nav>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link to="/" className="nav-link text-light">Beranda</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link text-light">Tentang Kami</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link text-light">Kontak</Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;
