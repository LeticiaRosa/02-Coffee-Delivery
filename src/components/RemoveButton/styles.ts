import styled from 'styled-components'

export const ContainerRemoveButton = styled.button`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  justify-items: center;
  gap: 0.5rem;
  padding: 0.65rem;
  color: ${(props) => props.theme.color.brandPurple};
  background-color: ${(props) => props.theme.color.baseButton};
  border-radius: 10%;
  border: none;
  :hover {
    color: ${(props) => props.theme.color.brandPurpleDark};
    cursor: pointer;
  }

  @media screen and (max-width: 1200px) {
    :nth-child(2) {
      display: none;
    }
  }
`
