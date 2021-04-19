import React from 'react';
import {
    Container, 
    Logo, 
    Search, 
    SearchInput, 
    HeaderNav, 
    HeaderOption, 
    OptionLineOne, 
    OptionLineTwo, 
    OptionBasket, 
    OptionBasketCount
} from './styles/header';

import {IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom';
import {useStateValue} from '../../StateProvider';
import {auth} from '../../firebase';


const Header = () => {
    const [{basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }

    return (
        <Container>
            <Link to='/'>
            <Logo 
                src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' 
                alt=''
            />
            </Link>
            <Search>
                <SearchInput type='text'/>
                <IconButton>
                    <SearchIcon />
                </IconButton>
            </Search>

            <HeaderNav>
                <Link to={!user && '/login'}>
                    <HeaderOption onClick={handleAuthentication}>
                        <OptionLineOne>
                            Hello {!user ? 'Guest' : user.email}
                        </OptionLineOne>
                        <OptionLineTwo>
                        {user ? 'Sign Out': 'Sign In'}
                        </OptionLineTwo>
                    </HeaderOption>
                </Link>

                <HeaderOption>
                    <OptionLineOne>
                        Returns
                    </OptionLineOne>
                    <OptionLineTwo>
                        & Orders
                    </OptionLineTwo>
                </HeaderOption>

                <Link to='/checkout'>
                    <OptionBasket>
                        <ShoppingCartIcon/>
                        <OptionBasketCount>
                         {basket?.length}
                        </OptionBasketCount>
                    </OptionBasket>
                </Link>
            </HeaderNav>
        </Container>
    );
}

export default Header;
