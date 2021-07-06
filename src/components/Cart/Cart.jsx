import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart
    const subTotal = cart.reduce((total, prd) => total + (prd.price * prd.quantity), 0)
    const shipping = subTotal > 15 ? 4.99 : 0
    const tax = Number(subTotal / 10).toFixed(2)
    let grandTotal = (subTotal + shipping + Number(tax)).toFixed(2)
    return (
        <div>
            <h4 className="text-danger">Order Summery</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Shipping: {shipping}</p>
            <p>Vat + Tax: {tax}</p>
            <p>Sub Total: {subTotal}</p>
            <p>Total: {grandTotal}</p>
            <Link to="/review">
                <button className="main-button">Review Order</button>
            </Link>
        </div>
    );
};

export default Cart;