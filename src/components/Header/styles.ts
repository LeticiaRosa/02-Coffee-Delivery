import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Menu = styled.div`
  display: flex;
  gap: 0.5rem;
  height: 2.4rem;
  button {
    font-size: 12px;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.color.baseWhite};
    background-color: #d3d3d3;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
`

export const Local = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12rem;
  height: 2.5rem;
  background-color: ${(props) => props.theme.color.brandPurpleLight};
  border-radius: 8px;
  color: ${(props) => props.theme.color.brandPurple};
  p {
    font-size: 14px;
    padding-left: 5px;
    color: ${(props) => props.theme.color.brandPurpleDark};
  }
`
