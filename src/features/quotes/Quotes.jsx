import styled from 'styled-components';

import { useQuote } from './useQuote';
import { breakpoint } from '@/styles/medias';

import Icon from '@/ui/Icon';
import Container from '@/ui/Container';

const StyledQuotes = styled.section`
  margin-bottom: auto;
  padding: 2rem 1.5rem 1.5rem;

  @media ${breakpoint('sm')} {
    padding: 5rem 4rem 2rem;
  }

  @media ${breakpoint('xl')} {
    padding: 3.5rem 0 2rem;
  }

  blockquote,
  p {
    max-width: 33.75rem;
    font-size: var(--fs-xs);
    line-height: var(--lh-relaxed);

    @media ${breakpoint('sm')} {
      font-size: var(--fs-lg);
      line-height: var(--lh-medium);
    }

    span {
      display: block;
      font-weight: 700;
      margin-top: 0.66667em;
    }
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  align-items: start;
  gap: 1rem;
`;

function Quotes() {
  const { quote, isLoading, error, updateQuote } = useQuote();

  return (
    <StyledQuotes>
      <StyledContainer>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!isLoading && !error && (
          <>
            <blockquote>
              <p>{quote.text}</p>
              <span>{quote.author}</span>
            </blockquote>
          </>
        )}
        <button onClick={updateQuote}>
          <Icon name="refresh" color="transparent" hover="white" />
        </button>
      </StyledContainer>
    </StyledQuotes>
  );
}

export default Quotes;
