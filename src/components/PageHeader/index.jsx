import React from "react";
import { HeaderContainer, Title, Subtitle } from "./style";

export default function PageHeader({ titulo, subtitulo }) {
  return (
    <HeaderContainer>
      <Title>{titulo}</Title>
      <Subtitle>{subtitulo}</Subtitle>
    </HeaderContainer>
  );
}