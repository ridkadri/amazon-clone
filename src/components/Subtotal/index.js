import React from 'react';
import {Container, SubtotalGift, SubtotalInput, SubtotalButton} from './styles/subtotal';

import CurrencyFormat from 'react-currency-format';
import {useStateValue} from '../../StateProvider';
import { getBasketTotal } from '../../reducer';
import {useHistory} from 'react-router-dom';

const Subtotal = () => {
    const [{basket}, dispatch] = useStateValue();
    const history = useHistory();
    return (
        <Container>
            <CurrencyFormat
                renderText={(value)=> (
                    <>
                        <p>
                            Subtotal({basket.length} items):<strong>{value}</strong>
                        </p>
                        <SubtotalGift>
                            <SubtotalInput type='checkbox'/> This order contains a gift
                        </SubtotalGift>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />

            <SubtotalButton onClick={e => history.push('/payment')}>Proceed to Checkout</SubtotalButton>
        </Container>
    )
}

export default Subtotal;
