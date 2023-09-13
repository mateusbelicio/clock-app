import { useEffect, useState } from 'react';
import { useFetch } from '@/hooks/useFetch';

import { getDatetime, getDayOfWeek, getDayOfYear, getWeek } from '@/utils/date';

const WORLDTIME_API_URL = 'https://worldtimeapi.org/api/ip';

const initialState = {
  abbreviation: 'BST',
  timezone: 'Europe/London',
  dayOfWeek: getDayOfWeek(),
  dayOfYear: getDayOfYear(),
  weekNumber: getWeek(),
  datetime: getDatetime(),
};

export function useDateTime() {
  const [data, setData] = useState(initialState);
  const {
    data: wolrdtimeData,
    loading: worldtimeLoading,
    error: worldtimeError,
  } = useFetch(WORLDTIME_API_URL);

  useEffect(() => {
    if (!wolrdtimeData) return;

    setData({
      abbreviation: wolrdtimeData.abbreviation,
      timezone: wolrdtimeData.timezone,
      datetime: wolrdtimeData.datetime,
      dayOfWeek: wolrdtimeData.day_of_week + 1,
      dayOfYear: wolrdtimeData.day_of_year,
      weekNumber: wolrdtimeData.week_number,
    });
  }, [wolrdtimeData]);

  return { data, isLoading: worldtimeLoading, error: worldtimeError };
}
