import React from "react";
import CharacterCard from "../../components/CharacterCard";
import CreatorCard from "../../components/CreatorCard";
import EventCard from "../../components/EventCard";
import FormSearch from "../../components/Form";
import Pagination from "../../components/Pagination";
import Footer from "../../layout/footer";
import Header from "../../layout/header";
import { api } from "../../services/api";
import {
  ICharactersResponse,
  ICreatorsResponse,
  IEventsResponse,
  IParamsCharacters,
} from "./interfaces";
import {
  Characters,
  Creators,
  Events,
  Grid,
  HomeContainer,
  TitleCharacterSection,
  TitleCharacterSectionContainer,
  TitleCreatorsSectionContainer,
  TitleEventsSection,
  TitleEventsSectionContainer,
} from "./styles";

const Home: React.FunctionComponent = () => {
  const [characters, setCharacters] = React.useState<ICharactersResponse[]>([]);
  const [charactersCount, setCharactersCount] = React.useState<number>(0);
  const [events, setEvents] = React.useState<IEventsResponse[]>([]);
  const [creators, setCreators] = React.useState<ICreatorsResponse[]>([]);
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
            orderBy: "-modified",
          },
        })
        .then((response) => {
          setEvents(response.data.data.results);
        })
        .catch((err) => console.log(err));
      await api
        .get(`/creators`, {
          params: {
            limit: LIMIT,
            modifiedSince: "2022",
          },
        })
        .then((response) => {
          setCreators(response.data.data.results);
        })
        .catch((err) => console.log(err));
    }

    getCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemOffset, text]);

  return (
    <HomeContainer>
      <Header />
      <Events id="characters-section">
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
      <Characters id="events-section">
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
      <Creators id="creators-section">
        <TitleCreatorsSectionContainer>
          <TitleCharacterSection>Creators</TitleCharacterSection>
        </TitleCreatorsSectionContainer>
        <Grid>
          {creators.length > 0 &&
            creators.map((creator) => (
              <CreatorCard
                key={creator.id}
                fullName={creator.fullName}
                img_url={
                  creator.thumbnail.path + "." + creator.thumbnail.extension
                }
                comics_published={creator.comics.available}
                series_published={creator.series.available}
                stories_published={creator.stories.available}
              />
            ))}
        </Grid>
      </Creators>
      <Footer />
    </HomeContainer>
  );
};

export default Home;
