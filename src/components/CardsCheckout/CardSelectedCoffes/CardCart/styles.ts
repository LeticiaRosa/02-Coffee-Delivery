import styled from 'styled-components'

export const ContainerMenu = styled.div`
  display: inline;
`

export const ContainerCoffees = styled.div`
  padding-right: 0.5rem;
  overflow-y: auto;
  max-height: 350px;
  min-height: 350px;
  min-width: 350px;
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

  @media screen and (max-width: 700px) {
    max-width: 150px;
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

export const ContainerAlert = styled.div`
  padding-top: 2rem;
`
