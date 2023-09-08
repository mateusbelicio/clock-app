import styled from 'styled-components';

import { useQuote } from './useQuote';
import { breakpoint } from '@/styles/medias';

import Icon from '@/ui/Icon';
import Container from '@/ui/Container';

const StyledQuotes = styled(Container)`
  display: flex;
  align-items: start;
  gap: 1rem;

  margin-bottom: auto;
  padding-bottom: 1rem;

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

function Quotes() {
  const { quote, isLoading, error, updateQuote } = useQuote();

  return (
    <StyledQuotes>
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
        <Icon name="refresh" color="gray" hover="white" />
      </button>
    </StyledQuotes>
  );
}

export default Quotes;
