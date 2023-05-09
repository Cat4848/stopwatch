import { useState } from "react";
import { useSeconds } from "./useSeconds";
import { Hours } from "./Hours";
import { Minutes } from "./Minutes";
import { Seconds } from "./Seconds";

export function Stopwatch() {
  const [isCounting, setIsCounting] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useSeconds(isCounting, seconds, setSeconds);

  const stopwatchDisplayCounting = (
    <div className="stopwatch-container">
      <Hours hours={hours} />
      <Minutes minutes={minutes} />
      <Seconds seconds={seconds} />
    </div>
  );

  function handleStartStop() {
    setIsCounting(!isCounting);
  }

  if (seconds > 60) {
    setMinutes(minutes + 1);
    setSeconds(0);
  }

  if (minutes > 60) {
    setHours(hours + 1);
    setMinutes(0);
  }
  return (
    <>
      {stopwatchDisplayCounting}
      <button onClick={handleStartStop}>
        {isCounting ? "Stop" : "Start"}
      </button>
    </>
  ); 
}