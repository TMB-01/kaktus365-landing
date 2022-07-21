import Link from "next/link";
import { useEffect, useState } from "react";
import { Fade, Zoom } from "react-reveal";
import { empty } from "../../constants/empty";
import useHttpRequest from "../../hooks/useHttpRequest";
import {
  displayDays,
  displayTime,
  monthInText,
  weekInText,
} from "../../utils/dateTimeManager";
import { parseToJson } from "../../utils/json";
import { DateBox, EventCardWrapper, Languages, Title } from "./styles";

function EventCard({ event }) {
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

  language = parseToJson(language);

  const [imgUrlProcess, makeImgUrlRequest] = useHttpRequest();
  useEffect(() => {
    if (poster_id) {
      const toJson = parseToJson(poster_id);
      if (toJson) {
        // setPostersIds(toJson);
        makeImgUrlRequest({
          method: "GET",
          path: `attachment/tg-url`,
          params: {
            file_id: toJson[0],
          },
        });
      } else if (empty.isNotEmpty(poster_id)) {
        // setPostersIds([poster_id]);
        makeImgUrlRequest({
          method: "GET",
          path: `attachment/tg-url`,
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

  //   useEffect(() => {
  //     fetch(`${BASE_URL}/event/list`).then(async (res) => {
  //       const data = await res.json();
  //       setImgPath(data);
  //     });
  //   }, []);
  return (
    <Zoom top>
      <Link href={`/events/${id}`}>
        <EventCardWrapper url={imgUrlProcess?.data}>
        {/* <EventCardWrapper url={`http://localhost:3456/api/v1/attachment/tg-url?file_id=${poster_id}`}> */}
          {/* <img src={imgUrlProcess?.data} /> */}
          {/* <img src={`http://localhost:3456/api/v1/attachment/tg-url?file_id=${poster_id}`} /> */}
          <div className="after"></div>
          {title && (
            <Title>
              <p>
                {title}
                {/* <span className="languages">{language?.join("/")}</span> */}
              </p>
            </Title>
          )}

          {language && Array.isArray(language) && language.length > 0 && (
            <Languages>
              {
                language.join("/")
                //   ?.map((l) => {
                //     return l.capitalize()
                // l === "uz"
                //   ? "🇺🇿"
                //   : l === "en"
                //   ? "🇬🇧"
                //   : l === "ru"
                //   ? "🇷🇺"
                //   : "";
                //   })
              }
              {/* <br />
              {eventTypeName} */}
            </Languages>
          )}
          {startDate && startTime && (
            <DateBox>
              {startTime && `⏰ ${displayTime({ startTime, endTime })}`} <br />
              {startDate && `🗓 ${displayDays({ startDate, endDate })}`}
            </DateBox>
          )}
        </EventCardWrapper>
      </Link>
    </Zoom>
  );
}

// const displayDays = ({ startDate, endDate }) => {
//   const currentDate = new Date(Date.now());
//   let [startYear, startMonth, startDay] = startDate.split("-");
//   startMonth = Number(startMonth);
//   if (endDate) {
//     let [endYear, endMonth, endDay] = endDate.split("-");
//     endMonth = Number(endMonth);
//     if (startMonth === endMonth && startYear === endYear) {
//       return `${startDay} ${monthInText(startMonth)} - ${endDay} ${monthInText(
//         startMonth
//       )} ${String(currentDate.getFullYear()) !== startYear ? startYear : ""}`;
//     } else if (startYear === endYear && startMonth !== endMonth) {
//       return `${startDay} ${monthInText(startMonth)} - ${endDay} ${monthInText(
//         endMonth
//       )}  ${String(currentDate.getFullYear()) !== startYear ? startYear : ""}}`;
//     } else if (startYear !== endYear) {
//       return `${startDay} ${monthInText(
//         startMonth
//       )} ${startYear} - ${endDay} ${monthInText(endMonth)} ${endYear}`;
//     }
//   }
//   const eventDate = new Date(0);
//   eventDate.setFullYear(startYear);
//   eventDate.setMonth(startMonth - 1);
//   eventDate.setDate(startDay);
//   return `${startDay} ${monthInText(startMonth)} (${weekInText(
//     eventDate.getDay()
//   )}) ${String(currentDate.getFullYear()) !== startYear ? startYear : ""}`;
// };

// const displayTime = ({ startTime, endTime }) => {
//   const [sHour, sMinute] = startTime.split(":");
//   if (endTime) {
//     const [eHour, eMinute] = endTime.split(":");
//     return `${sHour}:${sMinute} - ${eHour}:${eMinute}`;
//   }
//   return `${sHour}:${sMinute}`;
// };

export default EventCard;
