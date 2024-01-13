import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  justify-items: start;
  gap: 1rem;
  color: ${(props) => props.theme.color.brandPurple};
  > div {
    padding-bottom: 2rem;
  }
`
export const Container = styled.div`
  display: inline-block;
  width: 100%;
  background-color: ${(props) => props.theme.color.baseCard};
  padding: 2.5rem;
  border-radius: 10px;
  @media screen and (max-width: 500px) {
    padding: 1.5rem;
  }
`

export const ContainerFormOfPayment = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  gap: 1rem;
  div {
    width: 100%;
  }

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    div {
      width: 80%;
    }
  }
`
