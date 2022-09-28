import React, { ReactNode } from 'react';
import styled from 'styled-components';

export const LayoutStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 9rem minmax(29rem, 1fr);
  align-content: start;
  padding: 0;
`;

const Layout = ({ children }: { children: ReactNode }) => {
  return <LayoutStyle>{children}</LayoutStyle>;
};

export default Layout;
