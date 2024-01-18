import styled from 'styled-components'

export const ContainerMenu = styled.div`
  display: inline;
`

export const ContainerCoffees = styled.div`
  padding-right: 0.5rem;
  overflow-y: scroll;
  max-height: 300px;

  /* Para navegadores WebKit (Chrome, Safari) */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.color.baseLabel};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.color.baseHover};
  }
`

export const ContainerInfos = styled.div`
  margin: 0;
  padding-top: 1rem;
  div {
    display: flex;
    padding: 0.55rem 0;
    justify-content: space-between;
  }
`
export const ContainerButton = styled.div`
  padding: 1rem 0;
  button {
    padding: 1rem;
    width: 100%;
    color: ${(props) => props.theme.color.baseWhite};
    background-color: ${(props) => props.theme.color.brandYellow};
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
`
