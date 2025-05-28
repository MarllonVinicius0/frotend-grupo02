import styled from "styled-components";
import bgCadastro from "../../assets/bgCadastro.png";

export const WrapperGeral = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;
`;

export const ContainerConteudo = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftSide = styled.div`
  width: 60%;
  min-width: 400px;
  background-color: #2a83d9;
  background-image: url(${bgCadastro});
  background-size: cover;
  background-position: center;
  box-sizing: border-box;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const RightSide = styled.div`
  flex: 1;
  background: #fff;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  max-width: 500px;
  margin: auto;

  @media (max-width: 768px) {
    width: 100%;
    max-width: unset;
    padding: 1.5rem;
  }
`;

/* Os demais estilos permanecem iguais */

export const Title = styled.h1`
  font-weight: 800;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-size: 0.9rem;
  margin-bottom: 2rem;
  color: #333;
  text-align: center;
  a {
    color: #2a83d9;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 0.85rem;
  margin-bottom: 0.25rem;
  display: block;

  span {
    font-weight: 400;
    font-style: italic;
    font-size: 0.75rem;
    color: #666;
    margin-left: 0.25rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.6rem 0.8rem;
  font-size: 0.9rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1.5rem;
  outline-offset: 2px;

  &:focus {
    border-color: #2a83d9;
    outline: none;
    box-shadow: 0 0 3px #2a83d9;
  }
`;

export const CheckboxWrapper = styled.div`
  font-size: 0.85rem;
  margin-bottom: 2rem;
  color: #444;
  display: flex;
  align-items: center;

  input {
    margin-right: 0.5rem;
  }

  a {
    color: #2a83d9;
    text-decoration: none;
    margin: 0 0.25rem;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Button = styled.button`
  background-color: #2a83d9;
  color: white;
  width: 100%;
  height: auto;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 0.85rem 0;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.25s;

  &:hover {
    background-color: #1e5bb8;
  }
`;
export const erroStyle = {
  color: "red",
  marginTop: "-1rem",
  marginBottom: "1rem",
  fontSize: "0.85rem",
  minHeight: "1.2rem",
};
