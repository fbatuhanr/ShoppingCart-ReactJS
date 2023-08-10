import React, {useContext} from 'react';
import {FaMinus, FaPlus} from "react-icons/fa";
import {Row, Col} from "react-bootstrap";
import {ShopContext} from "../../context/shop-context";

const CartItem = (props) => {

    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

    const {id, productImage, productName, productDescription, productPrice } = props.data;

    return (
        <Row>
            <Col md={12} lg={3} className="mb-4 mb-lg-0">

                <div className="bg-image hover-overlay hover-zoom ripple rounded"
                     data-mdb-ripple-color="light">
                    <img
                        src={productImage}
                        className="w-100" alt="Blue Jeans Jacket"/>
                    <a href="#!">
                        <div className="mask"
                             style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
                    </a>
                </div>

            </Col>

            <Col md={7} lg={6} className="mb-4 mb-lg-0 align-self-center">
                <p><strong>{productName}</strong></p>
                <p>{productDescription}</p>
            </Col>

            <Col md={5} lg={3} className="mb-4 mb-lg-0 align-self-center">

                <label className="form-label" htmlFor="qty-input">Quantity</label>

                <div className="d-flex mb-4">

                    <button className="btn btn-primary px-3 me-2"
                            onClick={() => removeFromCart(id)}>
                        <FaMinus />
                    </button>

                    <div className="form-outline">
                        <input id="qty-input" min="0" name="quantity" value={cartItems[id]} type="number" className="form-control"
                            onChange={(e) => updateCartItemCount(id, Number(e.target.value))}/>
                    </div>

                    <button className="btn btn-primary px-3 ms-2"
                            onClick={() => addToCart(id)}>
                        <FaPlus />
                    </button>
                </div>


                <p className="fs-4 text-start text-md-center">
                    <strong>${productPrice}</strong>
                </p>

            </Col>
        </Row>
    );
};

export default CartItem;