import styled from 'styled-components'

export const BackgroundCard = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  background-color: ${(props) => props.theme.color.baseCard};
  padding: 1rem 0;
  border-bottom: solid 1px ${(props) => props.theme.color.baseButton};
  gap: 1rem;
  img {
    width: 64px;
  }
`

export const Buy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
`

export const Price = styled.div`
  display: flex;
  flex-direction: row;

  gap: 0.25rem;
  p {
    font-weight: bold;
  }
`
