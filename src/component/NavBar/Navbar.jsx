import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function _Navbar() {
  return (
    <div>
      <Navbar
        variant="dark"
        expand="lg"
        className="fixed-top"
        style={{ backgroundColor: "#2f4766" /* '#cecbdb' */ }}
      >
        {/* <img style={{width:'180px',height:'60px'}} src={salem}/> */}
        <div
          className="container-fluid"
          style={{
            backgroundColor: "#05101c",
            color: "green",
            fontSize: "20px",
          }}
        >
          <Navbar.Brand as={Link} to={"/home"}>
            <i
              style={{
                width: "120px",
                color: "white",
                backgroundColor: "black",
                fontSize: "30px",
                fontWeight: "30px",
                border: "5px solid black",
                borderRadius: "20%",
              }}
            >
              <span style={{ color: "green" }}>Menouf</span>Care
            </i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to={"/Home"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/About"}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to={"/prediction"}>
                Prediction
              </Nav.Link>
              <Nav.Link as={Link} to={"/firstaid"}>
                Online First Aid
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}
