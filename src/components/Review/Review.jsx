import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from "../Cart/Cart";
import {fetchCart} from "../../utilities/fetchCart";

const Review = () => {
    const [cart, setCart] = useState([])

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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Review;