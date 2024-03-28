import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Router} from "react-router-dom";
import cart from "../components/images/cart.jpg";
import {useHistory} from "react-router-dom";






export default function NavBar(props) {

  
 
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
        
          <Nav className="me-auto">
            <Navbar.Brand as={Link} to={"/Home"}>
              Home
            </Navbar.Brand>
            <Navbar.Brand as={Link} to={"/ProductCreation"}>
              Add product
            </Navbar.Brand>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/WishList"}>
              Wishlist
            </Nav.Link>

            <Nav.Link as={Link} to={"/Cart"}>
              <div
                style={{
                  color: "black",
                  position: "absolute",
                  marginTop: "-10px",
                  marginLeft: "10px",
                }}
              >
                {localStorage.getItem("cartLength")}
              </div>
              <img src={cart} alt="cart" className="cart" />
              
            </Nav.Link>

          </Nav>
        </Container> 
      </Navbar>
    </div>
  );
}
