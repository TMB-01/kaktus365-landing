import styled from "styled-components";

export const NavbarWrapper = styled.div`
  width: 100%;
  /* height: 100vh; */
  display: flex;
  align-items: center;
  /* background-color: white; */
  padding: 15px 0;
  box-shadow: 0 0 10px lightgray;
  /* background-color: #08aeea;
  background-image: linear-gradient(60deg, #08aeea 0%, #2af598 100%);
  background-size: 100vw 100vh; */
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
`;

export const NavbarContainer = styled.div`
  display: flex;
  width: 1200px;
  margin: auto;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  width: fit-content;
  height: 60px;
  /* border: 1px solid black; */
  img {
    height: 100%;
    /* width: 100%; */
  }
`;

export const NavList = styled.ul`
  display: flex;
  margin: 0;
  list-style: none;
`;

export const LoginButton = styled.div`
  width: fit-content;
  margin-left: auto;
  padding: 10px 20px;
  background-color: lightcoral;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  display: block;

  background-color: #08aeea;
  background-image: linear-gradient(60deg, #08aeea 0%, #2af598 100%);
  background-size: 100%;
  background-repeat: no-repeat;
  /* -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent; */
`;
