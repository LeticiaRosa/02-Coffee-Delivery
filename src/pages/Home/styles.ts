import styled from 'styled-components'

export const ContainerHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5.875rem;
  width: 100%;
  height: auto;
  img {
    width: 50%;
    max-width: 476px;
    height: auto;
  }
`

export const ContainerElements = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding-top: 4.125rem;
  div {
    display: flex;
    justify-content: start;
    align-items: center;
    :first-child {
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${(props) => props.theme.cor.baseWhite};
      border-radius: 100%;
    }
    h5 {
      padding-left: 0.29rem;
      font-size: ${(props) => props.theme.textSizes['text-regular-m']};
      font-family: ${(props) => props.theme.fonts.regular};
      font-weight: 100;
    }
  }
  :first-child :first-child {
    background-color: ${(props) => props.theme.cor.brandYellowDark};
  }
  :nth-child(2) :first-child {
    background-color: ${(props) => props.theme.cor.brandYellow};
  }
  :nth-child(3) :first-child {
    background-color: ${(props) => props.theme.cor.baseText};
  }
  :nth-child(4) :first-child {
    background-color: ${(props) => props.theme.cor.brandPurple};
  }
`

export const ContainerIcon = styled.div`
  width: 32px;
  height: 32px;
`

export const ContainerTextHome = styled.div`
  h1 {
    font-size: ${(props) => props.theme.textSizes['title-title-xl']};
    font-family: ${(props) => props.theme.fonts.title};
    font-weight: 800;
  }
  h3 {
    padding-top: 1rem;
    font-size: ${(props) => props.theme.textSizes['title-title-m']};
    font-family: ${(props) => props.theme.fonts.regular};
    font-weight: 100;
  }
`

export const ContainerInfo = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    :first-child {
      color: ${(props) => props.theme.cor.baseWhite};
      background-color: ${(props) => props.theme.cor.brandYellowDark};
    }
  }
`
