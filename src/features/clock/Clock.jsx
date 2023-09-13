import { useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import styled from 'styled-components';

import Container from '@/ui/Container';
import Button from '@/ui/Button';
import ClockTime from './ClockTime';
import ClockDate from './ClockDate';

import { breakpoint } from '@/styles/medias';

const StyledClockTimeSection = styled(motion.section)`
  padding-inline: 1.5rem;
  padding-bottom: 2.5rem;

  @media ${breakpoint('sm')} {
    padding-inline: 4rem;
    padding-bottom: 4rem;
  }

  @media ${breakpoint('xl')} {
    padding-inline: 0;
    padding-bottom: 6.125rem;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 3rem;

    @media ${breakpoint('md')} {
      gap: 5rem;
    }

    @media ${breakpoint('xl')} {
      flex-direction: row;
      justify-content: space-between;
      align-items: end;
    }
  }
`;

const clockVariants = {
  up: {
    y: [200, 0],
    transition: { duration: 0.3, type: 'tween' },
  },
  down: {
    y: [-200, 0],
    transition: { duration: 0.3, type: 'tween' },
  },
  idle: {
    y: 0,
  },
};

function Clock({ isOpenInfo, toggleInfo }) {
  const clockAnimationControls = useAnimationControls();

  useEffect(() => {
    clockAnimationControls.start(isOpenInfo ? 'up' : 'down');
  }, [isOpenInfo, clockAnimationControls]);

  return (
    <>
      <StyledClockTimeSection
        variants={clockVariants}
        initial="idle"
        animate={clockAnimationControls}
        key="clock-time"
      >
        <Container>
          <ClockTime />
          <Button
            icon={`arrow-${isOpenInfo ? 'up' : 'down'}`}
            onClick={toggleInfo}
          >
            {isOpenInfo ? 'Less' : 'More'}
          </Button>
        </Container>
      </StyledClockTimeSection>
      {isOpenInfo && <ClockDate />}
    </>
  );
}

export default Clock;
