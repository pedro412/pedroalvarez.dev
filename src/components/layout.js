import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../globalStyles';
import Nav from './nav';

const MainContainer = styled.main`
  max-width: 1024px;
  margin: auto;
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <Nav />
        {children}
      </MainContainer>
    </>
  );
};

export default Layout;
