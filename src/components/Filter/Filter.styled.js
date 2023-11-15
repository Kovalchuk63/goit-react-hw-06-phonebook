import styled from 'styled-components';

export const Input = styled.input`
  height: 40px;
  width: 100%;
  margin-bottom: ${({ theme: { spacing } }) => spacing(3)};
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #000000;
  outline: none;
`;
