import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props)
    const {name, img, price, seller, stock} = props.product;
    return (
        <div className ="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className ="product-name"> {name}</h4>
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <p><small>Only left in stock{stock}-order soon</small></p>
                <button 
                onClick ={() => props.handleAddProduct(props.product)}
                className ="main-button"><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;