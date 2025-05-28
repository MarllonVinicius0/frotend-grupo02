// src/pages/Cadastro.jsx
import { Form, Input, Button, Checkbox, Typography } from "antd";
import "./style.css";
import Header from "../../components/Header";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const { Title, Text, Link } = Typography;

export default function Cadastro() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    console.log("Valores do formulário:", values);
    message.loading({ content: "Enviando dados...", key: "cadastro" });

    // simula tempo de resposta
    setTimeout(() => {
      message.success({
        content: "Conta criada com sucesso!",
        key: "cadastro",
        duration: 2,
      });
      form.resetFields();
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="cadastro-wrapper">
      <Header />
      <div className="cadastro-content">
        <div className="imagem-lado" />
        <div className="form-lado">
          <Title>Cadastre-se</Title>
          <Text>
            Já possui uma conta?{" "}
            <Link href="/login">Clique aqui para realizar login!</Link>
          </Text>

          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item
              name="nome"
              label="Nome Completo"
              rules={[
                { required: true, message: "Campo obrigatório" },
                { min: 4, message: "O nome deve ter pelo menos 4 caracteres" },
              ]}
            >
              <Input placeholder="Digite aqui" />
            </Form.Item>

            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                { required: true, message: "Campo obrigatório" },
                { type: "email", message: "E-mail inválido" },
              ]}
            >
              <Input placeholder="Digite aqui" />
            </Form.Item>

            <Form.Item
              name="senha"
              label="Senha"
              rules={[
                { required: true, message: "Campo obrigatório" },
                { min: 8, message: "A senha deve ter pelo menos 8 caracteres" },
              ]}
            >
              <Input.Password placeholder="Digite aqui" />
            </Form.Item>

            <Form.Item
              name="termos"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject("Você deve aceitar os termos"),
                },
              ]}
            >
              <Checkbox>
                Concordo com os <Link>Termos de uso</Link> e{" "}
                <Link>políticas</Link> do InscriON
              </Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Criar Conta
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
