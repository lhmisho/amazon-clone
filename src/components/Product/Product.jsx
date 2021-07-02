import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


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
                <button onClick={() => props.handleAddProduct(product)} className="main-button"><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> add to cart</button>
            </div>
        </div>
    );
};

export default Product;