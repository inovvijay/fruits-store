import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FruitFooter from "../common/Fruit_Footer";

const About = () => {
  return (
    <Container fluid  >
      <Row>
        <div className=" position-relative p-0 ">
          <img
            src="./fruit_image/a_img-4.jpg"
            alt="...."
            className="img-fluid"
          />
          <div className=" position-absolute top-50 bottom-0 start-0 end-0 text-center text-light  ">
            <h3 className="fw-bolder fs-1">ABOUT US</h3>
          </div>
        </div>
      </Row>
      <Row className=" about_text_row mb-5 p-sm-5">
        <Col xs={12} md={6} lg={3}>
          <h2 className=" ">Green and organic, just how you like it</h2>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div>
            We source our fruits from trusted growers who prioritize sustainable
            and ethical practices. From orchard to table, our commitment to
            freshness ensures that you receive fruits bursting with flavor and
            packed with essential nutrients.
          </div>
        </Col>
        <Col>
          <div>
            Learn about the nutritional benefits of different fruits and how
            they contribute to your well-being. Our informative articles provide
            insights into the vitamins, minerals, and antioxidants found in each
            fruit, empowering you to make informed choices for a healthier
            lifestyle
          </div>
        </Col>
      </Row>
      <Row >
        <Col xs={12} md={6}>
          <div className=" mb-4 ">
            <img
              src="./fruit_image/a_img-1.jpg"
              alt="...."
              className="img-fluid rounded "
            />
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="  ">
            <img
              src="./fruit_image/a_img-2.jpg"
              alt="...."
              className="img-fluid rounded "
            />
          </div>
        </Col>
      </Row>
      <Row>
        <FruitFooter />
      </Row>
    </Container>
  );
};

export default About;
