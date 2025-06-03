import styled from "styled-components";
import { Button } from "antd";

export const StyledButton = styled(Button)`
  &.ant-btn-primary {
    background-color: #28a745;
    border-color: #28a745;
    border-radius: 8px;
    padding: 8px 48px;
    height: auto;
    font-size: 1rem;
    font-weight: 600;
    box-shadow: 0 2px 4px rgba(40, 167, 69, 0.2);
    transition: all 0.3s ease;

    &:hover, &:focus {
      background-color: #218838;
      border-color: #218838;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(40, 167, 69, 0.3);
    }

    &:active {
      transform: translateY(0);
    }

    &.ant-btn-loading {
      transform: none;
      box-shadow: 0 2px 4px rgba(40, 167, 69, 0.2);
    }

    &[disabled] {
      background-color: #6c757d;
      border-color: #6c757d;
      transform: none;
      box-shadow: none;
      
      &:hover {
        background-color: #6c757d;
        border-color: #6c757d;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 6px 40px;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 6px 32px;
    font-size: 0.9rem;
    width: 100%;
    max-width: 280px;
  }
`;