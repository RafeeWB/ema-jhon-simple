import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(()=> {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data=> {
            const first10 = data.slice(2, 12)
            setProducts(first10)
        })
    }, []);

    const[cart, setCart] = useState([])

    
const handleAddProduct =(product) => {
    const newCart = [...cart, product]
    setCart(newCart)
}    


    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(pd => <Product handleAddProduct = {handleAddProduct} product={pd}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;