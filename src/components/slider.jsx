import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

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
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://raw.githubusercontent.com/fbatuhanr/ShoppingCart-ReactJS/b0b96d5e001ebf2ca0a53946648e062dc0982caf/src/assets/slider/slider-2.jpg"
                    alt="Slider 2"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://raw.githubusercontent.com/fbatuhanr/ShoppingCart-ReactJS/b0b96d5e001ebf2ca0a53946648e062dc0982caf/src/assets/slider/slider-3.jpg"
                    alt="Slider 3"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;