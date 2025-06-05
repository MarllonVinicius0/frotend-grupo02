import React from "react";
import { Space } from "antd";
import { UserOutlined, TagOutlined } from "@ant-design/icons";
import {
  SidebarBox,
  StyledCard,
  StyledButton,
  InfoItem,
  StyledText,
  InfoLabel,
  InfoValue
} from "./style";

export default function EventSidebarInfo({ isRegistered, participantCount, onRegistrationChange }) {
  return (
    <SidebarBox>
      <StyledCard bordered={false}>
        <StyledButton 
          type="primary" 
          size="large" 
          block
          onClick={onRegistrationChange}
          $isRegistered={isRegistered}
        >
          {isRegistered ? "Desinscrever-se" : "Inscrever-se Agora"}
        </StyledButton>

        <InfoItem>
          <StyledText>
            {participantCount} pessoas já se inscreveram
          </StyledText>
        </InfoItem>

        <InfoItem>
          <Space direction="vertical" size={2} style={{ width: '100%' }}>
            <InfoLabel>
              Organizador:
            </InfoLabel>
            <InfoValue>
              <UserOutlined />
              Nome do Organizador
            </InfoValue>
          </Space>
        </InfoItem>

        <InfoItem>
          <Space direction="vertical" size={2} style={{ width: '100%' }}>
            <InfoLabel>
              Categoria:
            </InfoLabel>
            <InfoValue>
              <TagOutlined />
              Educação
            </InfoValue>
          </Space>
        </InfoItem>
      </StyledCard>
    </SidebarBox>
  );
}