import React, { useEffect, useState } from "react";
import "./Home.css";
import "../common/Fruit_Footer.css";
import { Container, Col, Row, Carousel, Button, Card } from "react-bootstrap";
import FruitFooter from "../common/Fruit_Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const HomeCard = [
    {
      Id: 1,
      Image:
        "http://wpdemo.magikthemes.com/brezza/wp-content/uploads/sites/8/2016/07/product3-300x300.jpg",
      Header: "Orange",
      wight: "1kg",
      Price: "₹80"
    },
    {
      Id: 2,
      Image:
        "http://wpdemo.magikthemes.com/brezza/wp-content/uploads/sites/8/2016/07/product8-300x300.jpg",
      Header: "Apple",
      wight: "1kg",
      Price: "₹120"
    },
    {
      Id: 3,
      Image:
        "http://wpdemo.magikthemes.com/brezza/wp-content/uploads/sites/8/2016/07/product2-300x300.jpg",
      Header: "Watermelon",
      wight: "1kg",
      Price: "₹150"
    },
    {
      Id: 4,
      Image:
        "http://wpdemo.magikthemes.com/brezza/wp-content/uploads/sites/8/2016/07/product13-300x300.jpg",
      Header: "Grapes",
      wight: "1kg",
      Price: "₹100"
    },
    {
      Id: 5,
      Image:
        "http://wpdemo.magikthemes.com/brezza/wp-content/uploads/sites/8/2016/07/product12-300x300.jpg",
      Header: "Pomegranate",
      wight: "1kg",
      Price: "₹160"
    },
    {
      Id: 8,
      Image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/15220a.jpg?ts=1690806475",
      Header: " Raw Mango",
      wight: "1kg",
      Price: "₹50"
    },
    {
      Id: 7,
      Image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/355051a.jpg?ts=1687326264",
      Header: "Papaya",
      wight: "1kg",
      Price: "₹120"
    },
    {
      Id: 6,
      Image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/532458a.jpg",
      Header: "Green Apple",
      wight: "1kg",
      Price: "₹150"
    }
  ];

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const TAGS = ["HTML", "CSS", "JavaScript"];
  const DURATION = 35000;
  const ROWS = 1;
  const TAGS_PER_ROW = 7;

  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

  const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
    return (
      <div
        className="loop-slider"
        style={{
          "--duration": `${duration}ms`,
          "--direction": reverse ? "reverse" : "normal"
        }}
      >
        <div className="inner">
          {children}
          {children}
        </div>
      </div>
    );
  };

  const Tag = ({ text }) => (
    <div className="tag">
      <span>#</span> {text}
    </div>
  );

  useEffect(() => {
    AOS.init({
      duration: 1200
    });
  }, []);

  return (
    <Container fluid>
      <Row>
        <Carousel activeIndex={index} onSelect={handleSelect} className="p-0">
          <Carousel.Item>
            <img
              src="../fruit_image/car_img-2.jpg"
              alt=""
              className="img-fluid w-100"
            />
            <Carousel.Caption className=" carousel_center ">
              <div className="text-center">
                <h3>Second slide label</h3>
                <p className=" fw-bolder fs-3 ">
                  FILL UP YOUR LIFE WITH VITAMINS !.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="../fruit_image/car_img-3.jpg"
              alt=""
              className="img-fluid w-100"
            />
            <Carousel.Caption className="carousel_center ">
              <div className="text-center">
                {" "}
                <h3>FRUITS</h3>
                <p className=" fw-bolder ">
                  So that connoisseurs develop loyalty of these products, ELITE
                  FRUITS works on brand recognition. Elite Fruits and its
                  Partner-producers are committed to the quality of their
                  products. Through a wide range of fruit, the consumer will
                  find all the expertise of ELITE FRUITS'choices. To help you
                  find your way around the marketing seasons, a calendar is
                  available for each variety processed by ELITE FRUITS
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row className="my-4">
        <Col xs={12} sm={6} className="p-0">
          <div data-aos="slide-up" className=" p-5 ">
            <h2 className=" text-center">WELCOME</h2>
            <div className="">
              <p>
                fruit enthusiasts and health-conscious individuals alike.
                Immerse yourself in a world of colorful, juicy delights as you
                explore the bounty of nature's goodness that we have carefully
                curated for you.
              </p>
              <p>
                At our Fruit Store, we take pride in offering a diverse
                selection of the finest fruits, sourced from trusted growers who
                prioritize quality and sustainability. Whether you're in the
                mood for the crisp sweetness of apples, the tropical indulgence
                of mangoes, or the refreshing burst of citrus from oranges, our
                store has something for every palate.
              </p>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} className="p-0">
          <div className="px-5 py-3">
            <img
              src="../fruit_image/h_img-2.jpg"
              alt="...."
              className="img-fluid rounded"
            />
          </div>
        </Col>
      </Row>
      <Row className="p-5 ">
        <h1 className="text-center my-"> HEALTHY FRUITS</h1>

        {HomeCard.map((data) => (
          <Col
            xs={12}
            md={6}
            lg={3}
            key={data.Id}
            className="d-flex justify-content-center  p-5"
          >
            <Card
              style={{ width: "18rem" }}
              data-aos="slide-up"
              className=" card_shadow rounded shadow-lg"
            >
              <Card.Img variant="top" src={data.Image} />
              <Card.Body className="card_bottom_color">
                <Card.Title>{data.Header}</Card.Title>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <Card.Text>
                    {data.wight} {data.Price}
                  </Card.Text>
                  <Button variant="primary">Add</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        <Col xs={12}sm={12}md={6}lg={6}>
          <div className=" p-3">
            <img
              src="https://static-bebeautiful-in.unileverservices.com/fruits%20glow%20cover_0.jpg"
              alt=""
              className="img-fluid rounded"
            />
          </div>
        </Col>
        <Col xs={12}sm={12}md={6}lg={6}>
          <div className="p-3">
            <h2 className="">OUR VALUES : QUALITY AND RESPONSIVENESS</h2>
            <h4 className="mt-4">FRUITS STORE,an irreproachable quality</h4>
            <p>
              The name of our company refers to the impeccable quality of our
              products. As experts in fruit knowledge, we guarantee both the
              freshness of our products and an optimal level of maturity. We
              also offer an organic range, in order to meet the growing demand
              of our customers.
            </p>

            <h4>FRUITS STORE,a privileged commercial follow-up</h4>

            <p>
              Dedicated to full client service, we have throughout our history
              developed product ranges and services adapted to their needs. Even
              today, we respond to any specific request and are organized to
              guarantee our customers an immediate reactivity. Our only mission:
              satisfy them
            </p>
          </div>
        </Col>
      </Row>
      <Row className="my-5">
        <div className="app">
          <div className="tag-list">
            {[...new Array(ROWS)].map((_, i) => (
              <InfiniteLoopSlider
                key={i}
                duration={random(DURATION - 5000, DURATION + 5000)}
                reverse={i % 2}
              >
                {shuffle(TAGS)
                  .slice(0, TAGS_PER_ROW)
                  .map((tag) => (
                    <Tag text={tag} key={tag} />
                  ))}
              </InfiniteLoopSlider>
            ))}
            <div className="fade" />
          </div>
        </div>
      </Row>
      <Row>
        <FruitFooter />
      </Row>
    </Container>
  );
};

export default Home;
