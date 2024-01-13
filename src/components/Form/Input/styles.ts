import { styled } from 'styled-components'

export const Container = styled.div`
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-items: center;
  width: 100%;
  input {
    width: 100%;
    height: 42px;
    padding: 0.75rem;
    background-color: ${(props) => props.theme.color.baseInput};
    border: solid 1px ${(props) => props.theme.color.baseButton};
    border-radius: 5px;
    color: ${(props) => props.theme.color.baseLabel};
  }
  input:hover {
    border: solid 1px ${(props) => props.theme.color.brandYellowDark};
    transition: border 0.5s;
  }

  input:focus {
    outline: none;
    border: solid 1px ${(props) => props.theme.color.brandYellowDark};
    transition: border 0.3s;
    + span {
      display: none;
    }
    color: ${(props) => props.theme.color.baseText};
  }
  input:focus::placeholder {
    opacity: 0;
    transition: opacity 0.3s;
  }

  input:not(:focus)::placeholder {
    opacity: 1;
    transition: opacity 0.3s;
  }
  span {
    position: relative;
    left: -60px;
    font-size: 12px;
    font-style: italic;
    width: 0;
  }
`
