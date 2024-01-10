import { styled } from 'styled-components'

export const Tag = styled.a`
  display: flex;
  text-transform: uppercase;
  background-color: ${(props) => props.theme.color.brandYellowLight};
  font-size: ${(props) => props.theme.textSizes['components-tag']};
  color: ${(props) => props.theme.color.brandYellowDark};
  font-weight: bold;
  padding: 0 0.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 3px solid transparent;
`
