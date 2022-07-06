import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Characters = styled.section`
  min-height: 70vh;
  margin-top: -25vh;
  padding: 12rem 1.2rem;
  display: flex;
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.marvel_red};
`

export const TitleContainer = styled.div`
  display: flex;
`

export const Title = styled.h2`
  font-size: 2rem;
  letter-spacing: 1px;
  color: ${({theme}) => theme.colors.light};
  text-shadow: 
               -1px -1px 0px #202020, 
               -1px 1px 0px #202020,                    
                1px -1px 0px #202020,                  
                1px 0px 0px #202020;
`

export const GridCharacters = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(1, 1fr);
`