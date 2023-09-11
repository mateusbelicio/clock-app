import styled from 'styled-components';

import Container from '@/ui/Container';
import Button from '@/ui/Button';
import ClockTime from './ClockTime';
import ClockDate from './ClockDate';

import { breakpoint } from '@/styles/medias';

const StyledClockTimeSection = styled.section`
  padding-inline: 1.5rem;
  padding-block: 2.5rem;

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

function Clock({ isOpenInfo, toggleInfo }) {
  return (
    <>
      <StyledClockTimeSection>
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
