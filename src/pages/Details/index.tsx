import React from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import {
  DetailsContainer,
  ImageBackground,
  InformatioContainer,
  InformationField,
  SubTitle,
  Title,
  TitleContainer,
} from "./styles";

interface ICharacter {
  name: string;
  id: number;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  };
  comics: {
    available: number;
  };
  series: {
    available: number;
  };
  stories: {
    available: number;
  };
}

const Details: React.FunctionComponent = () => {
  const [character, setCharacter] = React.useState<ICharacter>();
  const { id } = useParams();

  React.useEffect(() => {
    async function getInformation() {
      await api
        .get(`/characters/${id}`)
        .then((response) => {
          console.log(response.data.data.results[0]);
          setCharacter(response.data.data.results[0]);
        })
        .catch((err) => console.log(err));
    }
    getInformation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DetailsContainer>
      {character && (
        <>
          <TitleContainer>
            <Title>{character?.name}</Title>
            <SubTitle>#{id}</SubTitle>
          </TitleContainer>
          <ImageBackground
            url={
              character?.thumbnail.path + "." + character?.thumbnail.extension
            }
          />
          {character.description && (
            <InformatioContainer>{character.description}</InformatioContainer>
          )}
          <InformatioContainer>
            <InformationField>
              Comics count: {character.comics.available}
            </InformationField>
            <InformationField>
              Series count: {character.series.available}
            </InformationField>
            <InformationField>
              Stories count: {character.stories.available}
            </InformationField>
          </InformatioContainer>
        </>
      )}
    </DetailsContainer>
  );
};

export default Details;
