import React from 'react';
import {
    Container, 
    ProductInfo, 
    ProductPrice, 
    ProductRating, 
    ProductImage, 
    ProductButton
} from './styles/product';

import { useStateValue } from '../../StateProvider';

const Product = ({id, title, price, image, rating}) => {
    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        //dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }

    return (
        <Container>
           <ProductInfo>
                <p>{title}</p>
                <ProductPrice>
                    <small>$</small>
                    <strong>{price}</strong>
                </ProductPrice>
                <ProductRating>
                    {Array(rating)
                        .fill()
                        .map((_,i) => (
                        <p>🌟</p>
                    ))}
                </ProductRating>
           </ProductInfo>
           
           <ProductImage src={image} alt=''/>
            <ProductButton onClick={addToBasket}>Add to basket</ProductButton>
        </Container>
    )
}

export default Product;
