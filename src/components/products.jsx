import React from 'react';

import {Container, Row, Col, Card} from "react-bootstrap";
import {BsBookmarkHeart, BsBookmarkHeartFill} from "react-icons/bs";

import Product from "./product";
import {products} from "../DATA/products";

const Products = () => {
    return (
        <section>
            <Container className="my-5">
                <header className="mb-4">
                    <h3>New products</h3>
                </header>

                <Row>
                    <Col xs={3}>
                        <Product data={products[0]}/>
                    </Col>
                    <Col xs={3}>
                        <Product data={products[1]}/>
                    </Col>
                    <Col xs={3}>
                        <Product data={products[2]}/>
                    </Col>
                    <Col xs={3}>
                        <Product data={products[3]}/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Products;