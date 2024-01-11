import { styled } from 'styled-components'

export const BackgroundCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 1.5rem;
  margin: 1rem 0;
  background-color: ${(props) => props.theme.color.baseCard};
  border-radius: 0 10% 0 10%;
  max-width: 16rem;
  max-height: 19rem;
  text-align: center;
  img {
    position: relative;
    top: -20px;
  }
`

export const ContainerTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 4px;
  padding-bottom: 1rem;
`
export const Buy = styled.div`
  display: grid;
  grid-template-columns: 4fr 0.7fr 0.7fr;
  justify-items: center;
  align-items: center;
  gap: 0.5rem;
  padding: 2rem 0;
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
  gap: 0.5rem;
  padding: 0.65rem;
  color: ${(props) => props.theme.color.brandPurple};
  background-color: ${(props) => props.theme.color.baseButton};
  border-radius: 10%;
  :hover {
    color: ${(props) => props.theme.color.brandPurpleDark};
    cursor: pointer;
  }
`
