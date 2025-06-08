import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CardWrapper,
  Header,
  Title,
  TagStyled,
  DescriptionList,
  InfoRow,
  InfoText,
  Footer,
  Location,
  Actions,
  VagasTexto
} from "./style";
import { Button } from "antd";
import { CalendarOutlined, EnvironmentOutlined } from "@ant-design/icons";

export default function ActivityCardAdmin({
  titulo,
  descricao,
  dataInicio,
  dataFim,
  vagasOcupadas,
  vagasTotais,
  localizacao,
  onEditar,
  onVerInscritos
}) {
  const navigate = useNavigate();

  const handleVerInscritos = () => {
    navigate('/listaInscritos');
  };

  const handleEditar = () => {
    navigate('/editEvent');
  };

  return (
    <CardWrapper>
      <Header>
        <Title>{titulo}</Title>
        <TagStyled>Atividade</TagStyled>
      </Header>

      <DescriptionList>
        {descricao?.map((linha, i) => (
          <li key={i}>{linha}</li>
        ))}
      </DescriptionList>

      <InfoRow>
        <InfoText>
          <CalendarOutlined /> {dataInicio} - {dataFim}
        </InfoText>
        <InfoText>
            Vagas: <VagasTexto ocupadas={vagasOcupadas} total={vagasTotais}>
                {vagasOcupadas}/{vagasTotais}
            </VagasTexto>
        </InfoText>
      </InfoRow>

      <Footer>
        <Location>
          <EnvironmentOutlined /> {localizacao}
        </Location>
        <Actions>
          <Button onClick={handleVerInscritos}>Ver Inscritos</Button>
          <Button type="primary" onClick={handleEditar}>Editar</Button>
        </Actions>
      </Footer>
    </CardWrapper>
  );
}