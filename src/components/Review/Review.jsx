import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        const savedCart = getDatabaseCart()
        const productKeys = Object.keys(savedCart)

        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(product => product.key === key);
            product.quantity = savedCart[key];
            return product
        })
        setCart(cartProducts)

        console.log(cartProducts)
    }, [])

    return (
        <div>
            <h4>Total cart item: {cart.length}</h4>
            {
                cart.map((product, idx) => <ReviewItem key={idx} product={product} />)
            }
        </div>
    );
};

export default Review;