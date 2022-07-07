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

export default interface ICharactersResponse {
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
