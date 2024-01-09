import { styled } from 'styled-components'

export const BackgroundCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1.5rem;
  background-color: ${(props) => props.theme.color.baseCard};
  border-radius: 0 10% 0 10%;
  max-width: 16rem;
  max-height: 19rem;
`
export const Buy = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  gap: 0.25rem;
`

export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0.25rem;
`

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0.25rem;
  padding: 0.65rem;
  color: ${(props) => props.theme.color.brandPurple};
  background-color: ${(props) => props.theme.color.baseButton};
  border-radius: 10%;
`
