import styled from 'styled-components'

export const HeaderContainer = styled.div<{
  color: string
  radios: number
}>`
  display: flex;
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

  hover {
    background-color: ${(props) =>
      props.color === 'Orange'
        ? props.theme.color.brandYellow
        : props.theme.color.brandPurple};
  }
`

export const QtdItens = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    position: absolute;
    padding-left: 6px;
    padding-top: 2px;
    top: 52px;
    border-radius: 100%;
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.theme.color.brandYellow};
    text-decoration: none;
    font-weight: 600;
    color: ${(props) => props.theme.color.baseWhite};
    font-size: 14px;
  }
`
