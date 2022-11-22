import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    const { name, img, price, stock, seller, star } = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <div>
                <img src={img} alt="" srcset="" />

            </div>

            <div>
                <h4 className='product-name'>{name}</h4>
                <p><small>by:{seller}</small></p>
                <p>Price:{price}</p>
                <p>only {stock} left in stock - order soon</p>
                <Rating readonly
                    initialRating={star}
                    emptySymbol="fa-regular fa-star icon-color"
                    fullSymbol="fa-solid fa-star icon-color"


                ></Rating> <br /> <br />
                <button onClick={() => props.handleAddToCart(props.product)} className='btn'>{element}Add To Cart</button>
            </div>

        </div>
    );
};

export default Product;