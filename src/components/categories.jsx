import React from 'react';
import {Button, Col, Navbar, Row} from "react-bootstrap";
import {MdLaptopMac, MdSportsMartialArts} from "react-icons/md";
import {BiHome} from "react-icons/bi";
import {GiHealthPotion} from "react-icons/gi";

const Categories = (props) => {

    const handleClick = (value) => {
        props.onClick(value);
    }

    return (
        <div className="mt-4 mb-4">
            <Row>
                <Col>
                    <h4 className="text-center">SHOP BY CATEGORY</h4>
                </Col>
            </Row>
            <Row>
                <Col xs={{span:12, offset:0}} md={{span:8, offset:2}} >
                    <Row>
                        <Col xs={6} md={3}>
                            <Button onClick={() => handleClick("Electo")} className="btn btn-default text-decoration-none text-center text-dark">
                                <figure className="mb-2">
                                    <img src="https://raw.githubusercontent.com/fbatuhanr/ShoppingCart-ReactJS/f95180afe5932e3da9aa1cdfe0c2dc64f9384794/src/assets/categories/electronics.jpeg" alt="category"
                                         className="d-block w-100 rounded"
                                    />
                                </figure>
                                <div className="p-1">
                                    <h5 className="mb-1 text-uppercase">Electronics</h5>
                                    <span className="fs-6 fw-light">8 products</span>
                                </div>
                            </Button>
                        </Col>
                        <Col xs={6} md={3}>
                            <a href="#" className="text-decoration-none text-center text-dark">
                                <figure className="mb-2">
                                    <img src="https://raw.githubusercontent.com/fbatuhanr/ShoppingCart-ReactJS/f95180afe5932e3da9aa1cdfe0c2dc64f9384794/src/assets/categories/fashion.jpeg" alt="category"
                                         className="d-block w-100 rounded"
                                    />
                                </figure>
                                <div className="p-1">
                                    <h5 className="mb-1 text-uppercase">Fashion</h5>
                                    <span className="fs-6 fw-light">8 products</span>
                                </div>
                            </a>
                        </Col>
                        <Col xs={6} md={3}>
                            <a href="#" className="text-decoration-none text-center text-dark">
                                <figure className="mb-2">
                                    <img src="https://raw.githubusercontent.com/fbatuhanr/ShoppingCart-ReactJS/f95180afe5932e3da9aa1cdfe0c2dc64f9384794/src/assets/categories/bags.jpeg" alt="category"
                                         className="d-block w-100 rounded"
                                    />
                                </figure>
                                <div className="p-1">
                                    <h5 className="mb-1 text-uppercase">Bags</h5>
                                    <span className="fs-6 fw-light">8 products</span>
                                </div>
                            </a>
                        </Col>
                        <Col xs={6} md={3}>
                            <a href="#" className="text-decoration-none text-center text-dark">
                                <figure className="mb-2">
                                    <img src="https://raw.githubusercontent.com/fbatuhanr/ShoppingCart-ReactJS/f95180afe5932e3da9aa1cdfe0c2dc64f9384794/src/assets/categories/sunglasses.jpeg" alt="category"
                                         className="d-block w-100 rounded"
                                    />
                                </figure>
                                <div className="p-1">
                                    <h5 className="mb-1 text-uppercase">Sunglasses</h5>
                                    <span className="fs-6 fw-light">8 products</span>
                                </div>
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Categories;