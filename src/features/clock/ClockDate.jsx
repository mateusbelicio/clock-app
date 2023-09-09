import styled from 'styled-components';

import { breakpoint } from '@/styles/medias';

import Container from '@/ui/Container';
import { useDateTime } from './useDateTime';

const StyledDate = styled.section`
  padding-inline: 1.5rem;
  padding-block: 3rem;

  background-color: rgb(var(--rgb-neutral-950) / 0.75);
  color: var(--clr-neutral-50);
  backdrop-filter: blur(40px);

  @media ${breakpoint('sm')} {
    padding-inline: 4rem;
    padding-block: 7.5rem;
  }

  @media ${breakpoint('xl')} {
    padding-inline: 0;
    padding-block: 4.625rem;
  }
`;

const List = styled.ul`
  list-style: none;
  display: grid;
  row-gap: 1rem;

  @media ${breakpoint('sm')} {
    row-gap: 3rem;
    column-gap: 1.875rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);

    & > :nth-child(2n + 1) {
      grid-row: 1;
    }
  }

  @media ${breakpoint('xl')} {
    row-gap: 2.625rem;
    grid-template-columns: [full-start] repeat(12, 1fr) [full-end];

    & > :nth-child(-n + 2) {
      grid-column: full-start / 7;
    }

    & > :nth-child(n + 3) {
      grid-column: 8 / full-end;
    }

    &::after {
      content: '';
      width: 1px;
      height: 100%;
      opacity: 0.25;
      background-color: var(--clr-neutral-50);
      grid-row: 1 / -1;
      grid-column: 7;
    }
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  font-size: var(--fs-2xs);
  line-height: var(--lh-medium);

  @media ${breakpoint('sm')} {
    flex-direction: column;
    align-items: start;
    gap: 0;

    font-size: var(--fs-sm);
  }

  @media ${breakpoint('xl')} {
    gap: 0.5625rem;
    font-size: var(--fs-base);
  }

  h2 {
    font-size: inherit;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: var(--spacing-tiny);
  }

  p {
    font-size: var(--fs-xl);
    font-weight: 700;

    @media ${breakpoint('sm')} {
      font-size: var(--fs-3xl);
      line-height: var(--lh-none);
    }

    @media ${breakpoint('md')} {
      font-size: var(--fs-5xl);
    }

    @media ${breakpoint('xl')} {
      font-size: var(--fs-6xl);
      line-height: var(--lh-large);
    }
  }
`;

function Date() {
  const { data, isLoading, error } = useDateTime();

  return (
    <StyledDate>
      <Container>
        <List>
          <ListItem>
            <h2>Current timezone</h2>
            {error ? (
              <p>&ndash;</p>
            ) : isLoading ? (
              <p>&thinsp;</p>
            ) : (
              <p>{data.timezone}</p>
            )}
          </ListItem>
          <ListItem>
            <h2>Day of the year</h2>
            {error ? (
              <p>&ndash;</p>
            ) : isLoading ? (
              <p>&thinsp;</p>
            ) : (
              <p>{data.dayOfYear}</p>
            )}
          </ListItem>
          <ListItem>
            <h2>Day of the week</h2>
            {error ? (
              <p>&ndash;</p>
            ) : isLoading ? (
              <p>&thinsp;</p>
            ) : (
              <p>{data.dayOfWeek + 1}</p>
            )}
          </ListItem>
          <ListItem>
            <h2>Week number</h2>
            {error ? (
              <p>&ndash;</p>
            ) : isLoading ? (
              <p>&thinsp;</p>
            ) : (
              <p>{data.weekNumber}</p>
            )}
          </ListItem>
        </List>
      </Container>
    </StyledDate>
  );
}

export default Date;
