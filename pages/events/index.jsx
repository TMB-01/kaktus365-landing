// import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import EventCard from "../../components/eventCard";
// import { EventCardWrapper } from "../../components/eventCard/styles";
import EventsList from "../../components/events";
import { Container } from "../../components/homePage/styles";
import { GoBack } from "../../components/singleEvent/styles";
import { BASE_URL } from "../../constants/link";

function Events() {
  const router = useRouter();

  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  useEffect(() => {
    //   const res = await
    // fetch(`${BASE_URL}/events/upcoming`).then(async (res) => {
    fetch(`${BASE_URL}/events/upcoming`).then(async (res) => {
      const data = await res.json();
      setUpcomingEvents(data);
      console.log(data);
    });
    //   const eventsList = await res.json();
    //   setEvents(eventsList);
  }, []);
  
  useEffect(() => {
    //   const res = await
    // fetch(`${BASE_URL}/events/upcoming`).then(async (res) => {
    fetch(`${BASE_URL}/events/past`).then(async (res) => {
      const data = await res.json();
      setPastEvents(data);
      console.log(data);
    });
    //   const eventsList = await res.json();
    //   setEvents(eventsList);
  }, []);

  return (
    <Container style={{marginTop:"20px"}}>
      <GoBack
        onClick={() => {
          router.back();
        }}
      >
        <div>
          <img src="/chevron-left.svg" alt="" />
        </div>
      </GoBack>
      
      <EventsList title="Yaqinlashib kelayotgan tadbirlar" events={upcomingEvents}/>
      <br /> <br />
      <EventsList title="O'tgan tadbirlar" events={pastEvents}/>

      {/* <EventsWrapper>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </EventsWrapper> */}
    </Container>
  );
}

export default Events;
