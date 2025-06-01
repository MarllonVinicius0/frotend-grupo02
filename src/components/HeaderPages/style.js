// style.js
import styled from "styled-components";

export const SearchWrapper = styled.div`
  flex: 1;
  margin: 0 20px;
  max-width: 350px;

  @media (max-width: 1024px) {
    margin: 0 16px;
    max-width: 300px;
  }

  @media (max-width: 768px) {
    display: none; /* Hide desktop search on mobile */
  }
`;

export const MobileSearchWrapper = styled.div`
  display: none;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Nav = styled.nav`
  display: flex;
  margin-left:auto;
  gap: 24px;

  @media (max-width: 1024px) {
    gap: 16px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.a`
  color: white;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover {
    text-decoration: underline;
    color: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 1024px) {
    font-size: 14px;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  span {
    width: 30px;
    height: 3px;
    background-color: white;
    transition: all 0.3s ease;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MobileNav = styled.nav`
  display: none;
  
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background-color: rgba(64, 167, 227, 0.98);
    backdrop-filter: blur(10px);
    padding: 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    z-index: 1000;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 480px) {
    padding: 16px;
    top: 56px;
  }
`;

export const MobileNavItem = styled.a`
  color: white;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  padding: 12px 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  font-size: 16px;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: rgba(255, 255, 255, 0.8);
    padding-left: 16px;
    background-color: rgba(255, 255, 255, 0.05);
  }

  @media (max-width: 480px) {
    font-size: 15px;
    padding: 10px 8px;
  }
`;