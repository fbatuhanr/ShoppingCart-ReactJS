import React from 'react';

import {Container, Row, Col, Navbar, Button} from "react-bootstrap";
import Categories from "../../components/categories";
import Products from "../../components/products";

const Shop = () => {
    return (
            <section>
                <Container id="shop" className="pt-5">
                    <Categories />
                    <Products />
                </Container>
            </section>
    );
};

export default Shop;