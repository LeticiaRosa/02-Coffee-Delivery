import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  nav {
    display: flex;
    gap: 0.5rem;
    div {
      p {
        padding-left: 5px;
        color: ${(props) => props.theme.cor.brandPurpleDark};
      }
      width: 10rem;
      height: 2.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${(props) => props.theme.cor.brandPurpleLight};
      border-radius: 8px;
      color: ${(props) => props.theme.cor.brandPurple};
    }
    a {
      width: 2.5rem;
      height: 2.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${(props) => props.theme.cor.brandYellowLight};
      border-radius: 8px;
      color: ${(props) => props.theme.cor.brandYellowDark};
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
    }
  }
`
