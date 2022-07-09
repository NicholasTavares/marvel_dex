import styled from "styled-components";
import media from "styled-media-query";

interface IBackground {
  url: string
}

export const DetailsContainer = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  border: 1rem solid ${({theme}) => theme.colors.marvel_red};
  padding: 1rem;
  background-color: ${({theme}) => theme.colors.dark};
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

export const Title = styled.span`
  font-size: 2rem;
  letter-spacing: 1px;
  color: ${({theme}) => theme.colors.light};

  ${media.greaterThan("medium")`
    font-size: 2.5rem;
  `}

  ${media.greaterThan("large")`
    font-size: 3rem;
  `}
`
export const SubTitle = styled.span`
  font-size: 1.5rem;
  letter-spacing: 1px;
  color: ${({theme}) => theme.colors.marvel_orange};

  ${media.greaterThan("medium")`
    font-size: 2rem;
  `}

  ${media.greaterThan("large")`
    font-size: 2.5rem;
  `}
`

export const ImageBackground = styled.div<IBackground>`
  box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 20%);
  background-image: url(${(props) => props.url});
  -moz-background-size: cover;
  border-radius: 0.2rem;
  -webkit-background-size: cover;
  background-size: cover;
  background-position-y: 32%;
  background-position-x: 10%;
  height: 15rem;
  backface-visibility: hidden;
  overflow: hidden;
  margin-bottom: 1rem;
`

export const InformatioContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  border-radius: 0.2rem;
  background-color: ${({theme}) => theme.colors.light};
  padding: 0.5rem;
  margin-bottom: 1rem;
`

export const InformationField = styled.span`

`