import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  :first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.color.baseWhite};
    border-radius: 100%;
  }
  p {
    padding-left: 0.75rem;
    font-size: ${(props) => props.theme.textSizes['text-regular-m']};
    font-family: ${(props) => props.theme.fonts.regular};
    font-weight: 100;
    @media screen and (max-width: 767px) {
      font-size: calc(
        ${(props) => props.theme.textSizes['text-regular-m']} - 2px
      );
    }
  }
`

export const ContainerIcon = styled.div<{ type: string; color: string }>`
  width: 32px;
  height: 32px;
  background-color: ${(props) => props.theme.color[props.color]}};
`
