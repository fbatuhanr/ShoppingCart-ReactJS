import React, {useContext, useRef} from 'react';

import {Link} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {BsCartCheck, BsCartDash, BsShop} from "react-icons/bs";
import {ShopContext} from "../context/shop-context";

import {categories} from "../DATA/data";


const Navigation = (props) => {

    const { getCartItemCount } = useContext(ShopContext);
    const cartItemCount = getCartItemCount();

    const handleCategoryClick = (category) => {
        props.handleCategoryClick(category);
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <BsShop className="align-middle"/>
                    <span className="ms-1 align-middle">Shopping Cart</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {
                            Object.keys(categories).map(category =>
                                <Nav.Link
                                    as={Link} to='#'
                                    onClick={() => handleCategoryClick(category)}>
                                    {category}
                                </Nav.Link>)
                        }
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse>
                    <Nav className="ms-auto me-0">
                        <Nav.Link as={Link} to="/cart">
                            {
                                cartItemCount > 0
                                ? <BsCartCheck className="align-middle" />
                                    : <BsCartDash className="align-middle" />
                            }
                            <span className="ms-1 align-middle">Cart {cartItemCount > 0 && ` (${cartItemCount})`}</span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;