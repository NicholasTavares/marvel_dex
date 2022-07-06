import React from "react";
import {
  Card,
  CardBack,
  CardFront,
  CharacterInformation,
  ContainerInformation,
  ContainerTitle,
  Title,
} from "./styles";

interface ICharacter {
  name: string;
  img_url: string;
  series: string;
  comics: string;
  series_count: number;
  comics_count: number;
  stories_count: number;
}

const CharacterCard: React.FunctionComponent<ICharacter> = ({
  name,
  img_url,
  series,
  comics,
  series_count,
  comics_count,
  stories_count,
}) => {
  return (
    <Card>
      <CardFront url={img_url}>
        <ContainerTitle>
          <Title>{name}</Title>
        </ContainerTitle>
        <ContainerInformation>
          <CharacterInformation>Series: {series}</CharacterInformation>
          <CharacterInformation>Comics: {comics}</CharacterInformation>
        </ContainerInformation>
      </CardFront>

      <CardBack url={img_url}>
        <ContainerTitle>
          <Title>More Information</Title>
        </ContainerTitle>
        <ContainerInformation>
          <CharacterInformation>
            Series participation: {series_count}
          </CharacterInformation>
          <CharacterInformation>
            Comics participation: {comics_count}
          </CharacterInformation>
          <CharacterInformation>
            Stories participation: {stories_count}
          </CharacterInformation>
        </ContainerInformation>
      </CardBack>
    </Card>
  );
};

export default CharacterCard;
