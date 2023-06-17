import {
  useCallback,
  useRef,
  useState,
} from "react";

import Timer from "../Timer";
import {
  Container,
  AddTimerButton,
  TimersWrapper,
} from "./TimerList.styled";

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
    <Container>
      <AddTimerButton
        onClick={handleTimerAdd}
        className="addTimerButton"
      >
        Add timer
      </AddTimerButton>
      <TimersWrapper>
        {timers.map((id) => (
          <Timer
            key={id}
            onTimerDelete={() => handleTimerRemove(id)}
            timerId={id}
          />
        ))}
      </TimersWrapper>
    </Container>
  );
}

export default TimersList;
