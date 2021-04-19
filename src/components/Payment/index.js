import React, {useState, useEffect} from 'react';
import {
    Container, 
    ContainerHeading,
    PaymentSection,
    PaymentTitle,
    PaymentAddress,
    PaymentItems,
    PaymentDetails
} from './styles/payment';

import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../CheckoutProduct';
import { Link, useHistory } from 'react-router-dom';
import FlipMove from 'react-flip-move';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../reducer';
import axios from '../../axios';


const Payment = () => {
    const [{basket, user}, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('');
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
         const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=$(getBasketTotal(basket) * 100} `
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    const handleSubmit = async e => {
        //fancy stripe stuff
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=> {
            //paymentIntent = paymentConfirmation
            setSucceeded(true);
            setError(null)
            setProcessing(false)

            history.replace('/orders');
        })
    }

    const handleChange = e => {
        //listen for changes in cardElement
        //display any errors as the customer
        setDisabled(e.empty);
        setError(e.error ? e.error.message : '');
    }

    return (
        <Container>
            <div>
                <ContainerHeading>
                    Checkout (
                        <Link to='/checkout'>{basket?.length} items</Link>
                    )
                </ContainerHeading>

                {/*Payment section - delivery address */}
                <PaymentSection>
                    <PaymentTitle>
                        <h3>Delivery Address</h3>
                    </PaymentTitle>
                
                    {/*Payment section - review items */}
                    <PaymentDetails>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </PaymentDetails>
                </PaymentSection>
                {/*Payment section - payment method */}
                <PaymentSection>
                    <PaymentTitle>
                        <h3>Review items and delivery</h3>
                    </PaymentTitle>
                    <PaymentItems>
                        <FlipMove>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                {...item}
                            />
                        ))}
                        </FlipMove>
                    </PaymentItems>
                </PaymentSection>
                
                {/*Payment section - review items */}
                <PaymentSection>
                    <PaymentTitle>
                        <h3>Payment Method</h3>
                    </PaymentTitle>
                    <PaymentDetails>
                        {/*Stripe goes here*/}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div>
                                <CurrencyFormat
                                    renderText={(value)=> (
                                        <h3>Order Total: {value}</h3>  
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p>: 'Buy Now'}</span>
                                </button>
                            </div>
                            
                            {error && <div>{error}</div>}
                        </form>
                    </PaymentDetails>
                </PaymentSection>
            </div>
        </Container>
    )
}

export default Payment;
