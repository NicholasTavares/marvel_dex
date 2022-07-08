import styled from "styled-components";
import media from "styled-media-query";

export const FooterContainer = styled.footer`
  height: 10rem;
  background-color: ${({theme}) => theme.colors.dark};
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const FooterCopyrightContainer = styled.div`
  background-color: ${({theme}) => theme.colors.dark_light};
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FooterCopyright = styled.span`
  display: inline-block;
  font-size: 1rem;
  color: ${({theme}) => theme.colors.light};
  
  ${media.greaterThan("medium")`
    font-size: 1.3rem;
  `}
`

export const MarvelLink = styled.a`
  font-weight: bold;
  color: ${({theme}) => theme.colors.marvel_red};;
`