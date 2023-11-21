import React, { useState } from "react";
import {  Button, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const HandleSigninSubmit = async (e) => {
    e.preventDefault();
    if (!userName || !userPassword) {
      toast.error("Please fill in both username and password", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000
      });
      return;
    }

    const data = { userName, userPassword };

    try {
      const response = await axios.post("http://localhost:5000/signin", data);

      if (response.status === 200) {
        toast.success("Sign In successful", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000
        });

        navigate("/");
      } else {
        toast.error("Unexpected error");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error during Sign In");
    }
  };
  const HandleSignup = () => {
    navigate("/signup");
  };
  const handleGoogleLogin = () => {
    window.open(`${BACKEND_URL}/auth/google`, "_self");
  };
  return (
    <div className="d-flex justify-content-center align-items-center flex-column h-100">
      <Form className="form_container">
        <h1 className=" pb-4 text-center">SignIn</h1>
        <div className="social-container">
          <Button
            variant="white"
            onClick={handleGoogleLogin}
            className="signin_btn border border-danger "
          >
            <img
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              width={30}
              height={30}
            />
            <span className="px-3">Google</span>
          </Button>
        </div>
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
        <div className=" d-flex justify-content-between pt-3">
          <span>
            <Button
              variant="primary"
              type="submit"
              onClick={HandleSigninSubmit}
              className="siginbtn_btm"
            >
              SignIn
            </Button>
          </span>
          <span>
            <Button onClick={HandleSignup} className="siginbtn_btm">
              SignUp
            </Button>
          </span>
        </div>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default Signin;
