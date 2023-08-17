import React, {useState} from 'react';

import {Container, Row, Col, Navbar, Button} from "react-bootstrap";
import Categories from "../../components/categories";
import Products from "../../components/products";
import Slider from "../../components/slider";
import FeatureBoxes from "../../components/featureboxes";

const Shop = (props) => {

    const [activeCategory, setActiveCategory] = useState(null);

    const handleCategoryClick = (category) => {

        props.handleCategoryClick(category);
        setActiveCategory(category);
    }

    return (
        <>
        <Slider />
        <Container className="pt-3">
            <Categories categoryRef={props.categoryRef} activeCategory={activeCategory} handleCategoryClick={handleCategoryClick}/>
            <hr className="my-5"/>
            <Products selectedCategory={activeCategory} />
            <hr className="my-5"/>
            <FeatureBoxes/>
        </Container>
        </>
    );
};

export default Shop;