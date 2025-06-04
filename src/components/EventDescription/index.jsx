import React from "react";
import {
  DescriptionBox,
  StyledCard,
  StyledTitle,
  StyledParagraph
} from "./style";
import ActivityList from "../ActivityList";

export default function EventDescription({ isRegistered = false }) {
  return (
    <DescriptionBox>
      <StyledCard bordered={false}>
        <StyledTitle level={2}>
          Sobre o Evento
        </StyledTitle>
        <StyledParagraph>
          A maior palestra de educação do Brasil, reunindo os principais especialistas
          da área para discutir o sistema de ensino do Brasil.
        </StyledParagraph>
      </StyledCard>
      <ActivityList isSubscribed={isRegistered} />
    </DescriptionBox>
  );
}