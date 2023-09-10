import styled, { css } from 'styled-components';

import icons from '@/assets/icons.svg';

const colors = {
  white: css`
    color: var(--clr-neutral-50);
  `,
  gray: css`
    color: var(--clr-neutral-500);
  `,
  black: css`
    color: var(--clr-neutral-950);
  `,
};

const StyledIcon = styled.span`
  font-size: ${({ $size }) => $size / 16}rem;
  line-height: var(--lh-none);
  display: inline-block;
  height: 1em;
  ${({ $color }) => $color && colors[$color]};
  ${({ $hover }) =>
    $hover &&
    css`
      &:hover {
        ${colors[$hover]};
      }
    `}

  transition: color 250ms;

  svg {
    width: 1em;
    height: 1em;
  }
`;

function Icon({ name, size = 16, hover, color }) {
  return (
    <StyledIcon $size={size} $hover={hover} $color={color}>
      <svg>
        <use xlinkHref={`${icons}#icon-${name}`} />
      </svg>
    </StyledIcon>
  );
}

export default Icon;
