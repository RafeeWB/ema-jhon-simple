import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css"

const Product = (props) => {
    //console.log(props)
    const {title, image, price, description} = props.product
    return (
        <div className="product">
            <div>
                <img src={image} alt="" />
            </div>
            <div className="product-name" >
                <h3 className="product-name-heading">{title}</h3>
                <p><small>{description}</small></p>
                <br />
                <h3> Price: ${price}</h3>
                <p><small>Only {props.product.rating.count} piece in stock -order soon</small></p>
                <button onClick={() => props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={ faShoppingCart } />  Add to cart</button>
            </div>
        </div>
    );
};

export default Product;