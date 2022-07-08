import styled, { keyframes } from "styled-components";
import {Link} from "react-router-dom";

interface IBackground {
  url: string
}

// ANIMATION
const UpDown = keyframes`  
  from { transform: translateY(-10%); }
  to { transform: translateY(10%); }
`;

export const Card = styled.div`
  cursor: pointer;
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  height: 15rem;
  width: 100%;
`

export const CardFront = styled.div<IBackground>`
  box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 20%);
  background-image: url(${(props) => props.url});
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-size: cover;
  background-position-y: 32%;
  background-position-x: 10%;

  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  transition: all .8s ease;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  overflow: hidden;

  ${Card}:hover & {
    transform: rotateY(-180deg);
  }
`

export const CardBack = styled.div<IBackground>`
  box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 20%);
  background-image: url(${(props) => props.url});
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-position-y: 32%;
  background-position-x: 10%;
  background-size: cover;
  filter: grayscale(100%);
  background-blend-mode: saturation;

  height: 100%;
  width: 100%;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  transition: all .8s ease;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  overflow: hidden;

  ${Card}:hover & {
    transform: rotateY(0);
  }
`

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.8rem;
`

export const Title = styled.h3`
  font-size: 1.6rem;
  letter-spacing: 1px;
  margin: 0;
  padding: 0;
  text-shadow: 
               -1px -1px 0px #202020, 
               -1px 1px 0px #202020,                    
                1px -1px 0px #202020,                  
                1px 0px 0px #202020;
  color: ${({theme}) => theme.colors.light};
`

export const DetailLink = styled(Link)`
  cursor: pointer;
  height: 2rem;
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.light};
  border: 1px solid ${({theme}) => theme.colors.dark};
  border-radius: 50%;
  animation-name: ${UpDown};
  animation-duration: 1.5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;

  &:hover > svg {
    color: ${({theme}) => theme.colors.marvel_red};
  }

  & > svg {
    font-size: 1.5rem;
  }
`

export const ContainerInformation = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.2rem;
  background-color: ${({theme}) => theme.colors.light};
  margin: 0rem 0.8rem 0.4rem 0.8rem;
  border: 1px solid gray;
  border-radius: 0.2rem;
  
`

export const CharacterInformation = styled.span`
  font-size: 1.1rem;
  color: ${({theme}) => theme.colors.dark};
`