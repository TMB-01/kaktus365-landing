import styled from "styled-components";

export const EventsWrapper = styled.div`
  width: 100%;
  padding: 10px 0;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  /* grid-auto-flow: column; */
`;

export const Title = styled.p`
  font-size: 40px;
  font-weight: bolder;
  margin: 0 0 10px;
`;