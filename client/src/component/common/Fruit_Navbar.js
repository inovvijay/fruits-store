import React, { useEffect, useRef } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { LogoutHandle } from "../Redux/ReduxUserData/UserDataAction";
import { useNavigate } from "react-router-dom";
import {
  loginUserEmail,
  loginUserName,
  loginUserImage
} from "../Redux/ReduxUserData/UserDataAction";

const FruitNavbar = () => {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  console.log(BACKEND_URL);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reduxUserEmail = useSelector((state) => state.userData.userEmail);
  const reduxUserName = useSelector((state) => state.userData.userName);
  const reduxUserImage = useSelector((state) => state.userData.userImage);

  console.log("<><>", reduxUserEmail, reduxUserName, reduxUserImage);

  const logoutHandler = () => {
    if (reduxUserEmail) {
      window.open(`${BACKEND_URL}/auth/logout`, "_self");
      dispatch(LogoutHandle);
      navigate("/");
    }
  };
  const loginHandler = () => {
    navigate("/signin");
  };

  useEffect(() => {
    const getUser = () => {
      fetch(`${BACKEND_URL}/auth/login/success`, {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true
        }
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((res) => {
          console.log(res.user);
          if (res.user.userName) {
            dispatch(loginUserName(res.user.userName));
          }
          if (res.user.email) {
            dispatch(loginUserEmail(res.user.email));
          }
          if (res.user.userProfile) {
            dispatch(loginUserImage(res.user.userProfile));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="dark"
      data-bs-theme="dark"
      className="  bg-body-dark  w-100 bg-body-dark "
    >
      <Container fluid>
        <span>
          <img
            src="/fruit_image/fruits store.jpg"
            className=" rounded-5"
            width={50}
          />
        </span>
        <Navbar.Brand className="nav_text fw-bold fs-4 px-3">
          FRUITS STORE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className=" mx-auto fs-5 ">
            <Nav.Link href="/" className="nav_text">
              HOME
            </Nav.Link>
            <Nav.Link href="/product" className="nav_text">
              PRODUCT
            </Nav.Link>
            <Nav.Link href="/about" className="nav_text">
              ABOUT US
            </Nav.Link>
            <Nav.Link href="/contact" className="nav_text">
              CONTACT
            </Nav.Link>
          </Nav>
          <Nav>
            {reduxUserImage && (
              <div className="center ">
                <img
                  src={reduxUserImage}
                  width={40}
                  height={40}
                  alt=""
                  className="mx-2 rounded-circle m-xs-4"
                />
              </div>
            )}
            {reduxUserEmail ? (
              <span>
                <Button
                  onClick={() => {
                    logoutHandler();
                  }}
                  className="nav_button"
                >
                  Logout
                </Button>
              </span>
            ) : (
              <span>
                <Button
                  onClick={() => {
                    loginHandler();
                  }}
                  className="nav_button"
                >
                  Login
                </Button>
              </span>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default FruitNavbar;
