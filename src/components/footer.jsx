import React from 'react';

const Footer = () => {
    return (
        <footer className="flex-shrink-0 py-4 bg-dark text-white-50 mt-5">
            <div className="container text-center">
                <small>Copyright &copy; Shopping Cart {new Date().getFullYear()}</small>
            </div>
        </footer>
    );
};

export default Footer;