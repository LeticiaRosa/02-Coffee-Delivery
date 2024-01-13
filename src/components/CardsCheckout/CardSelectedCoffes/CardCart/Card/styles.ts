import styled from 'styled-components'

export const BackgroundCard = styled.div`
  display: flex;
  align-items: start;
  flex-direction: row;
  background-color: ${(props) => props.theme.color.baseCard};
  padding: 1rem 0;
  border-bottom: solid 1px ${(props) => props.theme.color.baseButton};
  gap: 1rem;
  img {
    width: 64px;
  }
  @media screen and (max-width: 1200px) {
    align-items: center;
  }
  @media screen and (max-width: 600px) {
    img {
      width: 34px;
    }
  }
  @media screen and (max-width: 500px) {
    img {
      display: none;
    }
  }
`
export const ContainerButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: row;
    justify-content: flex;
  }
`

export const Buy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  width: 100%;
  @media screen and (max-width: 1200px) {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const Price = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  p {
    font-weight: bold;
  }
`
