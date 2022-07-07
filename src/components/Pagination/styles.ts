import styled from "styled-components";

export const StyledPaginateContainer = styled.div`
  .pagination {
    color: ${({theme}) => theme.colors.light};
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0;
    font-size: 1.2rem;
    list-style-type: none;
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
  }

  .active-link > a {
    background-color: ${({theme}) => theme.colors.dark};
  }
`;