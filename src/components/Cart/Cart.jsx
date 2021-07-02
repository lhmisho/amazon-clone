import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    const subTotal = cart.reduce((total, prd) => total + prd.price, 0)
    const shipping = subTotal > 15 ? 4.99 : 0
    const tax = Number(subTotal / 10).toFixed(2)
    let grandTotal = (subTotal + shipping + Number(tax)).toFixed(2)
    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items Orderd: {cart.length}</p>
            <p>Shipping: {shipping}</p>
            <p>Vat + Tax: {tax}</p>
            <p>Sub Total: {subTotal}</p>
            <p>Total: {grandTotal}</p>
        </div>
    );
};

export default Cart;