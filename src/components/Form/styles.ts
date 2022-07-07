import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  background-color: ${({theme}) => theme.colors.light};
  padding: 0.2rem;
`

export const SearchField = styled.input`
  padding: 0.5rem;
  outline: none;
  border: none;
  width: 85%;
  -webkit-appearance: none;
`

export const FormButton = styled.button`
  cursor: pointer;
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  outline: none;
  border: none;

  & > svg {
    transition: all 500ms;
    color: ${({theme}) => theme.colors.dark};
    font-size: 1.5rem;

    &:hover {
      color: ${({theme}) => theme.colors.marvel_red};
    }
  }
`