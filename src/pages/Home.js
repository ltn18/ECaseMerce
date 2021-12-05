import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import Carousel from "react-bootstrap/Carousel";
import "../css/Home.css";
import axios from "axios"
const Home = () => {

  const URL = `http://localhost:8080/products`
  const [products, setProducts] = useState([]);
  useEffect(async () => {
    await axios.get(URL).then(result => {
      console.log(result.data)
      setProducts(result.data);
    })
  }, [])
  

  return (
  
    <div className="home">
      
      <div className="home__container">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://dailymedia.case.edu/wp-content/uploads/2018/08/22085723/class-2022-cwru-feat.jpg"
              alt="Favourite items"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://dailymedia.case.edu/wp-content/uploads/2016/12/15184212/ksl-oval.jpg"
              alt="Wifi 6"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {products.map(product => <Product
                                    id={product.ProductID}
                                    title={product.Name}
                                    price={product.Price}
                                    qty={product.Quantity}
                                  ></Product>)}

      </div>
    </div>
  );
};

export default Home;
