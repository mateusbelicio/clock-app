import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  max-width: ${({ $maxWidth }) => $maxWidth / 16}rem;
  min-width: 15rem;
  margin-inline: ${({ $center }) => ($center ? 'auto' : 0)};
`;

function Container({ maxWidth = 1110, center = true, children, ...rest }) {
  return (
    <StyledContainer $maxWidth={maxWidth} $center={center} {...rest}>
      {children}
    </StyledContainer>
  );
}

export default Container;
