import { useState } from "react";

export const useHeader = () => {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);
  const [currentDate, setCurrentDate] = useState(time);

  const date = new Date();
  const formatter = new Intl.DateTimeFormat("default", { month: "long" });
  const currentMonthName = formatter.format(date);
  const currentDay = date.getDate();
  const currentYear = date.getUTCFullYear();

  function checkTime() {
    time = new Date().toLocaleTimeString();
    setCurrentTime(time);
    setCurrentDate(`${currentDay} de ${currentMonthName} ${currentYear}`);
  }

  setInterval(checkTime, 1000);

  return {
    date,
    currentTime,
    currentDate,
  };
};
