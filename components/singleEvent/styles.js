import styled from "styled-components";

export const SingleEventWrapper = styled.div`
  width: 400px;
  margin: 20px auto;
`;

export const GoBack = styled.div`
  width: 100%;
  height: 40px;
  /* background-color: lightblue; */
  margin-bottom: 10px;
  box-shadow: 0 0 10px lightgrey;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition-duration: 0.5s;
  &:hover{
    box-shadow: 0 0 5px lightgrey;
    /* background-color: rgba(0,0,0,0.111); */
  }

  div {
    width: 40px;
    height: 100%;
    display: flex;
    /* background-color: white; */

    img {
      display: flex;
      margin: auto;
    }
  }
`;

export const EventPostWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px lightgrey;
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 100%;
    min-height: 200px;
  }
`;

export const TextData = styled.div`
  padding: 10px;
  /* border: 1px solid black; */
  p {
    margin: 0;
  }
`;

export const Hashtags = styled.div`
  width: fit-content;
  color: #1890ff;
`;

export const Title = styled.p`
  font-weight: bolder;
  /* margin: 0 0 10px !important; */
`;

export const Date = styled.p``;

export const Time = styled.p``;

export const Price = styled.p``;

export const Speakers = styled.p``;

export const Organizers = styled.p``;

export const Languages = styled.p``;

export const Description = styled.p``;

export const Address = styled.p``;

export const InlineButtonWrapper = styled.div``;

export const InlineButton = styled.div`
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.15);
  color: black;
  margin-top: 10px;
  cursor: pointer;
`;
