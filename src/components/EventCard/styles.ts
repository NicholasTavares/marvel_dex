import styled from "styled-components";

interface IBackground {
  url: string
}

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
`

export const Title = styled.h3`
  font-size: 1.6rem;
  letter-spacing: 1px;
  margin: 0.6rem;
  text-shadow: 
               -1px -1px 0px #202020, 
               -1px 1px 0px #202020,                    
                1px -1px 0px #202020,                  
                1px 0px 0px #202020;
  color: ${({theme}) => theme.colors.light};
`
export const LastUpdate = styled.h3`
  font-size: 1.6rem;
  margin: 0.6rem;
  letter-spacing: 1px;
  text-shadow: 
               -1px -1px 0px #202020, 
               -1px 1px 0px #202020,                    
                1px -1px 0px #202020,                  
                1px 0px 0px #202020;
  color: ${({theme}) => theme.colors.light};
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

export const EventInformation = styled.span`
  font-size: 1.1rem;
  color: ${({theme}) => theme.colors.dark};
`