import ResultModal from "./ResultModal";
import { useRef, useState } from "react";
import PropTypes from "prop-types";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <div className="w-full md:w-1/2 px-2 mb-4">
        <section className="bg-teal-300 p-8 rounded-2xl shadow-md text-center">
          <h2 className="text-2xl font-bold text-black mb-4">{title}</h2>
          <p className="text-lg text-black mb-4 font-serif">
            {targetTime} second{targetTime > 1 ? "s" : ""}
          </p>
          <button
            onClick={timerIsActive ? handleStop : handleStart}
            className="bg-black text-white py-2 px-4 rounded-full font-bold mb-4"
          >
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
          <p
            className={`text-black font-serif ${
              timerIsActive ? "blinking-text" : ""
            }`}
          >
            {timerIsActive ? "Time is running..." : "Timer inactive"}
          </p>
        </section>
      </div>
    </>
  );
}

TimerChallenge.propTypes = {
  title: PropTypes.string.isRequired,
  targetTime: PropTypes.number.isRequired,
};
