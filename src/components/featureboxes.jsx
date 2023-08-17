import React from 'react';

import {Row, Col } from "react-bootstrap";

import { RiCustomerService2Fill, RiBankCard2Fill } from 'react-icons/ri';
import { FaShippingFast } from 'react-icons/fa';
import { TbTruckReturn } from 'react-icons/tb';


const FeatureBoxes = () => {
    return (
        <Row className="feature-boxes-container pt-2">

            <Col xs={6} lg={3}>
                <div className="feature-box feature-box-simple text-center">
                    <RiCustomerService2Fill size='3em' className='mb-2' />

                    <div className="feature-box-content p-0">
                        <h3 className="text-uppercase">Customer Support</h3>
                        <h5>Need Assistence?</h5>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapibus lacus. Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </Col>


            <Col xs={6} lg={3}>
                <div className="feature-box feature-box-simple text-center">
                    <RiBankCard2Fill size='3em' className='mb-2' />

                    <div className="feature-box-content p-0">
                        <h3 className="text-uppercase">Secured Payment</h3>
                        <h5>Safe &amp; Fast</h5>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapibus lacus. Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </Col>


            <Col xs={6} lg={3}>
                <div className="feature-box feature-box-simple text-center">
                    <TbTruckReturn size='3em' className='mb-2' />

                    <div className="feature-box-content p-0">
                        <h3 className="text-uppercase">Free Returns</h3>
                        <h5>Easy &amp; Free</h5>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapibus lacus. Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </Col>


            <Col xs={6} lg={3}>
                <div className="feature-box feature-box-simple text-center">
                    <FaShippingFast size='3em' className='mb-2' />

                    <div className="feature-box-content p-0">
                        <h3 className="text-uppercase">Free Shipping</h3>
                        <h5>Orders Over $99</h5>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapibus lacus. Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </Col>

        </Row>
    );
};

export default FeatureBoxes;