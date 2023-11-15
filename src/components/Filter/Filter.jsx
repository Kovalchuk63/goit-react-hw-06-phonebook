import React from 'react';
import { Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterValue } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispath = useDispatch();
  return (
    <React.Fragment>
      <label htmlFor="filter">Find contacts by name</label>
      <Input
        id="filter"
        value={filter}
        onChange={evt => dispath(filterValue(evt.target.value))}
      ></Input>
    </React.Fragment>
  );
};
