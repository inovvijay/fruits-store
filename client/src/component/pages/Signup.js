import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Sign_up = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const HandleSubmitUserData = async (e) => {
    e.preventDefault();
    const data = { userName, userEmail, userPassword };
    console.log(data);
    await axios
      .post("http://localhost:5000/signup", data)
      .then((res) => {
        console.log("Data Submitted Successfully");
        navigate("/signin");
      })
      .catch((err) => {
        console.log("Data not Posted", err);
      });
  };
  return (
    <div className="d-flex justify-content-center align-items-center flex-column h-100">
      <Form className="form_container">
      <h1 className="mb-5 text-center">SignUp</h1>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder=" UserName"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder=" UserEmail"
            value={userEmail}
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="number"
            placeholder="UserPassword"
            value={userPassword}
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={HandleSubmitUserData}
          className="siginbtn_btm"
        >
          SignUp
        </Button>
      </Form>
    </div>
  );
};

export default Sign_up;
