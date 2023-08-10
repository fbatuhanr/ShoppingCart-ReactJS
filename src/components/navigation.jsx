import React, {useContext} from 'react';

import {Link} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {BsCartCheck, BsCartDash, BsShop} from "react-icons/bs";
import {ShopContext} from "../context/shop-context";


const Navigation = () => {

    const { getCartItemCount } = useContext(ShopContext);
    const cartItemCount = getCartItemCount();

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
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
                        {/*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.2">*/}
                        {/*        Another action*/}
                        {/*    </NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Divider />*/}
                        {/*    <NavDropdown.Item href="#action/3.4">*/}
                        {/*        Separated link*/}
                        {/*    </NavDropdown.Item>*/}
                        {/*</NavDropdown>*/}
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