import product1 from "../assets/products/macbook.png"

const categories = {
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
        productImage: product1,
        productName: "Camonity",
        productDescription: "abc",
        productPrice: 1299,
        productCategory: categories.Electronics
    }
]