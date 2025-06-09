import {
  FooterContainer,
  ContentWrapper,
  Section,
  SectionTitle,
  SectionText,
  SocialIcons,
  IconLink,
  Separator,
  ContactInfo,
  ContactItem,
  CopyrightSection,
} from "./style";
import React from "react";

import { LuInstagram } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CiClock1 } from "react-icons/ci";
const Footer = () => {
  return (
    <>
      <FooterContainer>
        <ContentWrapper>
          <Section>
            <SectionTitle className="brand">InscriON</SectionTitle>
            <SocialIcons>
              
              <IconLink href="#" aria-label="Instagram">
                <LuInstagram />
              </IconLink>{" "}
              
              <IconLink href="#" aria-label="Twitter">
                <BsTwitterX />
              </IconLink>{" "}
             
              <IconLink href="#" aria-label="WhatsApp">
                <FaWhatsapp />
              </IconLink>{" "}
              
            </SocialIcons>
          </Section>

          <Separator />

          <Section>
            <SectionTitle>Missão</SectionTitle>
            <SectionText>
              Conectar pessoas aos melhores eventos do Brasil!
            </SectionText>
          </Section>

          <Separator />

          <Section>
            <SectionTitle>Contato de Suporte</SectionTitle>
            <ContactInfo>
              <ContactItem>
                <MdOutlineEmail />
                contato@portaleventos.com
              </ContactItem>

              <ContactItem>
                <CiClock1 /> 7:00h até 21h
              </ContactItem>
            </ContactInfo>
          </Section>
        </ContentWrapper>
      </FooterContainer>
      <CopyrightSection>
        © 2025 InscriON. Todos os direitos reservados.
        <br /> 
        Criado por: Time 2
      </CopyrightSection>
    </>
  );
};

export default Footer;
