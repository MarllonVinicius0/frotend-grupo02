// Header.jsx
import React from "react";
import { Input } from "antd";
import {
  SearchWrapper,
  Nav,
  NavItem,
} from "./style";

import { HeaderWrapper, TextWrapper } from "../Header/style";
const { Search } = Input;

export default function HeaderPage() {
  return (
    <HeaderWrapper>
      <TextWrapper>InscriON</TextWrapper>
      <SearchWrapper>
        <Search
          placeholder="Pesquise um Evento"
          allowClear
          style={{ width: 350 }}
        />
      </SearchWrapper>
      <Nav>
        <NavItem href="/Login">Organize um Evento</NavItem>
        <NavItem href="/Login">Login</NavItem>
        <NavItem href="/Cadastro">Cadastre-se</NavItem>
      </Nav>
    </HeaderWrapper>
  );
}
