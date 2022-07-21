import React from "react";
import {
  LoginButton,
  Logo,
  NavbarContainer,
  NavbarWrapper,
  NavList,
} from "./styles";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
// import logo from "../../images/logo.png"

function Navbar() {
  return (
    // <></>
    <NavbarWrapper>
      <NavbarContainer>
        <Link href={"/"}>
          <a>
            <Logo>
              <img src="/logo.jpeg" />
            </Logo>
          </a>
        </Link>
        <NavList>
          <li>{/* <Link href="events">Event</Link> */}</li>
        </NavList>
        <Link href={"/events"}>
          <a>
            <LoginButton>Events</LoginButton>
          </a>
        </Link>
      </NavbarContainer>
    </NavbarWrapper>
  );
}

export default Navbar;
