import styled from 'styled-components'

export const ContainerMenu = styled.div`
  display: inline;
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
  display: flex;
  align-items: center;
  justify-content: center;
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
