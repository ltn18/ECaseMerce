import React from 'react';
import Product from '../components/Product';
import Carousel from 'react-bootstrap/Carousel';
import "../css/Home.css";

const Home = () => {
    
    return (
        <div className="home">
            <div className = "home__container">
                
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/MGY0YzMzNTMt/MGY0YzMzNTMt-NTM1Y2E3OTYt-w1500._CB411425260_.jpg"
                    alt="Gameplay deal"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZjNlMmIxN2Et/ZjNlMmIxN2Et-N2JkNGVlMzct-w1500._CB661992256_.jpg"
                    alt="Favourite items"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval = {1000}>
                    <img
                    className="d-block w-100"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Nzg3NzIxZDct/Nzg3NzIxZDct-OGNhZDRmNzYt-w1500._CB412118632_.jpg"
                    alt="Wifi 6"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

                <div className="home__row">
                    <Product 
                        id = "12345"
                        title="Beats Solo3 Wireless On-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth, 40 Hours Of Listening Time - Black (Latest Model)" 
                        price={229.99}  
                        image="https://images-na.ssl-images-amazon.com/images/I/51QxA-98Q%2BL._AC_SX342_.jpg"
                        rating={5}
                    ></Product>

                    <Product
                        id = "23456"
                        title="Sony WF-1000XM3/B Bluetooth Noise Cancellation Wireless In-Ear Headphones With Mic and Voice Control, Black" 
                        price={179.69}  
                        image="https://images-na.ssl-images-amazon.com/images/I/61zKkP36kDL._AC_SL1500_.jpg"
                        rating={4}
                    ></Product>

                    <Product
                        id = "23654"
                        title="Sony SRS-XB33 EXTRA BASS Wireless Portable Speaker" 
                        price={99.99}  
                        image="https://m.media-amazon.com/images/I/81NfNapLYxL._AC_UY218_.jpg"
                        rating={4}
                    ></Product>
                </div>

                <div className="home__row">
                    <Product
                        id = "67890"
                        title="Fitbit Charge 4 Special Edition Fitness and Activity Tracker with Built-in GPS, Heart Rate, Sleep & Swim Tracking, Black/Granite Reflective, One Size (S &L Bands Included)" 
                        price={154.50}  
                        image="https://images-na.ssl-images-amazon.com/images/I/81i8wx2ObIL._AC_SX425_.jpg"
                        rating={4}
                    ></Product>

                    <Product
                        id = "65670"
                        title="All-new Echo Dot (4th Gen, 2020 release) | Smart speaker with Alexa | Charcoal" 
                        price={49.99}  
                        image="https://m.media-amazon.com/images/I/714Rq4k05UL._AC_UY218_.jpg"
                        rating={4}
                    ></Product>
                </div>

                <div className="home__row">
                    <Product
                        id = "34547"
                        title="Apple iPhone 11 [128GB, Purple] + Carrier Subscription [Cricket Wireless]" 
                        price={699.99}  
                        image="https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/2132584444.jpeg"
                        rating={5}
                    ></Product>

                    <Product
                        id = "45448"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation)" 
                        price={999.00}  
                        image="https://m.media-amazon.com/images/I/81SGb5l+lZL._AC_UY218_.jpg"
                        rating={5}
                    ></Product> 
                    <Product
                        id = "56589"
                        title="New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 512GB SSD Storage) - Silver (Latest Model)" 
                        price={1399.00}  
                        image="https://m.media-amazon.com/images/I/71gD8WdSlaL._AC_UY218_.jpg"
                        rating={5}
                    ></Product>
                </div>

                <div className="home__row">
                    <Product
                        id = "65690"
                        title="SAMSUNG LC34J791WTNXZA 34-Inch CJ791 Ultrawide Curved Gaming Monitor, White" 
                        price={679.99}  
                        image="https://m.media-amazon.com/images/I/91-hWcNu2yL._AC_UY218_.jpg"
                        rating={5}
                    ></Product>
                </div>
            </div>
        </div>
    );
};

export default Home;