import styled from 'styled-components'

export const HeaderContainer = styled.div<{
  color: string
  radios: number
}>`
  display: flex;
  > div {
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
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
  div:hover {
    background-color: ${(props) =>
      props.color === 'Orange'
        ? props.theme.color.brandYellow
        : props.theme.color.brandPurple};
  }
`
