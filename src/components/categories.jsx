import React, {useState} from 'react';
import {Button, Col, Row} from "react-bootstrap";

import {categories, products} from "../DATA/data";

const Categories = (props) => {

    const [active, setActive] = useState(null);

    const handleCategoryClick = (category) => {

        props.handleCategoryClick(props.activeCategory !== category ? category : null);
        setActive(active !== category ? category : null);
    }

    return (
        <Row className="mt-4">
            <Row>
                <Col>
                    <h4 className="text-center">SHOP BY CATEGORY</h4>
                </Col>
            </Row>
            <Row>
                <Col xs={{span:12, offset:0}} md={{span:8, offset:2}} >
                    <Row>
                        <Col xs={6} md={3}>
                            <Button
                                ref = {ref => props.categoryRef.current[Object.keys(categories)[categories.Electronics]] = ref}
                                type="button"
                                variant="default"
                                className={active === categories.Electronics ? "active" : undefined}
                                onClick={() => handleCategoryClick(categories.Electronics)}
                            >
                                <figure className="mb-2">
                                    <img src="https://raw.githubusercontent.com/fbatuhanr/ShoppingCart-ReactJS/f95180afe5932e3da9aa1cdfe0c2dc64f9384794/src/assets/categories/electronics.jpeg" alt="category"
                                         className="d-block w-100 rounded"
                                    />
                                </figure>
                                <div className="p-1">
                                    <h5 className="mb-1 text-uppercase">Electronics</h5>
                                    <span className="fs-6 fw-light">{products.filter(item=>item.productCategory === categories.Electronics).length} products</span>
                                </div>
                            </Button>
                        </Col>
                        <Col xs={6} md={3}>
                            <Button
                                ref = {ref => props.categoryRef.current[Object.keys(categories)[categories.Fashion]] = ref}
                                type="button"
                                variant="default"
                                className={active === categories.Fashion ? "active" : undefined}
                                onClick={() => handleCategoryClick(categories.Fashion)}
                            >
                                <figure className="mb-2">
                                    <img src="https://raw.githubusercontent.com/fbatuhanr/ShoppingCart-ReactJS/f95180afe5932e3da9aa1cdfe0c2dc64f9384794/src/assets/categories/fashion.jpeg" alt="category"
                                         className="d-block w-100 rounded"
                                    />
                                </figure>
                                <div className="p-1">
                                    <h5 className="mb-1 text-uppercase">Fashion</h5>
                                    <span className="fs-6 fw-light">{products.filter(item=>item.productCategory === categories.Fashion).length} products</span>
                                </div>
                            </Button>
                        </Col>
                        <Col xs={6} md={3}>
                            <Button
                                ref = {ref => props.categoryRef.current[Object.keys(categories)[categories.Bags]] = ref}
                                type="button"
                                variant="default"
                                className={active === categories.Bags ? "active" : undefined}
                                onClick={() => handleCategoryClick(categories.Bags)}
                            >
                                <figure className="mb-2">
                                    <img src="https://raw.githubusercontent.com/fbatuhanr/ShoppingCart-ReactJS/f95180afe5932e3da9aa1cdfe0c2dc64f9384794/src/assets/categories/bags.jpeg" alt="category"
                                         className="d-block w-100 rounded"
                                    />
                                </figure>
                                <div className="p-1">
                                    <h5 className="mb-1 text-uppercase">Bags</h5>
                                    <span className="fs-6 fw-light">{products.filter(item=>item.productCategory === categories.Bags).length} products</span>
                                </div>
                            </Button>
                        </Col>
                        <Col xs={6} md={3}>
                            <Button
                                ref = {ref => props.categoryRef.current[Object.keys(categories)[categories.Sunglasses]] = ref}
                                type="button"
                                variant="default"
                                className={active === categories.Sunglasses ? "active" : undefined}
                                onClick={() => handleCategoryClick(categories.Sunglasses)}
                            >
                                <figure className="mb-2">
                                    <img src="https://raw.githubusercontent.com/fbatuhanr/ShoppingCart-ReactJS/f95180afe5932e3da9aa1cdfe0c2dc64f9384794/src/assets/categories/sunglasses.jpeg" alt="category"
                                         className="d-block w-100 rounded"
                                    />
                                </figure>
                                <div className="p-1">
                                    <h5 className="mb-1 text-uppercase">Sunglasses</h5>
                                    <span className="fs-6 fw-light">{products.filter(item=>item.productCategory === categories.Sunglasses).length} products</span>
                                </div>
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Row>
    );
};

export default Categories;