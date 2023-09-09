import { useEffect, useState } from 'react';
import { useFetch } from '@/hooks/useFetch';

const WORLDTIME_API_URL = 'http://worldtimeapi.org/api/ip';

const today = new Date();
const firstDayOfCurrentYear = new Date(today.getFullYear(), 0, 1);
const dayOfYear =
  Math.floor(
    (today.getTime() - firstDayOfCurrentYear.getTime()) / 1000 / 60 / 60 / 24,
  ) + 1;

const initialState = {
  abbreviation: 'BST',
  timezone: 'Europe/London',
  dayOfWeek: today.getDay() + 1,
  dayOfYear: dayOfYear,
  weekNumber: Math.ceil(dayOfYear / 7),
  datetime: today.toISOString(),
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
      dayOfWeek: wolrdtimeData.day_of_week,
      dayOfYear: wolrdtimeData.day_of_year,
      weekNumber: wolrdtimeData.week_number,
    });
  }, [wolrdtimeData]);

  return { data, isLoading: worldtimeLoading, error: worldtimeError };
}
