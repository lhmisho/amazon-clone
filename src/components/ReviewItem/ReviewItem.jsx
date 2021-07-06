import React from 'react';

const ReviewItem = (props) => {
    const product = props.product
    const styleReviewItem = {
        borderBottom: '1px solid lightgray',
        marginBotoom: '5px',
        paddingBottom: '5px'
    }
    return (
        <div style={styleReviewItem}>
            <h4 className="product-name">{product.name}</h4>
            <p>Quantity: {product.quantity}</p>
            <button className="main-button" onClick={()=>props.removeProduct(product.key)}>Remove</button>
        </div>
    );
};

export default ReviewItem;