import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/link";
// import EventCard from "../eventCard";
import EventsList from "../events";
// import Events from "../events";
import {
  Container,
  EventsWrapper,
  HeaderText,
  HeaderWrapper,
  HomePageWrapper,
  ScrollDown,
  SeeMore,
} from "./styles";

function HomePage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    //   const res = await
    // fetch(`${BASE_URL}/events/upcoming`).then(async (res) => {
    fetch(`${BASE_URL}/events/upcoming`).then(async (res) => {
      const data = await res.json();
      setEvents(data);
      console.log(data);
    });
    //   const eventsList = await res.json();
    //   setEvents(eventsList);
  }, []);

  return (
    // <></>
    <HomePageWrapper>
      <HeaderWrapper>
        <HeaderText>
          <>
            {`O'zbekistondagi`} barcha <br /> IT, Dizayn va StartUp tadbirlar
            birjoyda
          </>
        </HeaderText>
        <ScrollDown>
          <img src="/arrow-down.svg" alt="" />
        </ScrollDown>
      </HeaderWrapper>
      <Container>
        <EventsList title="Yaqinlashib kelayotgan tadbirlar" events={events} />
        <Link href={"/events"}>
          <a>
          <SeeMore>Koʻproq koʻring</SeeMore>
          </a>
        </Link>
      </Container>
    </HomePageWrapper>
  );
}

export default HomePage;

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(`${BASE_URL}/event/list`);
  const events = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      events,
    },
  };
}
