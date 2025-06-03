import React from "react";
import { Button } from "antd";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";
import { StyledButton } from "./style";

export default function VerMaisButton({ 
  onClick, 
  disabled = false, 
  loading = false,
  children = "Ver Mais Eventos",
  type = "primary",
  size = "large",
  icon,
  ...props 
}) {
  const getIcon = () => {
    if (loading) return <LoadingOutlined />;
    if (icon) return icon;
    return <PlusOutlined />;
  };

  return (
    <StyledButton
      type={type}
      size={size}
      icon={!loading && getIcon()}
      onClick={onClick}
      disabled={disabled}
      loading={loading}
      {...props}
    >
      {loading ? "Carregando..." : children}
    </StyledButton>
  );
}