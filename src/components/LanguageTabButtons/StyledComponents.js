import styled from 'styled-components'

export const ButtonList = styled.li`
  list-style-type: none;
  margin-right: 15px;
`

export const LanguageButton = styled.button`
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  border-radius: 20px;
  width: 90px;
  padding: 10px;
  border-width: ${props => props.borderWidth}px;
  border-style: ${props => props.borderStyle};
  border-color: ${props => props.color};
  outline: none;
  cursor: pointer;
`
