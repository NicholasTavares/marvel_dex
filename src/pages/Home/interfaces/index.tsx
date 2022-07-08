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

export interface ICharactersResponse {
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

export interface IParamsCharacters {
  orderBy: string;
  limit: number;
  offset: number;
  nameStartsWith?: string;
}

export interface IEventsResponse {
  characters: {
    available: number;
  };
  collectionURI: string;
  comics: {
    available: number;
  };
  creators: {
    available: number;
  };
  description: string;
  id: number;
  modified: string;
  thumbnail: {
    extension: string;
    path: string;
  };
  title: string;
}
