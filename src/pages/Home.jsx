import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from '../assets/data/products'
import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";


export default function Home() {
  const year = new Date().getFullYear();
const [data, setData] = useState(products);

useEffect(()=>{
  const filterdProducts = products.filter(item=> item.category === 'chair');

  setData(filterdProducts);
}, []);

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending product in {year}</p>
                <h2>Make Your Interior More Minimalistic & Modern</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  doloribus ex expedita suscipit excepturi facere veniam quos
                  praesentium corrupti velit?
                </p>

                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductsList products={data}/>
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
        <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Best Sales</h2>
            </Col>
            
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}
