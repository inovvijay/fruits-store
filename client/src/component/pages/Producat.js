import React, { useEffect } from "react";
import { Container, Button, Card, Row } from "react-bootstrap";
import FruitFooter from "../common/Fruit_Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Product = () => {
  const ProductCard = [
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
      Id: 6,
      Image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/3874a.jpg?ts=1697346451",
      Header: "Banana ",
      wight: "1kg",
      Price: "₹34"
    },
    {
      Id: 7,
      Image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/4967a.jpg?ts=1690814288",
      Header: "Sapota",
      wight: "1kg",
      Price: "₹80"
    },
    {
      Id: 8,
      Image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/240843a.jpg?ts=1691587309",
      Header: "Sweet Lime",
      wight: "1kg",
      Price: "₹35"
    },
    {
      Id: 9,
      Image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/442961a.jpg?ts=1697090554",
      Header: "Water Chestunt",
      wight: "1kg",
      Price: "₹30"
    },
    {
      Id: 10,
      Image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/355051a.jpg?ts=1687326264",
      Header: "Papaya",
      wight: "1kg",
      Price: "₹120"
    },
    {
      Id: 11,
      Image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/197975a.jpg?ts=1691659438",
      Header: "Nagpur Orange",
      wight: "1kg",
      Price: "₹34"
    },
    {
      Id: 12,
      Image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/294780a.jpg?ts=1696330704",
      Header: "Dragon Fruit",
      wight: "1kg",
      Price: "₹100"
    },
    {
      Id: 13,
      Image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/190320a.jpg?ts=1690813253",
      Header: "Pineapple",
      wight: "1kg",
      Price: "₹90"
    },
    {
      Id: 14,
      Image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/3983a.jpg?ts=1690815920",
      Header: "Sweet Tamarind Box",
      wight: "1kg",
      Price: "₹50"
    },
    {
      Id: 15,
      Image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/433987a.jpg?ts=1698316973",
      Header: "Muskmelon",
      wight: "1kg",
      Price: "₹80"
    },
    {
      Id: 16,
      Image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/362127a.jpg?ts=1696330750",
      Header: "Blurberry",
      wight: "1kg",
      Price: "₹250"
    },
    {
      Id: 17,
      Image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/4001a.jpg?ts=1690815172",
      Header: "Custard Apple",
      wight: "1kg",
      Price: "₹80"
    },
    {
      Id: 18,
      Image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/354985a.jpg?ts=1698840269",
      Header: "Valencia Orange",
      wight: "1kg",
      Price: "₹60"
    },
    {
      Id: 19,
      Image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/60924a.jpg?ts=1699632538",
      Header: "Pear Nakh",
      wight: "1kg",
      Price: "₹130"
    },
    {
      Id: 20,
      Image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/367366a.jpg?ts=1696330760",
      Header: "Thai Guava",
      wight: "1kg",
      Price: "₹60"
    },
    {
      Id: 21,
      Image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/15220a.jpg?ts=1690806475",
      Header: "Raw Mango",
      wight: "1kg",
      Price: "₹50"
    },
    {
      Id: 22,
      Image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/394525a.jpg?ts=1696330769",
      Header: "Kiwi",
      wight: "1kg",
      Price: "₹90"
    },
    {
      Id: 23,
      Image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/532458a.jpg",
      Header: "Green Apple",
      wight: "1kg",
      Price: "₹150"
    }
  ];
  useEffect(() => {
    AOS.init({
      duration: 1200
    });
  }, []);

  return (
    <Container fluid>
      <Row>
        <div className=" position-relative p-0 ">
          <img
            src="./fruit_image/p-img-3.jpg"
            alt="...."
            className="img-fluid w-100 "
          />
          <div className=" position-absolute top-50 bottom-0 start-0 end-0 text-center text-light  ">
            <h3 data-aos="slide-up" className="fw-bolder fs-1">
              ABOUT US
            </h3>
          </div>
        </div>
      </Row>
      <Container>
        <Row className="d-flex justify-content-center align-content-center pt-5">
          {ProductCard.map((data) => (
            <Card
              key={data.Id}
              style={{ width: "16rem" }}
              data-aos="slide-up"
              className=" rounded shadow-lg m-3 p-0 card_shadow "
            >
              <Card.Img variant="top" className=" rounded" src={data.Image} />
              <Card.Body className="card_bottom_color ">
                <Card.Title>{data.Header}</Card.Title>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <Card.Text>
                    {data.wight} {data.Price}
                  </Card.Text>
                  <Button variant="primary">Add</Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
      <Row>
        <FruitFooter />
      </Row>
    </Container>
  );
};

export default Product;
