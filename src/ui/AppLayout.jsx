import styled from 'styled-components';

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
`;

function AppLayout({ children }) {
  return <StyledAppLayout>{children}</StyledAppLayout>;
}

export default AppLayout;
