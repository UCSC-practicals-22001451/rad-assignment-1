import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TimerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  color: var(--text-color);
  font-size: 1rem;
`;

const TimeUnit = styled.div`
  margin: 0 10px;
  text-align: center;

  span {
    font-family: "Orbitron", sans-serif;
    display: block;
    font-size: 2rem;
  }
`;

function CountdownTimer() {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-08-31T23:59:59"); // Hardcoded target date and time
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);
  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <TimeUnit key={interval}>
        <span>{timeLeft[interval]}</span>
        {interval}
      </TimeUnit>
    );
  });

  return (
    <TimerWrapper>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </TimerWrapper>
  );
}

export default CountdownTimer;
