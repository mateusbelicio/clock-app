import { createContext, useEffect, useState } from 'react';
import { formatTime } from '@/utils/time';

export const ClockContext = createContext(null);

function ClockProvider({ children }) {
  const [time, setTime] = useState(formatTime(new Date()));

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  return <ClockContext.Provider value={time}>{children}</ClockContext.Provider>;
}

export default ClockProvider;
