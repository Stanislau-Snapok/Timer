export const NUMBER_OF_MILLISECONNDS_IN_ONE_MINUTE = 60000;

export const NUMBER_OF_MILLISECONDS_IN_ONE_SECOND = 1000;

export const convertTimeToString = (time: number): string => {
  const minutes = Math.floor(time / NUMBER_OF_MILLISECONNDS_IN_ONE_MINUTE);
  const seconds = Math.floor(
    (time - minutes * NUMBER_OF_MILLISECONNDS_IN_ONE_MINUTE) / NUMBER_OF_MILLISECONDS_IN_ONE_SECOND,
  );
  const milliseconds = time % NUMBER_OF_MILLISECONDS_IN_ONE_SECOND;

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds.toFixed(0)).padStart(3, '0')}`;
};
