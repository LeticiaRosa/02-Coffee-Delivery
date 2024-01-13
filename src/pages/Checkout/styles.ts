import styled from 'styled-components'

export const Container = styled.div`
  height: auto;
  padding: 2rem;
  width: 100%;
  @media screen and (max-width: 500px) {
    padding: 1rem;
  }
`
export const ContainerAddress = styled.div`
  display: flex;
  padding: 1rem 0;
  gap: 1rem;
  @media screen and (max-width: 1200px) {
    display: inline;
  }
`

export const ContainerMenu = styled.div`
  margin: 0;
  display: inline;
  > div {
    padding-bottom: 1rem;
  }
`

export const HeaderForm = styled.div`
  display: grid;
  align-items: center;
  grid-template-rows: repeat(2, 1fr);
  gap: 0.25rem;
  padding-bottom: 2rem;
  :nth-child(1) {
    grid-row: 1 / span 2;
    grid-column: 1;
    color: ${(props) => props.theme.color.brandYellowDark};
  }
  :nth-child(2) {
    grid-row: 1;
    grid-column: 2 / span 6;
  }
  :nth-child(3) {
    grid-row: 2;
    grid-column: 2 / span 6;
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
`

export const ContainerCart = styled.div`
  display: inline-block;
  width: 100%;
  background-color: ${(props) => props.theme.color.baseCard};
  padding: 1rem 2.5rem;
  border-radius: 10px 40px;
  @media screen and (max-width: 500px) {
    padding: 1rem;
  }
`
