// style.js
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  background-color: rgba(64, 167, 227, 0.9);
  height: 48px;
  padding: 0 32px;
  width: 100%;
  box-sizing: border-box;
`;

export const TextWrapper = styled.div`
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: 600;
  flex-shrink: 0;
`;

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
