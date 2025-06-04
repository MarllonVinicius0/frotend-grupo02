import React, { useState, useContext } from "react";
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
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errors, setErrors] = useState({});

  const { login, loading, error } = useContext(AuthContext);
  const navigate = useNavigate();

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

  async function handleSubmit(event) {
    event.preventDefault();

    if (validarFormulario()) {
      await login({ email, senha }); // simulado por enquanto
      navigate("/home-usuario"); // redireciona após login
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
            <a href="/cadastro">Clique aqui para se cadastrar!</a>
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

            <Button type="submit" disabled={loading}>
              {loading ? "Entrando..." : "Logar"}
            </Button>

            {error && (
              <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
            )}
          </form>
        </RightSide>
      </ContainerConteudo>
    </WrapperGeral>
  );
}
