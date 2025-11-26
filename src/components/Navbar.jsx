import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <div className="navbar-logo">
                    <img src={logo} alt="Diksha Ai Labs" />
                    <span>Diksha Ai Labs</span>
                </div>
                <div className="navbar-links">
                    <a href="#services">Services</a>
                    <a href="#why-ai">Why AI?</a>
                    <a href="#contact" className="btn btn-primary">Get Started</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
