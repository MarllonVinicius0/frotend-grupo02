import React from "react";
import { 
  PageWrapper,
  ContentRow
} from "./style";
import Header from "../../components/HeaderPages";
import VoltarLink from "../../components/VoltarLink";
import EventHeaderBox from "../../components/EventHeaderBox";
import EventDescription from "../../components/EventDescription";
import EventSidebarInfo from "../../components/EventSidebarInfo";

export default function EventDetailsPage() {
  return (
    <PageWrapper>
      <Header />
      <VoltarLink to="/eventos" />
      <EventHeaderBox />
      <ContentRow>
        <EventDescription />
        <EventSidebarInfo />
      </ContentRow>
    </PageWrapper>
  );
}