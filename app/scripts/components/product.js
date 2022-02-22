import React from 'react';

const Product = ({ product }) => {
    return (
        <div className='product'>
            <img className="product__image" src={product.picture} alt=""/>
            <div className='product__name'>{product.name}</div>
            <div className='product__tags'>
                {product.tags.map(tag => {
                    return <span key={tag}>{`${tag}, `}</span>
                })}
            </div>
        </div>
    );
}

export default Product;
