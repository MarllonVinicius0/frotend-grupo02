import React, { useState } from "react";
import { 
  PageWrapper,
  ContentRow
} from "./style";
import Header from "../../components/HeaderLoggedUser";
import VoltarLink from "../../components/VoltarLink";
import EventHeaderBox from "../../components/EventHeaderBox";
import EventDescription from "../../components/EventDescription";
import EventSidebarInfo from "../../components/EventSidebarInfo";

export default function EventDetailsPage() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [participantCount, setParticipantCount] = useState(847);

  const handleRegistration = () => {
    if (!isRegistered) {
      // Inscrever-se
      setIsRegistered(true);
      setParticipantCount(prev => prev + 1);
    } else {
      // Desinscrever-se
      setIsRegistered(false);
      setParticipantCount(prev => prev - 1);
    }
  };

  return (
    <PageWrapper>
      <Header />
      <VoltarLink to="/categoria/:id" />
      <EventHeaderBox 
        isRegistered={isRegistered}
        participantCount={participantCount}
        onRegistrationChange={handleRegistration}
      />
      <ContentRow>
        <EventDescription isRegistered={isRegistered} />
        <EventSidebarInfo 
          isRegistered={isRegistered}
          participantCount={participantCount}
          onRegistrationChange={handleRegistration}
        />
      </ContentRow>
    </PageWrapper>
  );
}