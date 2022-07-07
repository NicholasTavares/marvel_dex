import React from "react";
import CharacterCard from "../../components/CharacterCard";
import Pagination from "../../components/pagination";
import Header from "../../layout/header";
import { api } from "../../services/api";
import ICharactersResponse from "./interfaces";
import {
  Characters,
  GridCharacters,
  HomeContainer,
  Title,
  TitleContainer,
} from "./styles";

const Home: React.FunctionComponent = () => {
  const [characters, setCharacters] = React.useState<ICharactersResponse[]>([]);
  const [charactersCount, setCharactersCount] = React.useState(0);
  const [itemOffset, setItemOffset] = React.useState(0);
  const LIMIT = 10;

  React.useEffect(() => {
    async function getCharacters() {
      await api
        .get(`/characters`, {
          params: {
            orderBy: "name",
            limit: 10,
            offset: itemOffset,
          },
        })
        .then((response) => {
          setCharacters(response.data.data.results);
          setCharactersCount(response.data.data.total);
        })
        .catch((err) => console.log(err));
    }

    getCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemOffset]);

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
        {characters.length > 0 && (
          <Pagination
            initialResponse={characters}
            itemsPerPage={LIMIT}
            charactersCount={charactersCount}
            itemOffset={itemOffset}
            setItemOffset={setItemOffset}
          />
        )}
      </Characters>
    </HomeContainer>
  );
};

export default Home;
