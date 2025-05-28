import React, { useState } from "react";
import {
  ContainerConteudo,
  LeftSide,
  RightSide,
  WrapperGeral,
  Title,
  Subtitle,
  Label,
  Input,
  CheckboxWrapper,
  Button,
  erroStyle,
} from "./style";
import Header from "../../components/Header"; // Assuming Header is a separate component

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [termosAceitos, setTermosAceitos] = useState(false);

  const [errors, setErrors] = useState({});

  function validarFormulario() {
    const novosErros = {};

    if (nome.trim().length < 4) {
      novosErros.nome = "O nome completo deve ter no mínimo 4 caracteres.";
    }

    if (!email.trim()) {
      novosErros.email = "O e-mail é obrigatório.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      novosErros.email = "Formato de e-mail inválido.";
    }

    if (senha.length < 8) {
      novosErros.senha = "A senha deve ter no mínimo 8 caracteres.";
    }

    if (!termosAceitos) {
      novosErros.termos = "Você deve aceitar os termos para continuar.";
    }

    setErrors(novosErros);
    return Object.keys(novosErros).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (validarFormulario()) {
      alert("Formulário válido! Pode enviar os dados para backend.");
      // enviar dados aqui
    }
  }

  return (
    <WrapperGeral>
      <Header />
      <ContainerConteudo>
        <LeftSide />
        <RightSide>
          <Title>Cadastre-se</Title>
          <Subtitle>
            Já possui uma conta?{" "}
            <a href="#login">Clique aqui para realizar login!</a>
          </Subtitle>

          <form onSubmit={handleSubmit} noValidate>
            <Label htmlFor="nome">
              Nome Completo <span>* Obrigatório</span>
            </Label>
            <Input
              id="nome"
              name="nome"
              type="text"
              placeholder="Digite aqui"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              aria-describedby="erro-nome"
            />
            <p id="erro-nome" style={erroStyle}>
              {
                errors.nome ||
                  "\u00A0" /* espaço não quebrável para ocupar o lugar */
              }
            </p>

            <Label htmlFor="email">
              E-mail <span>* Obrigatório</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Digite aqui"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-describedby="erro-email"
            />
            <p id="erro-email" style={erroStyle}>
              {errors.email || "\u00A0"}
            </p>

            <Label htmlFor="senha">
              Senha <span>* Obrigatório</span>
            </Label>
            <Input
              id="senha"
              name="senha"
              type="password"
              placeholder="Digite aqui"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              aria-describedby="erro-senha"
            />
            <p id="erro-senha" style={erroStyle}>
              {errors.senha || "\u00A0"}
            </p>

            <CheckboxWrapper>
              <input
                type="checkbox"
                id="termos"
                name="termos"
                checked={termosAceitos}
                onChange={(e) => setTermosAceitos(e.target.checked)}
                required
                aria-describedby="erro-termos"
              />
              <label htmlFor="termos">
                Concordo com os <a href="#termos">Termos de uso</a> e{" "}
                <a href="#politicas">políticas</a> do InscriON
              </label>
            </CheckboxWrapper>
            <p id="erro-termos" style={erroStyle}>
              {errors.termos || "\u00A0"}
            </p>

            <Button type="submit">Criar Conta</Button>
          </form>
        </RightSide>
      </ContainerConteudo>
    </WrapperGeral>
  );
}
