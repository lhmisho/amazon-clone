import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Product from '../Product/Product'
import Cart from '../Cart/Cart'
import './Shop.css'
import { addToDatabaseCart } from '../../utilities/databaseManager';


const Shop = () => {
    const first10 = fakeData.slice(0,10)
    const [products, setProducts] = useState(first10)
    const [cart, setCart] = useState([])

    const handleAddProduct = (product) => {
        console.log("Product added", product.name)
        const newCart = [...cart, product]
        setCart(newCart)
        const sameProduct = newCart.filter(pd => pd.key === product.key)
        addToDatabaseCart(product.key, sameProduct.length)
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {first10.map(product => <Product handleAddProduct={handleAddProduct} product={product}></Product>)}
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;