import React from 'react';

import {Container, Row, Col, Card} from "react-bootstrap";
import {BsBookmarkHeart, BsBookmarkHeartFill} from "react-icons/bs";

import Product from "./product";
import {data} from "../data";

const Products = () => {
    return (
        <section>
            <Container className="my-5">
                <header className="mb-4">
                    <h3>New products</h3>
                </header>

                <Row>
                    <Col xs={3}>
                        <Product data={data[0]}/>
                    </Col>
                    <Col xs={3}>
                        <Product data={data[1]}/>
                    </Col>
                    <Col xs={3}>
                        <Product data={data[2]}/>
                    </Col>
                    <Col xs={3}>
                        <Product data={data[3]}/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Products;