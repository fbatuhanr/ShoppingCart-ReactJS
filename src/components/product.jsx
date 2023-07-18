import React from 'react';

import {Card} from "react-bootstrap";

import {BsBookmarkHeart} from "react-icons/bs";
import {BsCartCheck, BsCartDash} from "react-icons/bs";

const Product = (props) => {
    const {id, productImage, productName, productDescription, ProductPrice, } = props.data;
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
            <Card.Body className="p-0 pt-3">
                <a href="#!" className="btn btn-light border px-2 py-1 ms-1 float-end">
                    <BsBookmarkHeart />
                    <span className="align-middle"></span>
                </a>
                <a href="#!" className="btn btn-light border px-2 py-1 float-end">
                    <BsCartCheck />
                    <span className="align-middle ps-1">Add to Cart</span>
                </a>
                <Card.Title>
                    {`$${ProductPrice}`}
                </Card.Title>
                <Card.Text className="mb-0">
                    {productName}
                </Card.Text>
                <p className="text-muted">
                    {productDescription}
                </p>
            </Card.Body>
        </Card>
    );
};

export default Product;