import { useContext } from 'react';
import { ClockContext } from './ClockContext';

export function useClock() {
  const time = useContext(ClockContext);
  if (!time)
    throw new Error(
      'The "useClock" custom hook must be only used inside "ClockProvider"',
    );

  return time;
}
