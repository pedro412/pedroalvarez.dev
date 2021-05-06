import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Nav = () => {
  return (
    <StyledNav>
      <Logo>
        <Link to="/">
          <h1>pedroalvarez.dev</h1>
        </Link>
      </Logo>

      <Navbar>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </Navbar>
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled.nav`
  height: 5rem;
  display: grid;
  grid-template-columns: 0.3fr 1fr;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const Navbar = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  li {
    margin: 0 1rem;
  }
`;
