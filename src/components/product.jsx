import React, {useContext} from 'react';

import {ShopContext} from "../context/shop-context";

import {Row, Col, Card, Button} from "react-bootstrap";

import {BsBookmarkHeart} from "react-icons/bs";
import {BsCartCheck, BsCartDash} from "react-icons/bs";

const Product = (props) => {

    const {id, productImage, productName, productDescription, ProductPrice, } = props.data;

    const {cartItems, addToCart} = useContext(ShopContext);

    const cartItemAmount = cartItems[id];

    return (
        <Card className="my-2 shadow-0 border-0">
            <a href="#" className="">
                <div className="mask" style={{height: "50px"}}>
                    <div className="d-flex justify-content-start align-items-start h-100 m-2">
                        <h6><span className="badge bg-danger pt-1">New</span></h6>
                    </div>
                </div>
                <img src={productImage} className="card-img-top rounded-2" style={{aspectRatio:"1/1"}} />
            </a>
            <Card.Body className="p-0">
                <Row className="justify-content-between pt-4 pb-3">
                    <Col xs={"auto"}>
                        <h4 className="m-0 pt-1">
                            {`$${ProductPrice}`}
                        </h4>
                    </Col>
                    <Col xs={"auto"}>
                        {/*<Button className="btn btn-light border px-2 py-1 ms-1 float-end">*/}
                        {/*    <BsBookmarkHeart />*/}
                        {/*    <span className="align-middle"></span>*/}
                        {/*</Button>*/}
                        <Button onClick={() => addToCart(id)} className="btn btn-light border px-2 py-1">
                            <BsCartCheck />
                            <span className="align-middle ps-1">Add to Cart</span>
                            { cartItemAmount > 0 && <span className="align-middle"> ({cartItemAmount})</span>}
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card.Title>
                            {productName}
                        </Card.Title>
                        <Card.Text className="mb-0 text-muted">
                            {productDescription}
                        </Card.Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default Product;