import React, {useContext, useState} from 'react';
import {useParams} from "react-router-dom"

import {products} from "../../DATA/data";
import {ShopContext} from "../../context/shop-context";
import {Button} from "react-bootstrap";

import {BsCartCheck, BsCartDash} from "react-icons/bs";
import {FaMinus, FaPlus} from "react-icons/fa";

const ProductDetail = () => {

    const {productId} = useParams()
    const {id, productImage, productName, productDescription, productPrice } = products.find(item => item.id === Number(productId))

    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);

    const cartItemAmount = cartItems[id];

    const [inputValue, setInputValue] = useState(cartItemAmount);
    const [productSku, setProductSku] = useState(`${productName.slice(0,3).trim().toUpperCase()}-${ Math.floor(Math.random() * (999 - 100 + 1)) + 100 }`);

    const increaseInput = () => {
        setInputValue(inputValue > 98 ? inputValue : Number(inputValue)+1)
    }
    const decreaseInput = () => {
        setInputValue(inputValue > 0 ? Number(inputValue)-1 : inputValue)
    }

    const handleInputChange = event => {
        setInputValue(event.target.value)
    }

    function ParseFloat(str,val) {
        str = str.toString();
        str = str.slice(0, (str.indexOf(".")) + val + 1);
        return Number(str);
    }

    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="card-img-top mb-5 mb-md-0"
                             src={productImage} alt="..."/>
                    </div>
                    <div className="col-md-6">
                        <div className="small mb-1">SKU: {productSku}</div>
                        <h1 className="display-5 fw-bolder">{productName}</h1>
                        <div className="fs-5 mb-5">
                            <span className="text-decoration-line-through">${ParseFloat(productPrice*1.2,2)}</span>
                            &nbsp;
                            <span>${ParseFloat(productPrice,2)}</span>
                        </div>
                        <p className="lead">{productDescription}</p>
                        <div className="d-flex">
                            <Button
                                variant="outline-secondary"
                                className="px-3 me-1"
                                onClick={decreaseInput}
                            >
                                <FaMinus className="align-text-bottom"/>
                            </Button>

                            <div className="form-outline">
                                <input id="qty-input" min="0" max="99" name="quantity" type="number"
                                       value={inputValue}
                                       className="form-control"
                                       onChange={handleInputChange}
                                />
                            </div>

                            <Button
                                variant="outline-secondary"
                                className="px-3 ms-1 me-2"
                                onClick={()=>increaseInput()}
                            >
                                <FaPlus className="align-text-bottom"/>
                            </Button>

                            <Button
                                variant={ cartItemAmount > 0 ? "outline-success" : "outline-dark"}
                                className="flex-shrink-0"
                                type="button"
                                onClick={() => updateCartItemCount(id, inputValue)}
                            >
                                { cartItemAmount > 0 ?
                                    <>
                                        <BsCartCheck className='align-text-top' size='1.1em' />
                                        &nbsp; <span>Update cart</span>
                                    </>
                                     :
                                    <>
                                        <BsCartDash className='align-text-top' size='1.1em' />
                                        &nbsp; Add to cart
                                    </>
                                    }
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;