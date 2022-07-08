import styled from "styled-components";
import media from "styled-media-query";

export const StyledPaginateContainer = styled.div`
  .pagination {
    color: ${({theme}) => theme.colors.light};
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0;
    font-size: 1.2rem;
    list-style-type: none;

    ${media.greaterThan("medium")`
      width: 22rem;
      margin-top: 3rem;
      margin-left: auto;
      margin-right: auto;
    `}
  }

  .page-button{
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;

    ${media.greaterThan("medium")`
      height: 2.2rem;
      width: 2.2rem;
    `}
  }
  .prev-button > a{
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.2rem;
    width: 2.2rem;
    border-radius: 50%;
    color: ${({theme}) => theme.colors.dark};
    background-color: ${({theme}) => theme.colors.light};

    ${media.greaterThan("medium")`
      height: 2.4rem;
      width: 2.4rem;
    `}
  }

  .next-button > a{
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.2rem;
    width: 2.2rem;
    border-radius: 50%;
    color: ${({theme}) => theme.colors.dark};
    background-color: ${({theme}) => theme.colors.light};

    ${media.greaterThan("medium")`
      height: 2.4rem;
      width: 2.4rem;
    `}
  }

  .active-link > a {
    background-color: ${({theme}) => theme.colors.dark};
  }
`;