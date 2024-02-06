import { styled } from 'styled-components'

export const ContainerButton = styled.div<{ method: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 0.75rem;
    padding: 1rem;
    width: 100%;
    background-color: ${(props) => props.theme.color.baseButton};
    border: transparent;
    border-radius: 10px;
    cursor: pointer;
    color: ${(props) => props.theme.color.brandPurple};
  }
  button:hover {
    background-color: ${(props) => props.theme.color.baseHover};
  }
  button:focus {
    background-color: ${(props) => props.theme.color.brandPurpleLight};
    border: solid 1px ${(props) => props.theme.color.brandPurple};
  }
  ${(props) =>
    `button#${props.method}{
    background-color: ${props.theme.color.brandPurpleLight};
    border: solid 1px ${props.theme.color.brandPurple}; 
    }
  `}
`
