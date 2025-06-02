import styled from "styled-components";

export const ButtonWrapper = styled.button`
  display: block;
  margin: 3rem auto 4rem auto;
  padding: 1rem 3rem;
  background-color: #28a745;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: #218838;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(40, 167, 69, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  @media (max-width: 768px) {
    padding: 0.9rem 2.5rem;
    font-size: 0.95rem;
    margin: 2.5rem auto 3rem auto;
  }
`;