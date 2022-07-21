const monthInText = (monthInNumber) => {
  const months = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentabr",
    "Oktabr",
    "Noyabr",
    "Dekabr",
  ];
  return months[monthInNumber - 1];
};

const weekInText = (weekInNumber) => {
  const weekdays = [
    "Yakshanba",
    "Dushanba",
    "Seshanba",
    "Chorshanba",
    "Panshanba",
    "Juma",
    "Shanba",
  ];
  return weekdays[weekInNumber];
};

const addZeroIfNeeded = (number) => {
  if (number < 10) {
    return `0${number}`;
  } else {
    return number;
  }
};

const displayDays = ({ startDate, endDate }) => {
  const currentDate = new Date();
  let [startYear, startMonth, startDay] = startDate.split("-");
  startMonth = Number(startMonth);
  if (endDate) {
    let [endYear, endMonth, endDay] = endDate.split("-");
    endMonth = Number(endMonth);
    if (startMonth === endMonth && startYear === endYear) {
      return `${startDay} ${monthInText(startMonth)} - ${endDay} ${monthInText(
        startMonth
      )} ${String(currentDate.getFullYear()) !== startYear ? startYear : ""}`;
    } else if (startYear === endYear && startMonth !== endMonth) {
      return `${startDay} ${monthInText(startMonth)} - ${endDay} ${monthInText(
        endMonth
      )}  ${String(currentDate.getFullYear()) !== startYear ? startYear : ""}}`;
    } else if (startYear !== endYear) {
      return `${startDay} ${monthInText(
        startMonth
      )} ${startYear} - ${endDay} ${monthInText(endMonth)} ${endYear}`;
    }
  }
  const eventDate = new Date(0);
  eventDate.setFullYear(startYear);
  eventDate.setMonth(startMonth - 1);
  eventDate.setDate(startDay);
  return `${startDay} ${monthInText(startMonth)} (${weekInText(
    eventDate.getDay()
  )}) ${String(currentDate.getFullYear()) !== startYear ? startYear : ""}`;
};

const displayTime = ({ startTime, endTime }) => {
  const [sHour, sMinute] = startTime.split(":");
  if (endTime) {
    const [eHour, eMinute] = endTime.split(":");
    return `${sHour}:${sMinute} - ${eHour}:${eMinute}`;
  }
  return `${sHour}:${sMinute}`;
};

export { monthInText, weekInText, addZeroIfNeeded, displayDays, displayTime };
