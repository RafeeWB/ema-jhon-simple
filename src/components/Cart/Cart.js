import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Cart.css"

const Cart = (props) => {
    const cart = props.cart

    let total = 0
    for(let i = 0; i<cart.length; i++){
        const product = cart[i]
        total = total+ product.price
    }

    let shipping = 12.99
    if(total > 300){
        shipping = 49.99
    }
    else if(total > 100){
        shipping = 21.99
    }
    else if(cart.length == 0){
        shipping = 0
    }

    const tax = (total/10).toFixed(2)

    const grandTotal = (Number(total) + shipping + Number(tax)).toFixed(2)

    const formatNumber = num => {
        const precision = (num).toFixed(2)
        return Number(precision)
    }

    return (
        <div>
            <h2>Order summary</h2>
            <p>Items ordered: {cart.length}</p>
            <p>Product price: {formatNumber(total)}</p>
            <p>Shipping cost: {shipping}</p>
            <p>Tax + VAT: {tax}</p>
            <p>Total price: {grandTotal}</p>
            <button> <FontAwesomeIcon icon={ faShoppingCart } />  Buy now</button>

        </div>
    );
};

export default Cart;