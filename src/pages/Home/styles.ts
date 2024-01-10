import styled from 'styled-components'

export const Container = styled.div`
  > p {
    padding-bottom: 2rem;
  }
`

export const ContainerHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5.875rem 0 5.875rem 0;
  width: 100%;
  height: auto;
  img {
    width: 50%;
    max-width: 476px;
    height: auto;
  }
  @media screen and (max-width: 1000px) {
    img {
      width: 40%;
    }
  }
  @media screen and (max-width: 760px) {
    img {
      display: none;
    }
  }
`

export const ContainerElements = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding-top: 4.125rem;
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`

export const ContainerIntro = styled.div``
