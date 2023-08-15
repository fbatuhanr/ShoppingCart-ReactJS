import React, {useState} from 'react';

import {Container, Row, Col, Navbar, Button} from "react-bootstrap";
import Categories from "../../components/categories";
import Products from "../../components/products";
import Slider from "../../components/slider";

const Shop = () => {

    const [activeCategory, setActiveCategory] = useState(null);

    const handleClick = (newValue) => {
        setActiveCategory(newValue)

        alert(newValue)
    }

    return (
        <>
        <Slider />
        <Container className="pt-3">
            <Categories activeCategory={activeCategory} onClick={handleClick}/>
            <Products />
        </Container>
        </>
    );
};

export default Shop;