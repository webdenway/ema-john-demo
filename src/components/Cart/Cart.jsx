import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    // const total = cart.reduce((total, unit) => total + unit.price, 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
        
    }
    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total >15){
        shipping = 4.99;
    }
    else if(total >0){
        shipping = 12.99; 
    }
    const tax = total*.1;
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    const grandTotal = formatNumber(total) + formatNumber(shipping) + formatNumber(tax);
            ;

    return (
        <div>
            <h2>Order Summery</h2>
            <h4>Items Ordered : {cart.length}</h4>
            <h4>Items shipping : {formatNumber(shipping)}</h4>
            <h4>Items Tax : {formatNumber(tax)}</h4>
            <h3>Total Price :{grandTotal.toFixed(2)}</h3>

        </div>
    );
};

export default Cart;