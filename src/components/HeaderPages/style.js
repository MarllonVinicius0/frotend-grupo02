// style.js
import styled from "styled-components";



export const SearchWrapper = styled.div`
  flex: 1;
  margin: 0 20px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 24px;
`;

export const NavItem = styled.a`
  color: white;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
