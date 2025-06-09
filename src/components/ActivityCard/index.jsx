import React from "react";
import { Button } from "antd";
import { PlusOutlined, MinusOutlined, ClockCircleOutlined, CalendarOutlined } from "@ant-design/icons";
import {
  ActivityItem,
  ActivityContent,
  ActivityTitle,
  ActivityInfo,
  InfoItem,
  ActivityActions,
  ActionButton
} from "./style";

export default function ActivityCard({ titulo, horario, data, isSubscribed, onAdd, onRemove, selectedCount = 0 }) {
  const isSelected = selectedCount > 0;

  return (
    <ActivityItem>
      <ActivityContent>
        <ActivityTitle>{titulo}</ActivityTitle>
        <ActivityInfo>
          <InfoItem>
            <ClockCircleOutlined />
            <span>{horario}</span>
          </InfoItem>
          <InfoItem>
            <CalendarOutlined />
            <span>{data}</span>
          </InfoItem>
        </ActivityInfo>
      </ActivityContent>
      {isSubscribed && (
        <ActivityActions>
          <ActionButton 
            type="primary" 
            shape="square" 
            icon={<MinusOutlined />}
            onClick={onRemove}
            $variant="remove"
          />
          <ActionButton 
            type="primary" 
            shape="square" 
            icon={<PlusOutlined />}
            onClick={onAdd}
            $variant="add"
            $isSelected={isSelected}
          />
        </ActivityActions>
      )}
    </ActivityItem>
  );
}