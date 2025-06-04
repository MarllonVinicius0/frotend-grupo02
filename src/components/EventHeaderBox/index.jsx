import React, { useState } from "react";
import { Space } from "antd";
import { CalendarOutlined, EnvironmentOutlined, UserOutlined, CheckOutlined } from "@ant-design/icons";
import {
  HeaderBox,
  Title,
  InfoRow,
  InfoItem,
  Highlight,
  RightContent,
  Wrapper,
  StyledTag,
  StyledText,
  StyledButton
} from "./style";

export default function EventHeaderBox({ isRegistered, participantCount, onRegistrationChange }) {

  return (
    <Wrapper>
      <HeaderBox>
        <div>
          <StyledTag>Tecnologia</StyledTag>
          <Title>Palestra da Educação 2025</Title>
          <InfoRow>
            <InfoItem>
              <Space align="center">
                <CalendarOutlined />
                <StyledText strong>16 de Setembro, 2025</StyledText>
              </Space>
            </InfoItem>
            <InfoItem>
              <Space align="center">
                <EnvironmentOutlined />
                <StyledText>Centro de Eventos, Fortaleza - CE</StyledText>
              </Space>
            </InfoItem>
          </InfoRow>
        </div>
        <RightContent>
          <div>
            <StyledText>
              <UserOutlined />
              Participantes
            </StyledText>
            <br />
            <Highlight>{participantCount} confirmados</Highlight>
          </div>
          <StyledButton 
            type="primary" 
            size="large"
            onClick={onRegistrationChange}
            $isRegistered={isRegistered}
          >
            {isRegistered ? (
              <>
                <CheckOutlined />
                Inscrito
              </>
            ) : (
              "Inscrever-se Agora"
            )}
          </StyledButton>
        </RightContent>
      </HeaderBox>
    </Wrapper>
  );
}