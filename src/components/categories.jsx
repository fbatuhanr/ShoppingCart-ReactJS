import React from 'react';
import {Button, Col, Navbar, Row} from "react-bootstrap";
import {MdLaptopMac, MdSportsMartialArts} from "react-icons/md";
import {BiHome} from "react-icons/bi";
import {GiHealthPotion} from "react-icons/gi";

const Categories = () => {
    return (
        <Navbar className="row gy-4">
            <Row>
                <Col xs={3}>
                    <a href="#" className="p-1 d-flex flex-column text-center text-decoration-none">
                        <Button variant="outline-dark" className="mx-auto p-3 mb-2">
                            <MdLaptopMac />
                        </Button>
                        <div className="text-dark">
                            <span>Computers</span>
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
            </Row>
        </Navbar>
    );
};

export default Categories;