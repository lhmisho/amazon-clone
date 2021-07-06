import {getDatabaseCart} from "./databaseManager";
import fakeData from "../fakeData";

const fetchCart = (setCart) => {
    const savedCart = getDatabaseCart()
    const productKeys = Object.keys(savedCart)

    const cartProducts = productKeys.map(key => {
        const product = fakeData.find(product => product.key === key);
        product.quantity = savedCart[key];
        return product
    })
    setCart(cartProducts)
    console.log(cartProducts)
}
export {fetchCart}