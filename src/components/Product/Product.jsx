import React from 'react';
import './Product.css'

const Product = (props) => {
    const product = props.product
    return (
        <div className="product">
            <div>
                <img src={product.img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{product.name}</h4>
                <br/>
                <p><small>by: {product.seller}</small></p>
                <br/>
                <p><small>${product.price}</small></p>
                <br/>
                <p><small>Only {product.stock} left in stock - Order soon</small></p>
            </div>
        </div>
    );
};

export default Product;