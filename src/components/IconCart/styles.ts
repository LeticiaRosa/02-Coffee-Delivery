import styled from 'styled-components'

export const HeaderContainer = styled.a<{ color: string; radios: number }>`
  a {
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) =>
      props.color === 'Orange'
        ? props.theme.color.brandYellowLight
        : props.theme.color.brandPurpleDark};
    border-radius: ${(props) => props.radios}px;
    color: ${(props) =>
      props.color === 'Orange'
        ? props.theme.color.brandYellowDark
        : props.theme.color.baseWhite};
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
  }

  :hover {
    background-color: ${(props) =>
      props.color === 'Orange'
        ? props.theme.color.brandYellow
        : props.theme.color.brandPurple};
  }
`
