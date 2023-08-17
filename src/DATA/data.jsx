import product1 from '../assets/products/macbook.png'
import product2 from '../assets/products/camonity.jpg'

import product3 from '../assets/products/man-fashion.jpg'
import product4 from '../assets/products/woman-fashion.jpg'

import product5 from '../assets/products/man-bag.jpg'
import product6 from '../assets/products/woman-bag.jpg'

import product7 from '../assets/products/man-glasses.jpg'
import product8 from '../assets/products/woman-glasses.jpg'

export const categories = {
    Electronics: 0,
    Fashion: 1,
    Bags: 2,
    Sunglasses: 3
}
export const products = [
    {
        id: 1,
        productImage: product1,
        productName: "Macbook Pro",
        productDescription: "M2 chip & 13-inch",
        productPrice: 1299,
        productCategory: categories.Electronics
    },
    {
        id: 2,
        productImage: product2,
        productName: "Camonity 5M",
        productDescription: "LCD 2\" Digital Binocular with Camera",
        productPrice: 106.99,
        productCategory: categories.Electronics
    },
    {
        id: 3,
        productImage: product3,
        productName: "BN NEVS Mens Watches",
        productDescription: "Minimalist Fashion Wrist Watch for Men",
        productPrice: 149.99,
        productCategory: categories.Fashion
    },
    {
        id: 4,
        productImage: product4,
        productName: "Women's Ankle Booties",
        productDescription: "GLBALWN Fashion Combat Boots",
        productPrice: 89.99,
        productCategory: categories.Fashion
    },
    {
        id: 5,
        productImage: product5,
        productName: "SDYABLO Crossbody Backpack",
        productDescription: "Small Black Sling Crossbody Backpack Shoulder Bag for Men Women Vintage PU Leather Sling Backpack Cycling",
        productPrice: 44.99,
        productCategory: categories.Bags
    },
    {
        id: 6,
        productImage: product6,
        productName: "COH Women's Crossbody Bag",
        productDescription: "Mini Rowan File Shoulder Crossbody Bag",
        productPrice: 79.99,
        productCategory: categories.Bags
    },
    {
        id: 7,
        productImage: product7,
        productName: "KLIYDI Polarized Sunglasses",
        productDescription: "Polarized Sunglasses for Men and Women Semi-Rimless Frame Driving Sun glasses UV Blocking",
        productPrice: 19.99,
        productCategory: categories.Sunglasses
    },
    {
        id: 8,
        productImage: product8,
        productName: "SJS Sunglasses for Women & Men",
        productDescription: "Sunglasses for Women & Men, Retro, Polycarbonate Lens, Trendy Aviator",
        productPrice: 14.99,
        productCategory: categories.Sunglasses
    }
]