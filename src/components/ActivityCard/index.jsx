import React from "react";
import { Button } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import {
  ActivityItem,
  ActivityTitle,
  ActivityActions,
  ActionButton
} from "./style";

export default function ActivityCard({ titulo, isSubscribed, onAdd, onRemove }) {
  return (
    <ActivityItem>
      <ActivityTitle>{titulo}</ActivityTitle>
      {isSubscribed && (
        <ActivityActions>
          <ActionButton 
            type="primary" 
            shape="circle" 
            icon={<MinusOutlined />}
            onClick={onRemove}
            $variant="remove"
          />
          <ActionButton 
            type="primary" 
            shape="circle" 
            icon={<PlusOutlined />}
            onClick={onAdd}
            $variant="add"
          />
        </ActivityActions>
      )}
    </ActivityItem>
  );
}