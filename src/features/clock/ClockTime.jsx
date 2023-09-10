import styled from 'styled-components';

import { isDay } from '@/utils/time';
import { breakpoint } from '@/styles/medias';
import { useDateTime } from './useDateTime';
import { useClock } from './useClock';

import Icon from '@/ui/Icon';

function ClockTime() {
  const time = useClock();
  const { data: date } = useDateTime();

  return (
    <div>
      <p>
        <Icon name={isDay(time) ? 'sun' : 'moon'} size={24} />
        <span>
          {isDay(time) ? 'Good morning' : 'Good evening'}
          <span>, it&apos;s currently</span>
        </span>
      </p>
      <div>
        <span>{time.slice(0, 5)}</span>
        <span>{date.abbreviation}</span>
      </div>
      <span>in London, UK</span>
    </div>
  );
}

export default ClockTime;
