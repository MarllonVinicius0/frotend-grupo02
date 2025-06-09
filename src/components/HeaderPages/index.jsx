import React, { useState } from "react";
import { Input } from "antd";
import {
  SearchWrapper,
  Nav,
  NavItem,
  MobileMenuButton,
  MobileNav,
  MobileNavItem,
  MobileSearchWrapper,
} from "./style";

import { HeaderWrapper, TextWrapper } from "../Header/style";
const { Search } = Input;

export default function HeaderPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <HeaderWrapper>
        <TextWrapper><a href="/">InscriON</a></TextWrapper>
        
        {/* Desktop Search */}
        <SearchWrapper>
          <Search
            placeholder="Pesquise um Evento"
            allowClear
            style={{ width: "100%" }}
          />
        </SearchWrapper>

        {/* Desktop Navigation */}
        <Nav>
          <NavItem href="/Login">Organize um Evento</NavItem>
          <NavItem href="/Login">Login</NavItem>
          <NavItem href="/Cadastro">Cadastre-se</NavItem>
        </Nav>

        {/* Mobile Menu Button */}
        <MobileMenuButton onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </MobileMenuButton>
      </HeaderWrapper>

      {/* Mobile Navigation */}
      <MobileNav isOpen={isMobileMenuOpen}>
        {/* Mobile Search */}
        <MobileSearchWrapper>
          <Search
            placeholder="Pesquise um Evento"
            allowClear
            style={{ width: "100%" }}
          />
        </MobileSearchWrapper>
        
        <MobileNavItem href="/Login" onClick={() => setIsMobileMenuOpen(false)}>
          Organize um Evento
        </MobileNavItem>
        <MobileNavItem href="/Login" onClick={() => setIsMobileMenuOpen(false)}>
          Login
        </MobileNavItem>
        <MobileNavItem href="/Cadastro" onClick={() => setIsMobileMenuOpen(false)}>
          Cadastre-se
        </MobileNavItem>
      </MobileNav>
    </>
  );
}