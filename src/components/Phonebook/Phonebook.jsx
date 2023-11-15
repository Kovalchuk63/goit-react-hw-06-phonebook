import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button, ErrMsg, StyledField, StyledForm } from './Phonebook.styled';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be 2 characters long')
    .matches('[a-zA-Zа-яА-ЯіІїЇ]+', 'Enter valid symbols'),
  number: Yup.string()
    .required('Phone number is required')
    .matches(
      '[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}',
      'Enter valid symbols format xxx-xxx-xx-xx'
    ),
});

export const Phonebook = ({ onAddContact }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, helpers) => {
        helpers.resetForm();
        onAddContact(values);
      }}
    >
      <StyledForm>
        <label htmlFor="name">Name</label>
        <StyledField id="name" name="name" />
        <ErrMsg component="div" name="name" />

        <label type="tel" htmlFor="number">
          Number
        </label>
        <StyledField id="number" name="number" />
        <ErrMsg component="div" name="number" />

        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};
