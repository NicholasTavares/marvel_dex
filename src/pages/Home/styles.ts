import styled from "styled-components";
import media from "styled-media-query";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`

export const Grid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(1, 1fr);

  ${media.greaterThan("medium")`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${media.greaterThan("large")`
    grid-template-columns: repeat(3, 1fr);
  `}
`

// EVENTS SECTION
export const Events = styled.section`
  min-height: 70vh;
  margin-top: -25vh;
  padding: 13rem 1.2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.marvel_blue};
  transition: all 500ms;

  ${media.greaterThan("medium")`
    min-height: 90vh;
    margin-top: -35vh;
    padding: 15rem 1.2rem;
  `}

  ${media.greaterThan("large")`
    min-height: 80vh;
    padding: 19rem 1.2rem;
  `}
`

export const TitleEventsSectionContainer = styled.div`
  display: flex;
`

export const TitleEventsSection = styled.h2`
  font-size: 2rem;
  letter-spacing: 1px;
  color: ${({theme}) => theme.colors.light};
  text-shadow: 
               -1px -1px 0px #202020, 
               -1px 1px 0px #202020,                    
                1px -1px 0px #202020,                  
                1px 0px 0px #202020;

  ${media.greaterThan("medium")`
    font-size: 2.5rem;
  `}

  ${media.greaterThan("large")`
    font-size: 3rem;
  `}
`

// CHARACTERS SECTION
export const Characters = styled.section`
  min-height: 70vh;
  margin-top: -20vh;
  -webkit-transform: skewY(-7deg);
  transform: skewY(20deg);
  padding: 6rem 1.2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.marvel_red};

  & > * {
        transform: skewY(-20deg);

        ${media.greaterThan("medium")`
          transform: skewY(-10deg);
        `}

        ${media.greaterThan("large")`
          transform: skewY(-5deg);
        `}
    }

  ${media.greaterThan("medium")`
    min-height: 80vh;
    margin-top: -30vh;
    transform: skewY(10deg);
  `}

  ${media.greaterThan("large")`
    min-height: 90vh;
    margin-top: -30vh;
    transform: skewY(5deg);
  `}
`

export const TitleCharacterSectionContainer = styled.div`
  display: flex;
`

export const TitleCharacterSection = styled.h2`
  font-size: 2rem;
  letter-spacing: 1px;
  color: ${({theme}) => theme.colors.light};
  text-shadow: 
               -1px -1px 0px #202020, 
               -1px 1px 0px #202020,                    
                1px -1px 0px #202020,                  
                1px 0px 0px #202020;

  ${media.greaterThan("medium")`
    font-size: 2.5rem;
  `}

  ${media.greaterThan("large")`
    font-size: 3rem;
  `}
`

// CREATORS SECTION
export const Creators = styled.section`
  min-height: 70vh;
  margin-top: -20vh;
  padding: 13rem 1.2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.marvel_orange};

  ${media.greaterThan("medium")`
    min-height: 80vh;
    padding: 15rem 1.2rem;
    margin-top: -30vh;
  `}

  ${media.greaterThan("large")`
    min-height: 90vh;
    padding: 19rem 1.2rem;
  `}

`

export const TitleCreatorsSectionContainer = styled.div`
  display: flex;
`

export const TitleCreatorsSection = styled.h2`
  font-size: 2rem;
  letter-spacing: 1px;
  color: ${({theme}) => theme.colors.light};
  text-shadow: 
               -1px -1px 0px #202020, 
               -1px 1px 0px #202020,                    
                1px -1px 0px #202020,                  
                1px 0px 0px #202020;
  
  ${media.greaterThan("medium")`
    font-size: 2.5rem;
  `}

  ${media.greaterThan("large")`
    font-size: 3rem;
  `}
`