import { styled } from 'styled-components'

export const Container = styled.div`
  padding-top: 3rem;
  > :nth-child(2) {
    padding-bottom: 3rem;
  }
`

export const ContainerIcon = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  > :nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.color.baseWhite};
    border-radius: 100%;
  }
  :nth-child(2) {
    display: flex;
    flex-direction: column;
  }
  gap: 1rem;
  padding: 1rem;
`
export const BorderLine = styled.div`
  width: 70%;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.color.brandYellow},
    ${(props) => props.theme.color.brandPurple}
  );
  padding: 1px;
  border-radius: 5px 25px;
`
export const BorderRadios = styled.div`
  background: white;
  padding: 1px;
  border-radius: 5px 25px;
  > div {
    padding: 2rem;
  }
`
