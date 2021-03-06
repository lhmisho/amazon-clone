import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    let {productKey} = useParams()
    const product = fakeData.find(product => productKey === product.key)
    console.log(product)
    return (
        <div>
            <Product product={product} />
        </div>
    );
};

export default ProductDetail;