import styled from 'styled-components'

export const HeaderForm = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  justify-items: start;
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
  padding-bottom: 2rem;
  color: ${(props) => props.theme.color.brandYellowDark};
`
export const ContainerAddress = styled.div`
  display: flex;
  padding: 2rem 0;
  width: 100%;
  height: auto;
`
export const ContainerAdress = styled.div`
  display: inline-block;
  width: 100%;
  background-color: ${(props) => props.theme.color.baseCard};
  padding: 2.5rem;
  border-radius: 10px;
  @media screen and (max-width: 500px) {
    padding: 1.5rem;
  }
`
export const ContainerInputs = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  gap: 0 0.75rem;

  // CEP
  > div:nth-child(1) {
    grid-row: 1; /* Primeira linha */
    grid-column: 1 / span 2; /* Ocupa 40% */
  }

  // Rua
  > div:nth-child(2) {
    grid-row: 2; /* Segunda linha */
    grid-column: 1 / span 6; /* Ocupa 100% */
  }

  // Numero
  > div:nth-child(3) {
    grid-row: 3; /* Terceira linha */
    grid-column: 1 / span 2; /* Ocupa 40% */
  }

  // Complemento
  > div:nth-child(4) {
    grid-row: 3; /* Terceira linha */
    grid-column: 3 / span 4; /* Ocupa 60% */
  }

  // Bairro
  > div:nth-child(5) {
    grid-row: 4; /* Quarta linha */
    grid-column: 1 / span 2; /* Ocupa 40% */
  }

  // Cidade
  > div:nth-child(6) {
    grid-row: 4; /* Quarta linha */
    grid-column: 3 / span 3; /* Ocupa 50% */
  }
  // UF
  > div:nth-child(7) {
    grid-row: 4; /* Quarta linha */
    grid-column: 6; /* Ocupa 10% */
  }
  div {
    padding-bottom: 0.3rem;
    display: inline;
  }
`

export const ContainerCart = styled.div`
  display: inline-block;
  width: 30%;
  background-color: ${(props) => props.theme.color.baseCard};
  padding: 2.5rem;
  border-radius: 10px 40px;
`
