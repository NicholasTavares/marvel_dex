import styled from "styled-components";
import media from "styled-media-query";

export const HeaderContainer = styled.header`
  height: 70vh;
  padding: 1.2rem;
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.dark};
  position: relative;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 55vh, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 55vh, 0 100%);
  transition: all 500ms;

  ${media.greaterThan("medium")`
    height: 80vh;
  `}
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: left;
  margin-bottom: 1rem;
`

export const Logo = styled.img`
  width: 5rem;
  margin-right: 1rem;

  ${media.greaterThan("medium")`
    width: 6rem;
    margin-right: 2rem;
  `}
`

export const OptionsContainer = styled.nav`
  display: flex;
  align-items: center;
`

export const Option = styled.a`
  cursor: pointer;
  flex-direction: column;
  justify-content: left;
  text-decoration: none;

  &:not(:last-child){
    margin-right: 1rem;

    ${media.greaterThan("medium")`
      margin-right: 2rem;
    `}
  }
`

export const TextOption = styled.span`
  color: ${({theme}) => theme.colors.light};
  font-size: 1.4rem;

  ${media.greaterThan("medium")`
    font-size: 1.7rem;
  `}
`

export const UndelineDecorationRed = styled.div`
  transition: width 500ms;
  width: 1rem;
  height: 0.2rem;
  background-color: ${({theme}) => theme.colors.marvel_red};

  ${media.greaterThan("medium")`
    width: 1.5rem;
  `}

  ${Option}:hover & {
    width: 100%;
  }
`

export const UndelineDecorationBlue = styled.div`
  transition: width 500ms;
  width: 1rem;
  height: 0.2rem;
  background-color: ${({theme}) => theme.colors.marvel_blue};

  ${media.greaterThan("medium")`
    width: 1.5rem;
  `}

  ${Option}:hover & {
    width: 100%;
  }
`

export const UndelineDecorationOrange = styled.div`
  transition: width 500ms;
  width: 1rem;
  height: 0.2rem;
  background-color: ${({theme}) => theme.colors.marvel_orange};

  ${media.greaterThan("medium")`
    width: 1.5rem;
  `}

  ${Option}:hover & {
    width: 100%;
  }
`

export const TextContainer = styled.div`
  display: flex;
`
export const TextContent = styled.h1`
  font-size: 2.5rem;
  text-shadow: 
               -1px -1px 0px #202020, 
               -1px 1px 0px #202020,                    
                1px -1px 0px #202020,                  
                1px 0px 0px #202020;
  color: ${({theme}) => theme.colors.light};

  ${media.greaterThan("medium")`
    font-size: 3rem;
  `}
`
export const AnimationContainer = styled.div`
  //TODO: implementar animação
  width: 8rem;

  ${media.greaterThan("medium")`
    width: 20rem;
  `}
`
