import Link from "next/link";
import styled from "styled-components";

export const EventCardWrapper = styled.a`
  /* width: 30%;
  margin: calc(10% / 6); */
  padding-top: 100%;
  position: relative;
  display: flex;
  overflow: hidden;
  /* background-color: lightblue; */
  color: white;
  border-radius: 10px;
  box-shadow: 0 0 20px lightgray;
  transition-duration: 0.5s;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 20px grey;
  }

  &,
  a {
    display: block;
  }
  div.after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url(${({ url }) => url});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: blur(5px);

    z-index: 0;
  }
  /* img{
    width: 300px;
  } */
`;

export const Title = styled.div`
  width: 100%;
  height: fit-content;
  font-size: 20px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  z-index: 5;
  font-weight: bold;

  p {
    width: fit-content;
    margin: 0;
    background-color: #08aeea;
    background-image: linear-gradient(60deg, #08aeea 0%, #2af598 100%);
    background-size: 100%;
    padding: 10px;
    /* background-color: black; */
    span.languages {
      font-weight: lighter;
      text-transform: capitalize;
    }
  }
`;

export const Languages = styled.div`
  /* font-size: 25px; */
  background-color: #08aeea;
  background-image: linear-gradient(60deg, #08aeea 0%, #2af598 100%);
  background-size: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 10px;
  text-transform: capitalize;
`;

export const DateBox = styled.div`
  background-color: #08aeea;
  background-image: linear-gradient(60deg, #08aeea 0%, #2af598 100%);
  background-size: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 10px;
`;
