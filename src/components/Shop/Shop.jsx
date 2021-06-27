import React, { useState } from 'react';
import fakeData from './../../fakeData/index';
import './Shop.css'
import Product from './../Product/Product';
import Cart from './../Cart/Cart';


const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts]= useState(first10);
    const [cart, setCart] = useState([]);
    // console.log(products);
    const handleAddProduct = (unit) => {
        // console.log(' added product', unit)
        const newCart = [...cart, unit];
        setCart(newCart);
    }
// uporer handleAddProduct function e je kon parameter deya jete pare.

    return (
        <div className="shop-container">  
            <div className="product-container">
                
                { products.map(pd => <Product 
                
                handleAddProduct = {handleAddProduct} 
                product = {pd}>

                </Product>)}
               
            </div>
            <div className="cart-container">
                    <Cart cart={cart}></Cart>
            </div>         
            
           
        </div>
    );
};

export default Shop;