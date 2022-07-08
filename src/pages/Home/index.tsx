import React from "react";
import CharacterCard from "../../components/CharacterCard";
import EventCard from "../../components/EventCard";
import FormSearch from "../../components/Form";
import Pagination from "../../components/Pagination";
import Header from "../../layout/header";
import { api } from "../../services/api";
import {
  ICharactersResponse,
  IEventsResponse,
  IParamsCharacters,
} from "./interfaces";
import {
  Characters,
  Events,
  Grid,
  HomeContainer,
  TitleCharacterSection,
  TitleCharacterSectionContainer,
  TitleEventsSection,
  TitleEventsSectionContainer,
} from "./styles";

const Home: React.FunctionComponent = () => {
  const [characters, setCharacters] = React.useState<ICharactersResponse[]>([]);
  const [charactersCount, setCharactersCount] = React.useState<number>(0);
  const [events, setEventsCount] = React.useState<IEventsResponse[]>([]);
  const [itemOffset, setItemOffset] = React.useState<number>(0);
  const [text, setText] = React.useState<string>("");
  const LIMIT = 10;

  React.useEffect(() => {
    async function getCharacters() {
      const paramsCharacters: IParamsCharacters = {
        orderBy: "name",
        limit: LIMIT,
        offset: itemOffset,
      };
      if (text) {
        paramsCharacters.nameStartsWith = text;
      }
      await api
        .get(`/characters`, {
          params: paramsCharacters,
        })
        .then((response) => {
          setCharacters(response.data.data.results);
          setCharactersCount(response.data.data.total);
        })
        .catch((err) => console.log(err));
      await api
        .get(`/events`, {
          params: {
            limit: LIMIT,
          },
        })
        .then((response) => {
          console.log(response.data.data);
          setEventsCount(response.data.data.results);
        })
        .catch((err) => console.log(err));
    }

    getCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemOffset, text]);

  return (
    <HomeContainer>
      <Header />
      <Events id="characters-events">
        <TitleEventsSectionContainer>
          <TitleEventsSection>Last Events</TitleEventsSection>
        </TitleEventsSectionContainer>
        <Grid>
          {events.length > 0 &&
            events.map((event) => (
              <EventCard
                key={event.id}
                img_url={event.thumbnail.path + "." + event.thumbnail.extension}
                name={event.title}
                last_update={Date.parse(event.modified)}
                description={event.description}
                comics_count={event.comics.available}
                characters_count={event.characters.available}
                creators_count={event.creators.available}
              />
            ))}
        </Grid>
      </Events>
      <Characters id="characters-section">
        <TitleCharacterSectionContainer>
          <TitleCharacterSection>Characters</TitleCharacterSection>
        </TitleCharacterSectionContainer>
        <FormSearch setText={setText} />
        <Grid>
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
        </Grid>
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
