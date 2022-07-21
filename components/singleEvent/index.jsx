import React, { useEffect } from "react";
import { empty } from "../../constants/empty";
import useHttpRequest from "../../hooks/useHttpRequest";
import { displayDays, displayTime } from "../../utils/dateTimeManager";
import { parseToJson } from "../../utils/json";
import {
  Address,
  Date,
  EventPostWrapper,
  GoBack,
  Hashtags,
  InlineButton,
  InlineButtonWrapper,
  Languages,
  Organizers,
  Price,
  SingleEventWrapper,
  Speakers,
  TextData,
  Time,
  Title,
} from "./styles";

import { langs } from "../../constants/langs";
import { format as formatConst } from "../../constants/format";
import Link from "next/link";
import { channelUsername } from "../../constants/main";
import { useRouter } from "next/router";

function SingleEvent({ event }) {
  let {
    createdAt,
    description,
    descriptionEntity,
    endDate,
    endTime,
    eventCreatorId,
    eventTypeId,
    format,
    geoLocation,
    id,
    igPostCode,
    isActive,
    isAdminReviewing,
    isPublished,
    language,
    link_to_event,
    link_to_registration,
    location_text,
    messageIdInChannel,
    organizers,
    poster_id,
    price,
    reminderId,
    speakers,
    startDate,
    startTime,
    subscribersCount,
    tenMinAgoMentioned,
    thirtyMinAgoMentioned,
    title,
    updatedAt,
    zeroMinAgoMentioned,
    eventType,
    eventTypeName,
    channelPostUrl,
    addPopUp,
    setAddPopUp,
    edit,
    setEdit,
  } = event;
  console.log(event);

  const router = useRouter();

  const [imgUrlProcess, makeImgUrlRequest] = useHttpRequest();
  useEffect(() => {
    if (poster_id) {
      const toJson = parseToJson(poster_id);
      if (toJson) {
        // setPostersIds(toJson);
        makeImgUrlRequest({
          method: "GET",
          path: `attachment/tg-url/file`,
          params: {
            file_id: toJson[0],
          },
        });
      } else if (empty.isNotEmpty(poster_id)) {
        // setPostersIds([poster_id]);
        makeImgUrlRequest({
          method: "GET",
          path: `attachment/tg-url/file`,
          params: {
            file_id: poster_id,
          },
        });
      } else {
        // setPostersIds([]);
      }
      // } else {
      //   setPostersIds([]);
      // }
      // console.log("POSTER ID: ", poster_id, postersIds);
    }
  }, [poster_id]);

  console.log("speakers: ", speakers);
  console.log("organizers: ", organizers);
  console.log("language: ", language);
  console.log("geoLocation: ", geoLocation);

  speakers = parseToJson(speakers);
  organizers = parseToJson(organizers);
  language = parseToJson(language);
  geoLocation = parseToJson(geoLocation);

  return (
    <SingleEventWrapper>
      <GoBack
        onClick={() => {
          router.back();
        }}
      >
        <div>
          <img src="/chevron-left.svg" alt="" />
        </div>
      </GoBack>
      <EventPostWrapper>
        <img src={imgUrlProcess.data} />
        <TextData>
          <Hashtags>
            #{eventType.name} #{format}
          </Hashtags>
          <Title>{title}</Title> <br />
          {startDate && <Date> 🗓 {displayDays({ startDate, endDate })}</Date>}
          {startTime && <Time>⏰ {displayTime({ startTime, endTime })}</Time>}
          <Price>
            {price >= 1000 ? `💰 ${thousandSeparator(price)} so'm\n` : ""}
          </Price>
          <Speakers>{displaySpeaker(speakers)}</Speakers>
          <Organizers>{displayOrganizer(organizers)}</Organizers>
          <Languages>
            {language
              ? `${
                  language.length === 1
                    ? `${langs[language[0]]}\n`
                    : language.map((l) => `${langs[l]}`).join(", ")
                } \n`
              : ""}
          </Languages>
          <Address>
            {displayAddress(format, geoLocation, location_text)}
          </Address>
        </TextData>
      </EventPostWrapper>
      <InlineButtonWrapper>
        {empty.isNotEmpty(link_to_registration) && (
          <Link href={link_to_registration}>
            <a target="_blank">
              <InlineButton>Registratya</InlineButton>
            </a>
          </Link>
        )}
        {empty.isNotEmpty(link_to_event) && (
          <Link href={link_to_event}>
            <a target="_blank">
              <InlineButton>Tadbirga utish</InlineButton>
            </a>
          </Link>
        )}
        {messageIdInChannel && (
          <Link href={`https://t.me/${channelUsername}/${messageIdInChannel}`}>
            <a target={"_blank"}>
              <InlineButton>Eslatma quyish</InlineButton>
            </a>
          </Link>
        )}
      </InlineButtonWrapper>
    </SingleEventWrapper>
  );
}

const displaySpeaker = (speakers) => {
  console.log("speakers type", typeof speakers, "speakers", speakers);

  if (speakers && speakers.length > 0 && typeof speakers[0] === "object") {
    // const { speakerDescription, speakerLink, speakerName } = speakers;

    return (
      <>
        🎙{" "}
        <>
          {speakers.length > 1 ? (
            <>
              Spikerlar: <br />
            </>
          ) : (
            ""
          )}
          {speakers.map(({ speakerDescription, speakerLink, speakerName }) => {
            // const sSpeaker = speaker.split("-").map((s) => s.trim());
            return (
              <>
                {speakers.length > 1 ? <b> • </b> : ""}{" "}
                {speakerLink ? (
                  <a href={speakerLink}>
                    <b>{speakerName}</b>
                  </a>
                ) : (
                  <b>{speakerName}</b>
                )}
                {speakerDescription ? <> - {speakerDescription}</> : ""}
                <br />
              </>
            );
          })}
        </>
        {/* )} */}
      </>
    );
  } else {
    const fSpeaker = speakers?.[0].split("-").map((s) => s.trim());
    return (
      <>
        {speakers && speakers.length > 0 ? (
          <>
            🎙{" "}
            {speakers.length === 1 ? (
              <>
                <b>{fSpeaker[0]}</b>
                {fSpeaker?.[1] ? ` - ${fSpeaker?.[1]}` : ""}
                <br />
              </>
            ) : (
              <>
                Spikerlar: <br />
                {speakers.map((speaker) => {
                  const sSpeaker = speaker.split("-").map((s) => s.trim());
                  return (
                    <>
                      <b> • </b> <b>{sSpeaker[0]}</b>
                      {sSpeaker?.[1] ? <> - {sSpeaker[1]}</> : ""}
                      <br />
                    </>
                  );
                })}
              </>
            )}
          </>
        ) : (
          ""
        )}
      </>
    );
  }
};

const displayOrganizer = (organizers) => {
  console.log("organizers: ".toUpperCase(), organizers);
  if (organizers?.length > 0) {
    if (typeof organizers?.[0] === "string") {
      const fOrganizer = organizers?.[0].split("-").map((s) => s.trim());
      return (
        <>
          {organizers && organizers.length > 0 ? (
            <>
              🎯{" "}
              {organizers.length === 1 ? (
                <>
                  {fOrganizer?.[1] ? (
                    <>
                      <b>{fOrganizer[1]}</b> -{" "}
                    </>
                  ) : (
                    ""
                  )}
                  {fOrganizer[0]}
                  <br />
                </>
              ) : (
                <>
                  Tashkilotchilar: <br />
                  {organizers.map((organizer) => {
                    const sOrganizer = organizer
                      .split("-")
                      .map((s) => s.trim());
                    return (
                      <>
                        {" "}
                        <b> • </b>
                        {sOrganizer?.[1] ? (
                          <>
                            <b>{sOrganizer[1]}</b> -{" "}
                          </>
                        ) : (
                          ""
                        )}
                        {sOrganizer[0]}
                        <br />
                      </>
                    );
                  })}
                </>
              )}
            </>
          ) : (
            ""
          )}
        </>
      );
    } else if (typeof organizers?.[0] === "object") {
      return (
        <>
          🎯{" "}
          {organizers.length > 1 ? (
            <>
              Tashkilotchilar: <br />
            </>
          ) : (
            ""
          )}
          {organizers.map(({ organizerName, organizerLink }, i) => (
            <>
              {organizers.length > 1 ? <b> • </b> : ""}
              {Boolean(organizerName) && Boolean(organizerLink) ? (
                <>
                  <a href={organizerLink}>{organizerName}</a> <br />
                </>
              ) : Boolean(organizerName) && !Boolean(organizerLink) ? (
                <>
                  {organizerName} <br />
                </>
              ) : !Boolean(organizerName) && Boolean(organizerLink) ? (
                <>
                  <a href={organizerLink}>{organizerLink}</a> <br />
                </>
              ) : (
                ""
              )}
            </>
          ))}
        </>
      );
    }
  }
};

const displayAddress = (f, geoLocation, location_text) => {
  if (f === formatConst.OFFLINE || f === formatConst.HYBRID) {
    if (geoLocation && empty.isNotEmpty(location_text)) {
      const { latitude, longitude } = geoLocation;
      return (
        <>
          📍{" "}
          <a href={`https://www.google.com/maps?q=${latitude},${longitude}`}>
            {location_text}
          </a>
        </>
      );
    } else if (geoLocation) {
      const { latitude, longitude } = geoLocation;
      return (
        <>
          📍{" "}
          <a href={`https://www.google.com/maps?q=${latitude},${longitude}`}>
            Manzil
          </a>
        </>
      );
    } else if (empty.isNotEmpty(location_text)) {
      return <>📍 {location_text}</>;
    }
  }
  return "";
};

export default SingleEvent;
