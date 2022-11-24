import React, { useContext, useState } from "react";
import { Container, Nav, Navbar as Nvbr } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import {
  ArrowLeftOnRectangleIcon,
  ArrowUpTrayIcon,
  FireIcon,
  HomeIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { AuthContext } from "../context/AuthContext";
import { UsersDrawer } from "./UsersDrawer";

export const Navbar = ({ openModal }) => {
  const [show, setShow] = useState(false);
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
<>
<Nvbr
      expand="lg"
      style={{
        borderBottom: "1px solid #dbdbdb",
        position: "sticky",
        top: 0,
        height: "fit-content",
        zIndex: 1,
        background: "white",
      }}
    >
      <Container className="">
        <Nvbr.Brand
          style={{
            color: "#902bff",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
          href="#home"
        >
          <FireIcon style={{ width: 24, height: 24 }} />
          Crowdly
        </Nvbr.Brand>
        <Nvbr.Toggle aria-controls="basic-Nvbr-nav" />
        <Nvbr.Collapse id="basic-Nvbr-nav">
          <Nav className="me-auto d-flex align-items-center">
            <Link className="nav-link" to="/home">
              <HomeIcon style={{ width: 24, height: 24 }} />
            </Link>
            <Link onClick={openModal} className="nav-link" to="#!">
              <ArrowUpTrayIcon style={{ width: 24, height: 24 }} />
            </Link>
            <Link className="nav-link" to="/profile">
              <UserCircleIcon style={{ width: 24, height: 24 }} />
            </Link>
            <Link onClick={handleShow} className="nav-link" to="#!">
              Users
            </Link>

            <button
              onClick={handleLogout}
              to="/"
              className="btn btn-dark btn-sm"
            >
              <ArrowLeftOnRectangleIcon style={{ width: 24, height: 24 }} />
            </button>
          </Nav>
        </Nvbr.Collapse>
      </Container>
    </Nvbr>
    <UsersDrawer show={show} handleClose={handleClose} />
</>
  );
};


Navbar.prototype = {
  openModal: PropTypes.func,
};
