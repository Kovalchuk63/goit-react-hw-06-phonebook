import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
`;

export const Button = styled.button`
  border-radius: ${({ theme: { radius } }) => radius};
  padding-left: ${({ theme: { spacing } }) => spacing(2)};
  padding-right: ${({ theme: { spacing } }) => spacing(2)};
  cursor: pointer;
  color: #ffffff;
  background-color: #4d5ae5;
  border: none;
  transition: background-color 250ms, transform 250ms;
  &:hover,
  :focus {
    background-color: #404bbf;
    transform: scale(1.02);
  }
`;
