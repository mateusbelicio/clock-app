import styled from 'styled-components';

import Icon from './Icon';
import { breakpoint } from '@/styles/medias';

const StyledButton = styled.button`
  display: flex;
  align-items: center;

  padding: 0.25rem;
  border: 1px solid var(--clr-neutral-100);
  border-radius: 999px;
  background-color: var(--clr-neutral-50);

  @media ${breakpoint('sm')} {
    padding: 0.5rem;
  }

  .text {
    font-size: var(--fs-xs);
    font-weight: 700;
    line-height: var(--lh-none);
    letter-spacing: var(--spacing-medium);
    color: rgba(var(--rgb-neutral-950) / 0.5);
    text-transform: uppercase;

    padding-inline: 0.75rem 1rem;

    @media ${breakpoint('sm')} {
      padding-inline: 1.25rem 1rem;
      font-size: var(--fs-base);
    }
  }

  &:hover .icon,
  &:focus-visible .icon {
    background-color: var(--clr-neutral-400);
  }

  &:focus-visible {
    outline: 1px solid var(--clr-neutral-400);
  }
`;

const StyledIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--clr-neutral-800);
  border-radius: 50%;

  width: 2rem;
  height: 2rem;

  transition: background-color 250ms;

  @media ${breakpoint('sm')} {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

function Button({ icon, iconPosition = 'right', children, ...rest }) {
  return (
    <StyledButton {...rest}>
      {icon && iconPosition === 'left' && (
        <StyledIcon className="icon">
          <Icon name={icon} color="white" />
        </StyledIcon>
      )}
      <span className="text">{children}</span>
      {icon && iconPosition === 'right' && (
        <StyledIcon className="icon">
          <Icon name={icon} color="white" />
        </StyledIcon>
      )}
    </StyledButton>
  );
}

export default Button;
