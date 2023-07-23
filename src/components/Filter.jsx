import { FormControl, Input } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <FormControl mt={5}>
      <Input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        ariant="filled"
        placeholder="Enter text to filter contacts"
      />
    </FormControl>
  );
};

export default Filter;
