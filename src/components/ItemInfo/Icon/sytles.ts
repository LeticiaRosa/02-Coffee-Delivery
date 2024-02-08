import styled from 'styled-components'

export const ContainerIcon = styled.div<{ type: string; color: string }>`
  width: 32px;
  height: 32px;
  background-color: ${(props) => props.theme.color[props.color]};
`
