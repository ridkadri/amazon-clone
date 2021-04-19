import React from 'react';
import {HomeContainer, Image, Row} from './styles/Home';

//components
import Product from '../Product';

const Home = () => {
    return (
        <HomeContainer>
            <div>
                <Image
                    src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
                    alt=''
                />
                <Row>
                    <Product
                        id= '1878878'
                        title='Apple Watch Series 5 (GPS + Cellular, 44mm) - Gold Stainless Steel Case with Stone Sport Band'
                        price={19.99}
                        image='https://m.media-amazon.com/images/I/71mhLkrHKxL._AC_UL640_FMwebp_QL65_.jpg'
                        rating={5}
                    />
                    <Product
                        id='24554465'
                        title='New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Space Gray'
                        price={2099}
                        image='https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UL640_FMwebp_QL65_.jpg'
                        rating={4}
                    />
                </Row>

                <Row>
                    <Product
                        id='3754546'
                        title='The Setup - Meghan Quinn'
                        price={3.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/91LuCxKjsVL._UX300__PJku-sticker-v7,TopRight,0,-50__BG0,0,0,0_FMpng_AC_UL405_SR261,405_.jpg'
                        rating={4} 
                    />
                    <Product
                        id='45675567'
                        title='Disloyal: A Memoir: The True Story of the Former...'
                        price={16.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/71pfI0hEvBL.__BG0,0,0,0_FMpng_AC_UL405_SR270,405_.jpg'
                        rating={4} 
                    />
                    <Product
                        id='576786876'
                        title='Marrying My Billionaire Hookup'
                        price={3.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/61ik5s87JrL._UX300__PJku-sticker-v7,TopRight,0,-50__BG0,0,0,0_FMpng_AC_UL405_SR270,405_.jpg'
                        rating={4}
                    />
                </Row>

                <Row>
                    <Product
                        id='657658799'
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'
                        rating={4}
                    />
                </Row>
            </div>
        </HomeContainer>
    )
}

export default Home;
