import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "antd";

export const VoltarWrapper = styled(Link)`
  display: inline-block;
  margin: 1rem 2rem;
  text-decoration: none;
`;

export const StyledButton = styled(Button)`
  &.ant-btn-link {
    color: #40A7E3 !important;
    font-size: 0.95rem;
    font-weight: 600;
    padding: 0;
    height: auto;
    
    &:hover {
      color: #1e5bb8 !important;
      text-decoration: none;
    }

    &:focus {
      color: #40A7E3 !important;
    }

    .anticon {
      margin-right: 4px;
    }
  }
`;