import { useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import styled from 'styled-components';

import { useQuote } from './useQuote';
import { breakpoint } from '@/styles/medias';

import Icon from '@/ui/Icon';
import Container from '@/ui/Container';

const StyledQuotes = styled(motion.div)`
  margin-bottom: auto;
  padding: 2rem 1.5rem 0.5rem;

  @media ${breakpoint('sm')} {
    padding: 5rem 4rem 0.5rem;
  }

  @media ${breakpoint('xl')} {
    padding: 3.5rem 0 0.5rem;
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

const StyledButton = styled(motion.button)`
  aspect-ratio: 1;
  border-radius: 999px;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus-visible {
    outline: 1px solid var(--clr-neutral-50);
  }
`;

const loadingVariants = {
  loading: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear',
    },
  },
  idle: { rotate: 0 },
};

const quotesVariants = {
  hidden: {
    y: '-100%',
    opacity: 0,
    transition: { duration: 0.3, delay: 0.3 },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3, type: 'tween' },
  },
};

function Quotes() {
  const { quote, isLoading, error, updateQuote } = useQuote();
  const loadingAnimateControl = useAnimationControls();

  useEffect(() => {
    if (isLoading) loadingAnimateControl.start('loading');
    else loadingAnimateControl.start('idle');
  }, [isLoading, loadingAnimateControl]);

  return (
    <StyledQuotes
      key="quote"
      variants={quotesVariants}
      initial="hidden"
      animate="visible"
    >
      <StyledContainer>
        {error && <p>{error}</p>}
        {!isLoading && !error && (
          <blockquote>
            <p>{quote.text}</p>
            <span>{quote.author}</span>
          </blockquote>
        )}
        <StyledButton
          onClick={updateQuote}
          variants={loadingVariants}
          initial="idle"
          animate={loadingAnimateControl}
          aria-label="refresh quote"
        >
          <Icon name="refresh" color="transparent" hover="white" />
        </StyledButton>
      </StyledContainer>
    </StyledQuotes>
  );
}

export default Quotes;
