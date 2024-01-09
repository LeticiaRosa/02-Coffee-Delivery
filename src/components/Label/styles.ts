import styled from 'styled-components'

export interface TextProps {
  size:
    | 'text-regular-l'
    | 'text-bold-l'
    | 'text-regular-m'
    | 'text-bold-m'
    | 'text-regular-s'
    | 'text-bold-s'
  fonts: 'regular'
}

export const TextSize = styled.p<{
  size: string
  fonts: string
  color: string
}>`
  ${(props) => `
  color: ${props.theme.color[props.color]};
  font-size: ${props.theme.textSizes[props.size]};
  font-family: ${props.theme.fonts[props.fonts]};
  @media screen and (max-width: 767px) {
    font-size:  calc(${props.theme.textSizes[props.size]} - 2px); 
  }
  `};
`
