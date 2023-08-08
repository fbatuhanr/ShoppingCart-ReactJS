import React from 'react';

import {Container, Row, Col, Navbar, Button} from "react-bootstrap";
import Categories from "../../components/categories";
import Products from "../../components/products";
import Slider from "../../components/slider";

const Shop = () => {
    return (
        <>
        <Slider />
        <Container className="pt-3">
            <Categories />
            <Products />
        </Container>
        </>
    );
};

export default Shop;