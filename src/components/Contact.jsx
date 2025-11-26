import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact">
            <div className="container text-center">
                <div className="contact-wrapper">
                    <h2>Ready to Transform?</h2>
                    <p>Connect with Diksha Ai Labs today. Let's discuss how we can build your future.</p>

                    <div className="contact-actions">
                        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            <span className="material-icons" style={{ verticalAlign: 'middle', marginRight: '8px' }}>chat</span>
                            WhatsApp Us
                        </a>
                        <a href="mailto:contact@dikshaailabs.com" className="btn btn-secondary">
                            <span className="material-icons" style={{ verticalAlign: 'middle', marginRight: '8px' }}>email</span>
                            Email Us
                        </a>
                    </div>
                </div>

                <footer className="footer">
                    <p>&copy; {new Date().getFullYear()} Diksha Ai Labs. All rights reserved.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
