import React from 'react';

import {Card} from "react-bootstrap";

import {BsBookmarkHeart} from "react-icons/bs";

const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
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
                <a href="#!" className="btn btn-light border px-2 float-end">
                    <BsBookmarkHeart />
                </a>
                <Card.Title>
                    {productName}
                </Card.Title>
                <Card.Text className="mb-0">
                    {productName}
                </Card.Text>
                <p className="text-muted">
                    Model: X-200
                </p>
            </Card.Body>
        </Card>
    );
};

export default Product;