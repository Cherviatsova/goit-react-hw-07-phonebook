import styled from 'styled-components';


export const Btn = styled.button`
    width: 150px;
    height: 25px;
    margin-top: 15px;
    font-weight: 400;
    font-size: 16px;
cursor: pointer;
border-radius: 4px;
border: 2px solid #7e8a8b;
    background-color: #fff;
    &:focus{
        border: 4px solid #56b8d6
    }

  &[disabled] {
    pointer-events: none;
    background-color: #cccccc;
    opacity: 0.7;
  }
  &:hover {
    background-color: #ade5e9;
  }
`