import {
  useCallback,
  useRef,
  useState,
} from "react";

import Timer from "../Timer";

import './TimersList.css';

const TimersList = () => {
  const counter = useRef<number>(1);
  const [timers, setTimers] = useState<number[]>([counter.current]);

  const handleTimerRemove = useCallback((currentId: number): void => {
    setTimers((currentTimers) => (currentTimers.filter((id) => id !== currentId)))
  }, []);

  const handleTimerAdd = useCallback(() => {
    counter.current += 1;

    setTimers((currentTimers) => ([...currentTimers, counter.current]))
  }, [])

  return (
    <div className='container'>
      <button
        onClick={handleTimerAdd}
        className="addTimerButton"
      >
        Add timer
      </button>
      <div className="timersWrapper">
        {timers.map((id) => (
          <Timer
            key={id}
            onTimerDelete={() => handleTimerRemove(id)}
            timerId={id}
          />
        ))}
      </div>
    </div>
  );
}

export default TimersList;
