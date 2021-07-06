import React, {useEffect, useState} from 'react';
import fakeData from '../../fakeData'
import Product from '../Product/Product'
import Cart from '../Cart/Cart'
import './Shop.css'
import {addToDatabaseCart, getDatabaseCart} from '../../utilities/databaseManager';
import {fetchCart} from '../../utilities/fetchCart'

const Shop = () => {
    const first10 = fakeData.slice(0,10)
    const [products, setProducts] = useState(first10)
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetchCart(setCart)
    }, [])

    const handleAddProduct = (product) => {
        const toBeAddedkey = product.key
        const sameProduct = cart.find(pd => pd.key === product.key)
        let newCart;
        let count = 1;
        if(sameProduct){
            count = sameProduct.quantity + 1
            sameProduct.quantity = count
            const others = cart.filter(pd => pd.key !== toBeAddedkey)
            newCart = [...others, sameProduct]
        }else{
            product.quantity = 1
            newCart = [...cart, product]
        }
        setCart(newCart)
        addToDatabaseCart(product.key, count)
    }

    return (
        <div className="twin-container">
            <div className="product-container">
                {products.map(product => <Product handleAddProduct={handleAddProduct} product={product}></Product>)}
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;