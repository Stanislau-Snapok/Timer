import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { convertTimeToString } from '../../utils';
import {
  Wrapper,
  TimerName,
  TimerValue,
  ButtonsWrapper,
} from './Timer.styled';

interface ITimer {
  onTimerDelete: (event: React.MouseEvent) => void,
  timerId: number,
}

interface ITime {
  startTime: number,
  elapsedTime: number,
  currentTime: number,
}

const Timer = ({
  onTimerDelete,
  timerId,
}: ITimer) => {
  const interval = useRef<ReturnType<typeof setInterval> | null>();
  const [isStarted, setIsStarted] = useState(false);
  const [time, setTime] = useState<ITime>({
    startTime: 0,
    elapsedTime: 0,
    currentTime: 0,
  });

  const handleTimerStateToogle = useCallback(
    () => setIsStarted((currentTimerState) => !currentTimerState),
    [],
  );

  const handleTimerReset = useCallback(() => {
    const now = performance.now();

    setTime({
      startTime: now,
      elapsedTime: 0,
      currentTime: now,
    });
  }, []);

  const getValueToDisplay = (): string => (
    convertTimeToString((time.currentTime - time.startTime) + time.elapsedTime)
  );

  useEffect(() => {
    if (isStarted) {
      interval.current = setInterval(() => {
        setTime((currentTime) => {
          const now = performance.now();

          return {
            ...currentTime,
            startTime: currentTime.startTime === 0 ? now : currentTime.startTime,
            currentTime: now,
          };
        });
      }, 100);
    } else if (interval.current) {
      clearInterval(interval.current as NodeJS.Timeout);
      setTime((currentTime) => ({
        currentTime: 0,
        startTime: 0,
        elapsedTime: (performance.now() - currentTime.startTime) + currentTime.elapsedTime,
      }));
    }
  }, [isStarted]);

  return (
    <Wrapper>
      <TimerName>
        {`This is timer #${timerId}`}
      </TimerName>
      <TimerValue>
        {getValueToDisplay()}
      </TimerValue>
      <ButtonsWrapper>
        <button onClick={handleTimerStateToogle}>Start / Pause</button>
        <button onClick={handleTimerReset}>Reset</button>
        <button onClick={onTimerDelete}>Delete</button>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default Timer;
