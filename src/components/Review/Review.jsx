import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import {getDatabaseCart, processOrder, removeFromDatabaseCart} from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from "../Cart/Cart";
import {fetchCart} from "../../utilities/fetchCart";
import {Link} from "react-router-dom";

const Review = () => {
    const [cart, setCart] = useState([])
    const placeOrderHandler = () => {
        setCart([])
        processOrder()
    }
    const removeProduct = (productKey) => {
        const newCart = cart.filter(prod => prod.key !== productKey)
        setCart(newCart)
        removeFromDatabaseCart(productKey)
    }

    useEffect(() => {
        fetchCart(setCart)
    }, [])

    return (
        <div className="twin-container">
            <div className="product-container">
                <h4>Total cart item: {cart.length}</h4>
                {
                    cart.map((product, idx) => <ReviewItem
                        key={idx}
                        product={product}
                        removeProduct={removeProduct}
                    />)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={placeOrderHandler} className="main-button">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;