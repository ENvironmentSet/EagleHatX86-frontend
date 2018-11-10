import React from 'react';

import TextField from '@material-ui/core/TextField';

const SearchInput = ({keyword, update}) => (
  <TextField
    variant='outlined'
    label='Keyword'
    value={keyword}
    onChange={update}
  />
);

export default SearchInput;
