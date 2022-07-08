import React from "react";
import {
  Card,
  CardFront,
  CreatorInformation,
  ContainerInformation,
  ContainerTitle,
  Title,
} from "./styles";

interface ICreator {
  fullName: string;
  img_url: string;
  comics_published: number;
  series_published: number;
  stories_published: number;
}

const CreatorCard: React.FunctionComponent<ICreator> = ({
  fullName,
  img_url,
  comics_published,
  series_published,
  stories_published,
}) => {
  return (
    <Card>
      <CardFront url={img_url}>
        <ContainerTitle>
          <Title>{fullName}</Title>
        </ContainerTitle>
        <ContainerInformation>
          <CreatorInformation>
            Published comics: {comics_published}
          </CreatorInformation>
          <CreatorInformation>
            Published series: {series_published}
          </CreatorInformation>
          <CreatorInformation>
            Published stories: {stories_published}
          </CreatorInformation>
        </ContainerInformation>
      </CardFront>
    </Card>
  );
};

export default CreatorCard;
