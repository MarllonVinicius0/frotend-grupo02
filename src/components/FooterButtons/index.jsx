import React from "react";
import { Container } from "./style";
import { Button, Popconfirm } from "antd";
import { useNavigate } from "react-router-dom";

export default function FooterButtons({ onPublicar }) {
  const navigate = useNavigate();

  const cancelar = () => {
    navigate("/admin/eventos");
  };

  return (
    <Container>
      <Popconfirm
        title="Tem certeza que deseja cancelar?"
        okText="Sim"
        cancelText="Não"
        onConfirm={cancelar}
      >
        <Button className="cancel-btn" size="large">
          Cancelar Evento
        </Button>
      </Popconfirm>

      <Button type="primary" className="publish-btn" size="large" onClick={onPublicar}>
        Publicar Evento
      </Button>
    </Container>
  );
}