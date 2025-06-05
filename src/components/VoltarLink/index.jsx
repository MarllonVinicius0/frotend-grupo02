import React from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { VoltarWrapper, StyledButton } from "./style";

export default function VoltarLink({ to = "/", children = "Voltar" }) {
  return (
    <VoltarWrapper to={to}>
      <StyledButton 
        type="link" 
        icon={<ArrowLeftOutlined />}
      >
        {children}
      </StyledButton>
    </VoltarWrapper>
  );
}