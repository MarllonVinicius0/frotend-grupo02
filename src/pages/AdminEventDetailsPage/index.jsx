import React from "react";
import { PageWrapper, ContentRow } from "./style";
import Header from "../../components/HeaderLoggedUser";
import VoltarLink from "../../components/VoltarLink";
import EventHeaderBox from "../../components/EventHeaderBox";
import EventDescription from "../../components/EventDescription";
import EventSidebarInfo from "../../components/EventSidebarInfo";

export default function AdminEventDetailsPage() {
  const isRegistered = true; // exibe como inscrito
  const participantCount = 847;

  return (
    <PageWrapper>
      <Header />
      <VoltarLink to="/myevents" />
      <EventHeaderBox
        isRegistered={isRegistered}
        participantCount={participantCount}
        onRegistrationChange={() => {}} // desabilita interação
      />
      <ContentRow>
        <EventDescription isRegistered={false} />
        <EventSidebarInfo
          isRegistered={isRegistered}
          participantCount={participantCount}
          onRegistrationChange={() => {}} // desabilita interação
        />
      </ContentRow>
    </PageWrapper>
  );
}
