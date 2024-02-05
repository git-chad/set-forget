'use client'
import React, { useState, useEffect } from "react";
import moment from "moment-timezone";

const BuenosAiresClock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(moment().tz("America/Argentina/Buenos_Aires").format("HH:mm"));

    const intervalId = setInterval(() => {
      setTime(moment().tz("America/Argentina/Buenos_Aires").format("HH:mm"));
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return <p>{time}</p>;
};

export default BuenosAiresClock;
