import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const StyledField = styled(Field)`
  height: 40px;
  width: 100%;
  margin-bottom: ${({ theme: { spacing } }) => spacing(3)};
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
`;

export const Button = styled.button`
  align-self: center;
  border-radius: ${({ theme: { radius } }) => radius};
  padding-left: ${({ theme: { spacing } }) => spacing(11)};
  padding-top: ${({ theme: { spacing } }) => spacing(3)};
  padding-right: ${({ theme: { spacing } }) => spacing(11)};
  padding-bottom: ${({ theme: { spacing } }) => spacing(3)};
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

export const ErrMsg = styled(ErrorMessage)`
  color: #e60000;
  margin-bottom: 20px;
`;
