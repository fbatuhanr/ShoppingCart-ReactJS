import React, {useContext} from 'react';

import {Col} from "react-bootstrap";

import {products} from '../../DATA/data';
import CartItem from "./cart-item";
import {ShopContext} from "../../context/shop-context";

const Cart = () => {

    const { cartItems, getCartItemCount, getTotalCartAmount } = useContext(ShopContext);

    const cartItemCount = getCartItemCount();
    const cartTotal = getTotalCartAmount();

    const shippingFee = 9.9;


    const currentDate = new Date();
    const deliveryDate = (date, dayOffset) => {
        date.setDate(date.getDate() + dayOffset);
        return date.toLocaleDateString('en-us', { weekday:"long", month:"long", day:"numeric"});
    }

    function ParseFloat(str,val) {
        str = str.toString();
        str = str.slice(0, (str.indexOf(".")) + val + 1);
        return Number(str);
    }

    let totalAmount = cartTotal > 99 ? cartTotal : cartTotal + 9.9

    return (
        <section className="h-100 gradient-custom">
            <div className="container py-5">
                <div className="row d-flex justify-content-center my-4">
                    {
                        cartItemCount > 0 ?
                            <>
                            <div className="col-md-8">
                                <div className="card mb-4">
                                    <div className="card-header py-3">
                                        <h5 className="mb-0">Cart {cartItemCount > 0 && `- ${cartItemCount} items`}</h5>
                                    </div>
                                    <div className="card-body">
                                        {
                                            cartItemCount > 0 ?
                                                products.map((product, i) => {
                                                    if(cartItems[product.id] !== 0) {
                                                        return  <>
                                                            <CartItem data={product} />
                                                            {products.length !== i+1 && <hr className="my-4"/>}
                                                        </>
                                                    }
                                                }) :
                                                <p>
                                                    There are <span className="text-danger">no products</span> in your shopping cart.
                                                    You can <span className="text-success">add products</span> to the cart from the store section.
                                                </p>
                                        }
                                    </div>
                                </div>
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <p><strong>Expected shipping delivery</strong></p>
                                        <p className="mb-0">{deliveryDate(currentDate, 2)} - {deliveryDate(currentDate, 10)}</p>
                                    </div>
                                </div>
                                <div className="card mb-4 mb-lg-0">
                                    <div className="card-body">
                                        <p><strong>We accept</strong></p>
                                        <img className="me-2" width="45px"
                                             src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                                             alt="Visa"/>
                                        <img className="me-2" width="45px"
                                             src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                                             alt="American Express"/>
                                        <img className="me-2" width="45px"
                                             src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                                             alt="Mastercard"/>
                                        <img className="me-2" width="45px"
                                             src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp"
                                             alt="PayPal acceptance mark"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4">
                                    <div className="card-header py-3">
                                        <h5 className="mb-0">Summary</h5>
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                                Products
                                                <span>${ParseFloat(cartTotal,2)}</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                                <span>Shipping <i>(Free over $99)</i></span>
                                                {cartTotal > 99 ? <span className="text-success">FREE</span> : <span className="text-warning">${shippingFee.toFixed(2)}</span>}
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                                <div>
                                                    <strong>Total amount</strong>
                                                    <strong>
                                                        <p className="mb-0">(including VAT)</p>
                                                    </strong>
                                                </div>
                                                <span><strong>${ParseFloat(totalAmount,2)}</strong></span>
                                            </li>
                                        </ul>

                                        <button type="button" className="btn btn-primary btn-lg btn-block">
                                            Go to checkout
                                        </button>
                                    </div>
                                </div>
                            </div>
                            </>
                        :
                            <Col md={12}>
                                <div className="card mb-4">
                                    <div className="card-header py-3">
                                        <h5 className="mb-0">Empty Cart</h5>
                                    </div>
                                    <div className="card-body">
                                        <p>
                                            There are <span className="text-danger">no products</span> in your shopping cart.
                                            You can <span className="text-success">add products</span> to the cart from the store section.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                    }

                </div>
            </div>
        </section>
    );
};

export default Cart;