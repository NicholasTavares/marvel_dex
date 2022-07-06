import React from "react";
import CharacterCard from "../../components/CharacterCard";
import Header from "../../layout/header";
import { api } from "../../services/api";
import {
  Characters,
  GridCharacters,
  HomeContainer,
  Title,
  TitleContainer,
} from "./styles";

interface IItemsComics {
  name: string;
  resourceURI: string;
}

interface IComics {
  available: number;
  collectionURI: string;
  items: IItemsComics[];
}

interface IItemsEvents {
  name: string;
  resourceURI: string;
}

interface IEvents {
  available: number;
  collectionURI: string;
  items: IItemsEvents[];
}

interface IItemsSeries {
  name: string;
  resourceURI: string;
}

interface ISeries {
  available: number;
  collectionURI: string;
  items: IItemsSeries[];
}

interface IItemsStories {
  name: string;
  resourceURI: string;
  type: string;
}

interface IStories {
  available: number;
  collectionURI: string;
  items: IItemsStories[];
}

interface IURL {
  type: string;
  url: string;
}

interface ICharactersResponse {
  comics: IComics;
  description: string;
  events: IEvents;
  id: number;
  modified: string;
  name: string;
  resourceURI: string;
  series: ISeries;
  stories: IStories;
  thumbnail: {
    extension: string;
    path: string;
  };
  urls: IURL[];
}

const Home: React.FunctionComponent = () => {
  const [characters, setCharacters] = React.useState<ICharactersResponse[]>([]);

  React.useEffect(() => {
    async function getCharacters() {
      await api
        .get(`/characters`, {
          params: {
            orderBy: "name",
          },
        })
        .then((response) => setCharacters(response.data.data.results))
        .catch((err) => console.log(err));
    }

    getCharacters();
  }, []);

  return (
    <HomeContainer>
      <Header />
      <Characters>
        <TitleContainer>
          <Title>Characters</Title>
        </TitleContainer>
        <GridCharacters>
          {characters.length > 0 &&
            characters.map((character) => (
              <CharacterCard
                key={character.id}
                name={character.name}
                img_url={
                  character.thumbnail.path + "." + character.thumbnail.extension
                }
                series={character.series.items[0]?.name}
                comics={character.comics.items[0]?.name}
                series_count={character.series.available}
                comics_count={character.comics.available}
                stories_count={character.stories.available}
              />
            ))}
        </GridCharacters>
      </Characters>
    </HomeContainer>
  );
};

export default Home;
