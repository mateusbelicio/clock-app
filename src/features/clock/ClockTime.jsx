import styled from 'styled-components';

import { isDay } from '@/utils/time';
import { breakpoint } from '@/styles/medias';
import { useDateTime } from './useDateTime';
import { useClock } from './useClock';

import Icon from '@/ui/Icon';

const StyledTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;

  & > span {
    font-size: var(--fs-base);
    font-weight: 700;
    line-height: var(--lh-medium);
    letter-spacing: var(--spacing-small);
    text-transform: uppercase;

    @media ${breakpoint('sm')} {
      font-size: var(--fs-lg);
      letter-spacing: var(--spacing-medium);
    }

    @media ${breakpoint('sm')} {
      font-size: var(--fs-2xl);
      letter-spacing: var(--spacing-large);
    }
  }
`;

const Message = styled.p`
  display: flex;
  align-items: center;
  gap: 1rem;

  font-size: var(--fs-base);
  line-height: var(--lh-normal);
  letter-spacing: var(--spacing-small);
  text-transform: uppercase;

  @media ${breakpoint('lg')} {
    gap: 1.125rem;
    font-size: var(--fs-lg);
    line-height: var(--lh-medium);
    letter-spacing: var(--spacing-medium);
  }

  @media ${breakpoint('xl')} {
    font-size: var(--fs-xl);
  }

  span span {
    display: none;

    @media ${breakpoint('sm')} {
      display: inline-block;
    }
  }
`;

const Hours = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.3125rem;

  font-size: var(--fs-8xl);
  line-height: var(--lh-none);
  font-weight: 700;
  letter-spacing: calc(-1 * var(--spacing-tiny));

  span:last-child {
    font-size: var(--fs-sm);
    line-height: var(--lh-medium);
    font-weight: 300;
    letter-spacing: var(--spacing-none);
  }

  @media ${breakpoint('sm')} {
    gap: 0.6875rem;
    font-size: var(--fs-9xl);
    letter-spacing: calc(-1 * var(--spacing-large));

    span:last-child {
      font-size: var(--fs-3xl);
    }
  }

  @media ${breakpoint('xl')} {
    font-size: var(--fs-hg);
    letter-spacing: calc(-1 * var(--spacing-xlarge));

    span:last-child {
      font-size: var(--fs-4xl);
    }
  }
`;

function ClockTime() {
  const time = useClock();
  const { data: date } = useDateTime();

  return (
    <StyledTime>
      <Message>
        <Icon name={isDay(time) ? 'sun' : 'moon'} size={24} />
        <span>
          {isDay(time) ? 'Good morning' : 'Good evening'}
          <span>, it&apos;s currently</span>
        </span>
      </Message>
      <Hours>
        <span>{time.slice(0, 5)}</span>
        <span>{date.abbreviation}</span>
      </Hours>
      <span>in London, UK</span>
    </StyledTime>
  );
}

export default ClockTime;
