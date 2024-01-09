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
        color: ${(props) => props.theme.color.brandPurpleDark};
      }
      width: 10rem;
      height: 2.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${(props) => props.theme.color.brandPurpleLight};
      border-radius: 8px;
      color: ${(props) => props.theme.color.brandPurple};
    }
  }
`
