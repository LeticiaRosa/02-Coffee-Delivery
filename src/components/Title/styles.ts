import styled from 'styled-components'

export interface TextProps {
  size: 'title-title-xl' | 'title-title-l' | 'title-title-m' | 'title-title-s'
  fonts: 'regular' | 'title'
}

export const TextSize = styled.p<{ size: string; fonts: string }>`
  ${(props) => `
  font-size: ${props.theme.textSizes[props.size]};
  font-family: ${props.theme.fonts[props.fonts]};
  @media screen and (max-width: 767px) {
    font-size:  calc(${props.theme.textSizes[props.size]} - 2px); 
  }
  `};
`
