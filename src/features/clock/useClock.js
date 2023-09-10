import { useEffect, useState } from 'react';
import { formatTime } from '@/utils/time';

export function useClock() {
  const [time, setTime] = useState(formatTime(new Date()));

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  return time;
}
