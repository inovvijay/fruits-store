import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

const Contact = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");

  const HandleSubmitContact = async () => {
    const data = { Name, Email, PhoneNumber };
    await axios
      .post("http://localhost:5000/contact", data)
      .then((res) => {
        console.log("Data successfully submitted");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const backgroundStyle = {
    backgroundImage:
      'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmfh1Ry8UoCreWrfKw-ITzxQ6PFpn-oeTWLv1orSBQgSf7eprBz1t6p_f2pAHwAAUOyjc&usqp=CAU")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh", // Set the height as needed
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  const formContainerStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Adjust the opacity as needed
    padding: "50px",
    borderRadius: "10px",
    maxWidth: "400px",
    width: "100%"
  };

  return (
    <div style={backgroundStyle}>
      <Form style={formContainerStyle}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            value={Name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Phone Number"
            value={PhoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={HandleSubmitContact}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
