import React from 'react';
import { Input } from './Filter.styled';
export const Filter = ({ inputValue, onFilter }) => {
  return (
    <React.Fragment>
      <label htmlFor="filter">Find contacts by name</label>
      <Input
        id="filter"
        value={inputValue}
        onChange={evt => onFilter(evt.target.value)}
      ></Input>
    </React.Fragment>
  );
};
