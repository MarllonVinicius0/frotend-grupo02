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
  Button,
  erroStyle,
} from "./style";
import Header from "../../components/Header";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [errors, setErrors] = useState({});

  function validarFormulario() {
    const novosErros = {};

    if (!email.trim()) {
      novosErros.email = "O e-mail é obrigatório.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      novosErros.email = "Formato de e-mail inválido.";
    }

    if (senha.length < 1) {
      novosErros.senha = "A senha é obrigatória.";
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
          <Title>Login</Title>
          <Subtitle>
            Não possui uma conta?{" "}
            <a href="/">Clique aqui para se cadastrar!</a>
          </Subtitle>

          <form onSubmit={handleSubmit} noValidate>
            <Label htmlFor="email">
             E-mail <span><span className="ast">*</span> Obrigatório</span>
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
              Senha <span><span className="ast">*</span> Obrigatório</span>
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

            <Button type="submit">Logar</Button>
          </form>
        </RightSide>
      </ContainerConteudo>
    </WrapperGeral>
  );
}