import styled from 'styled-components';


export const ContactItem = styled.li`
     display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 0.5rem;
  &:not(:last-of-type) {
    margin-bottom: 0.25rem;
  }
  &:hover {
    background-color: #f8fcfd;
  }
`
export const ContactText = styled.p`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;