import React from 'react';
import {CheckoutContainer, CheckoutImage, CheckoutTitle} from './styles/checkout';

import Subtotal from '../Subtotal';
import CheckoutProduct from '../CheckoutProduct';
import { useStateValue } from '../../StateProvider';
import FlipMove from 'react-flip-move';

const Checkout = () => {
    const [{basket, user }, dispatch] = useStateValue();

    return (
        <CheckoutContainer>
            <div>
                <CheckoutImage
                    src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' 
                    alt=''
                />
                <div>
                    <h3>Hello,{user?.email}</h3>
                    <CheckoutTitle>Your shopping basket</CheckoutTitle>
                    
                    <FlipMove>
                    {basket.map(item => (
                        <CheckoutProduct
                            key={item.id}
                            {...item}
                        />
                    ))}
                    </FlipMove>
                </div>
            </div>

            <div>
                <Subtotal/>
            </div>
        </CheckoutContainer>
    )
}

export default Checkout;
