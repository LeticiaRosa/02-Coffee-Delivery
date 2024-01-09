import styled from 'styled-components'

export const HeaderContainer = styled.a`
  a {
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.color.brandYellowLight};
    border-radius: 8px;
    color: ${(props) => props.theme.color.brandYellowDark};
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
  }
`
