import React from "react";
import {
  Card,
  CardBack,
  CardFront,
  EventInformation,
  ContainerInformation,
  ContainerTitle,
  Title,
  LastUpdate,
} from "./styles";

interface IEvent {
  name: string;
  img_url: string;
  description: string;
  comics_count: number;
  characters_count: number;
  creators_count: number;
  last_update: number;
}

const EventCard: React.FunctionComponent<IEvent> = ({
  name,
  img_url,
  description,
  comics_count,
  characters_count,
  creators_count,
  last_update,
}) => {
  const date = new Date(last_update);
  return (
    <Card>
      <CardFront url={img_url}>
        <ContainerTitle>
          <Title>{name}</Title>
          <LastUpdate>{date.getMonth() + "/" + date.getFullYear()}</LastUpdate>
        </ContainerTitle>
        <ContainerInformation>
          <EventInformation>Comics count: ${comics_count}</EventInformation>
          <EventInformation>
            Characters count: ${characters_count}
          </EventInformation>
          <EventInformation>Creators count: ${creators_count}</EventInformation>
        </ContainerInformation>
      </CardFront>

      <CardBack url={img_url}>
        <ContainerTitle>
          <Title>More Information</Title>
        </ContainerTitle>
        <ContainerInformation>
          <EventInformation>Description: {description}</EventInformation>
        </ContainerInformation>
      </CardBack>
    </Card>
  );
};

export default EventCard;
