import React from 'react';
import {Button, Col, Navbar, Row} from "react-bootstrap";
import {MdLaptopMac, MdSportsMartialArts} from "react-icons/md";
import {BiHome} from "react-icons/bi";
import {GiHealthPotion} from "react-icons/gi";

const Categories = () => {
    return (
        <div>
            <Row>
                <Col>
                    <h4 className="text-center m-0">SHOP BY CATEGORY</h4>
                </Col>
            </Row>
            <Row>
                <Navbar className="gy-4">
                    <Col xs={3}>
                        <a href="demo3-shop.html">
                            <figure>
                                <img src="" alt="category" />
                            </figure>
                            <div className="category-content">
                                <h3>Sunglasses</h3>
                                <span><mark className="count">8</mark> products</span>
                            </div>
                        </a>
                    </Col>
                    <Col xs={3}>
                        <a href="#" className="p-1 d-flex flex-column text-center text-decoration-none">
                            <Button variant="outline-dark" className="mx-auto p-3 mb-2">
                                <BiHome />
                            </Button>
                            <div className="text-dark">
                                <span>Home</span>
                            </div>
                        </a>
                    </Col>
                    <Col xs={3}>
                        <a href="#" className="p-1 d-flex flex-column text-center text-decoration-none">
                            <Button variant="outline-dark" className="mx-auto p-3 mb-2">
                                <GiHealthPotion />
                            </Button>
                            <div className="text-dark">
                                <span>Beauty</span>
                            </div>
                        </a>
                    </Col>
                    <Col xs={3}>
                        <a href="#" className="p-1 d-flex flex-column text-center text-decoration-none">
                            <Button variant="outline-dark" className="mx-auto p-3 mb-2">
                                <MdSportsMartialArts />
                            </Button>
                            <div className="text-dark">
                                <span>Sports</span>
                            </div>
                        </a>
                    </Col>
                </Navbar>
            </Row>
        </div>
    );
};

export default Categories;