import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import '../styles/slider.scss';

function Slider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://raw.githubusercontent.com/fbatuhanr/ShoppingCart-ReactJS/b0b96d5e001ebf2ca0a53946648e062dc0982caf/src/assets/slider/slider-1.jpg"
                    alt="Slider 1"
                />
                <Carousel.Caption>
                    <h3 className="carousel-title text-uppercase fs-1">Get up to 30% off <br/> On Swimsuits</h3>
                    <p className="carousel-description fs-5">Starting at <b>$59.99</b></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://raw.githubusercontent.com/fbatuhanr/ShoppingCart-ReactJS/10e094eac2b97e450f313d7d4f96a41bef9f9b4c/src/assets/slider/slider-2.jpg"
                    alt="Slider 2"
                />
                <Carousel.Caption>
                    <h3 className="carousel-title text-uppercase fs-1">Get up to 10% off <br/> On Watches</h3>
                    <p className="carousel-description fs-5">Starting at <b>$249.99</b></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://raw.githubusercontent.com/fbatuhanr/ShoppingCart-ReactJS/b0b96d5e001ebf2ca0a53946648e062dc0982caf/src/assets/slider/slider-3.jpg"
                    alt="Slider 3"
                />
                <Carousel.Caption>
                    <h3 className="carousel-title text-uppercase fs-1">Get up to 50% off <br/> On Fashion</h3>
                    <p className="carousel-description fs-5">Starting at <b>$99.99</b></p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;