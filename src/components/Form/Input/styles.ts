import { styled } from 'styled-components'

export const Container = styled.div<{ $error: boolean }>`
  display: flex;
  align-items: center;
  justify-items: center;
  width: 100%;
  position: relative;
  input {
    width: 100%;
    height: 42px;
    padding: 0.75rem;
    background-color: ${(props) => props.theme.color.baseInput};
    border: solid 1px
      ${(props) =>
        props.$error ? props.theme.color.red : props.theme.color.baseInput};
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
    position: absolute;
    top: 25%;
    right: 10px;
    transform: translateY(-50%);
    color: gray;
    font-size: 12px;
  }
  h6 {
    height: 14px;
    font-weight: 100;
    font-size: 0.7rem;
    color: red;
  }
`
