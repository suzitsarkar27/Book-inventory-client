import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import logo from "../../../image/loader-img.gif";
import auth from "../../Firebase.init";
import "./Header.css";
const Header = () => {
  const [user] = useAuthState(auth);
  const hanselSingOut = () => {
    signOut(auth);
  };
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

            <Nav.Link
              as={Link}
              to={"/home"}
              className="heaser-nav"
              href="#action1"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={"/manageitems"}
              className="heaser-nav"
              href="#action2"
            >
              Manage Items
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={"/additems"}
              className="heaser-nav"
              href="#home"
            >
              Add Items
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={"/myitems"}
              className="heaser-nav"
              href="#link"
            >
              My Items
            </Nav.Link>
            {user ? (
              <button
                className="bg-danger rounded text-white"
                onClick={hanselSingOut}
              >
                Sing Out
              </button>
            ) : (
              <Nav.Link
                className="heaser-nav"
                as={Link}
                to={"/login"}
                href="#link"
              >
                Login
              </Nav.Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
