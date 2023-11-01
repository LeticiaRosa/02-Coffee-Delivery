import styled from 'styled-components'

export const ContainerHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
  div {
    padding-right: 10rem;
    h1 {
      font-size: ${(props) => props.theme.textSizes['title-title-xl']};
      font-family: ${(props) => props.theme.fonts.title};
      font-weight: 800;
    }
  }
`
