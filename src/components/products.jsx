import React from 'react';

import {Container, Row, Col, Card} from "react-bootstrap";
import {BsBookmarkHeart, BsBookmarkHeartFill} from "react-icons/bs";

import Product from "./product";
import {products, categories} from "../DATA/data";

const Products = (props) => {
    return (
        <Row>
                <header className="mb-4">
                    <h3>New products {props.selectedCategory !== null && <span>in {Object.keys(categories)[props.selectedCategory]}</span>}</h3>
                </header>

                <Row>
                    {
                        props.selectedCategory !== null
                            ? products
                                .filter(product => product.productCategory === props.selectedCategory)
                                .map((product, i) =>
                                <Col key={i} xs={3}>
                                    <Product data={product}/>
                                </Col>)
                            : products
                                .map((product, i) =>
                                    <Col key={i} xs={3}>
                                        <Product data={product}/>
                                    </Col>)
                    }
                </Row>
        </Row>
    );
};

export default Products;