import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Shop from "../pages/shop/shop";
import App from "../App";
import Products from "../components/products";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Shop">
                <Shop/>
            </ComponentPreview>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/Products">
                <Products/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews