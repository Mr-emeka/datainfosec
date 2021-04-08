import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NavbarLinks from "./navlinks";

const NavItem = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    background-color: #000;
    justify-content: flex-start;
    padding-top: 10vh;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${(props: { open: any; }) => (props.open ? "-100%" : "0")};
  }
`;

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Hamburger = styled.div`
  background-color: #fff;
  width: 20px;
  height: 2px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${(props: { open: any; }) => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 20px;
    height: 2px;
    background-color:#fff;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${(props: { open: any; }) =>
    props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${(props: { open: any; }) => (props.open ? "0" : "1")};
    transform: ${(props: { open: any; }) => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`;

const Navigation = styled.nav`
  height: 10vh;
  display: flex;
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  padding: 0 5vw;
  color:#fff;
  z-index: 2;
a{ 
  align-self: center;
  color:#fff;

}
  @media (max-width: 768px) {
    top: 0;
    left: 0;
    background-color:#000;
    right: 0;
    left: 0;
  
  }
`;
const Header = styled.header`
background-color: #000;

`
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <Header id="header">
      <div id="navbar">
        <div className="container-fluid">
          <Navigation>
            <Link
              to="/"
              className="navbar-brand"
            >
              NewsFeed
            </Link>
            <Toggle
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <Hamburger open={navbarOpen} />
            </Toggle>
            {navbarOpen ? (
              <NavItem open={false}>
                <NavbarLinks />
              </NavItem>
            ) : (
                <NavItem open>
                  <NavbarLinks />
                </NavItem>
              )}
          </Navigation>
        </div>
      </div>
    </Header>
  );
};

export default Navbar;
