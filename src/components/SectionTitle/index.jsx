import React from "react";
import { Typography } from "antd";
import { StyledTitle } from "./style";

const { Title } = Typography;

export default function SectionTitle({ 
  children, 
  level = 2, 
  style = {},
  className = "",
  ...props 
}) {
  return (
    <StyledTitle 
      level={level}
      style={style}
      className={className}
      {...props}
    >
      {children}
    </StyledTitle>
  );
}