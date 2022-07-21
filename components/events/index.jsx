import React from "react";
import EventCard from "../eventCard";
import { Container } from "../homePage/styles";
import { EventsWrapper, Title } from "./styles";

function EventsList({ events,title="Events" }) {
  return (
    <Container>
      <Title>{title}</Title>
      <EventsWrapper>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </EventsWrapper>
    </Container>
  );
}

export default EventsList;
