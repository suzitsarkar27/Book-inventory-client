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
  console.log(user);
  const hanselSingOut = () => {
    signOut(auth);
  };
  return (
    <div className="sticky-top">
      <Navbar className="ps-5 pe-5 text-center " bg="light" expand="lg">
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
            {user && (
              <>
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
              </>
            )}
            <Nav.Link
              as={Link}
              to={"/blogs"}
              className="heaser-nav"
              href="#link"
            >
              {" "}
              Blogs
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={"/about"}
              className="heaser-nav"
              href="#link"
            >
              {" "}
              About{" "}
            </Nav.Link>
            {user ? (
              <span>
                <img
                  height={50}
                  className="rounded-circle me-2"
                  src={user.photoURL}
                  alt=""
                />
                <span className="text-primary"> {user.displayName}</span>
                <button
                  className="bg-danger rounded ms-2 text-white"
                  onClick={hanselSingOut}
                >
                  Sing Out
                </button>
              </span>
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
