import React from "react";
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
          <Button onClick={onVerInscritos}>Ver Inscritos</Button>
          <Button type="primary" onClick={onEditar}>Editar</Button>
        </Actions>
      </Footer>
    </CardWrapper>
  );
}
