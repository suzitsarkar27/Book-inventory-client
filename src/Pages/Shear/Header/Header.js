import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../image/loader-img.gif";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <Navbar className="ps-5 pe-5 text-center" bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to={"/home"} href="#">
            <a className="d-flex align-items-center logo" href="#">
              <img height={60} src={logo} alt="" />
              <div className="logo-infro"> Bookly</div>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>

            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link as={Link} to={"/login"} href="#link">
              Login
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
