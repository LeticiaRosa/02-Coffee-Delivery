import styled from 'styled-components'

export const ContainerCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0.5rem;
  padding: 0.65rem;
  color: ${(props) => props.theme.color.brandPurple};
  background-color: ${(props) => props.theme.color.baseButton};
  border-radius: 10%;
  :hover {
    color: ${(props) => props.theme.color.brandPurpleDark};
    cursor: pointer;
  }
`
