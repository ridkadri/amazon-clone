import React from 'react';
import './Home.css';

//components
import Product from '../Product/Product';

const Home = () => {
    return (
        <div className='home'>
            <div className='home_container'>
                <img 
                    className='home_image'
                    src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
                    alt=''
                />
                <div className='home_row'>
                    <Product
                        title='Final Fantasy VII'
                        price={19.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/713-OtN4-8L._AC_SY400_.jpg'
                        rating={5}
                    />
                    <Product
                        title='Elite Series 2 Controller - Black'
                        price={152.89}
                        image='https://images-na.ssl-images-amazon.com/images/I/41axyW2jpfL._AC_US436_FMwebp_QL65_.jpg'
                        rating={4}
                    />
                </div>

                <div className='home_row'>
                    <Product
                        title='The Setup - Meghan Quinn'
                        price={3.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/91LuCxKjsVL._UX300__PJku-sticker-v7,TopRight,0,-50__BG0,0,0,0_FMpng_AC_UL405_SR261,405_.jpg'
                        rating={4} 
                    />
                    <Product
                        title='Disloyal: A Memoir: The True Story of the Former...'
                        price={16.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/71pfI0hEvBL.__BG0,0,0,0_FMpng_AC_UL405_SR270,405_.jpg'
                        rating={4} 
                    />
                    <Product
                        title='Marrying My Billionaire Hookup'
                        price={3.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/61ik5s87JrL._UX300__PJku-sticker-v7,TopRight,0,-50__BG0,0,0,0_FMpng_AC_UL405_SR270,405_.jpg'
                        rating={4}
                    />
                </div>

                <div className='home_row'>
                    <Product
                        title='TCL 32S325 32 Inch 720p Roku Smart LED TV (2019)'
                        price={129.99}
                        image='https://m.media-amazon.com/images/I/71YZlXXFktL._AC_UY436_FMwebp_QL65_.jpg'
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
