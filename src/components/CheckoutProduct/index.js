import React,{forwardRef} from 'react';
import {
    Container,
    CheckoutProductImage,
    CheckoutProductInfo,
    CheckoutProductTitle,
    CheckoutProductRating,
    CheckoutProductButton
} from './styles/checkoutProduct';
import { useStateValue } from '../../StateProvider';

const CheckoutProduct = forwardRef(({id, image, title, price, rating}, ref) => {
    const [{basket}, dispatch] = useStateValue();

    const removefromBasket = () => {
        //remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
            
        })
    }

    return (
        <Container ref={ref}>
            <CheckoutProductImage src={image} alt=''/>

            <CheckoutProductInfo>
                <CheckoutProductTitle>{title}</CheckoutProductTitle>
                <p className='checkoutProduct_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <CheckoutProductRating>
                    {Array(rating)
                    .fill()
                    .map((_, i)=> (
                        <p>🌟</p>
                    ))}
                </CheckoutProductRating>
                <CheckoutProductButton onClick={removefromBasket}>Remove from basket</CheckoutProductButton>
            </CheckoutProductInfo>
        </Container>
    )
})

export default CheckoutProduct;
