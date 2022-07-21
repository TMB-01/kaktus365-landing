import styled, { keyframes } from "styled-components";

export const HomePageWrapper = styled.div`
  width: 100%;
  /* padding: 30px 0; */
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: lightblue; */
  display: flex;
`;

export const HeaderText = styled.div`
  width: 1000px;
  height: fit-content;
  font-size: 80px;
  font-weight: bolder;
  text-align: center;
  margin: auto;

  background-color: #08aeea;
  background-image: linear-gradient(60deg, #08aeea 0%, #2af598 100%);
  background-size: 100%;
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  user-select: none;
`;

const animation = keyframes`
  0%{
    transform: translateY(0px);
  }
  30%{
    transform: translateY(15px);
  }
  40%{
    transform: translateY(0px);
  }
  
`;

export const ScrollDown = styled.div`
  position: absolute;
  bottom: 20px;
  right: 0;
  left: 0;
  width: fit-content;
  margin: auto;
  background-color: #08aeea;
  background-image: linear-gradient(60deg, #08aeea 0%, #2af598 100%);
  background-size: 100%;

  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;

  animation-name: ${animation};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  img {
    width: 35px;
    margin: auto;
  }
`;

export const Container = styled.div`
  width: 1200px;
  margin: auto;
`;

export const SeeMore = styled.div`
  width: fit-content;
  margin: 20px auto;
  background-color: #08aeea;
  background-image: linear-gradient(60deg, #08aeea 0%, #2af598 100%);
  /* background-size: 100%; */
  /* background-repeat: no-repeat; */
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  display: block;
`;
