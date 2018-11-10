import React from 'react';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const FilterSelector = ({ filter, update }) => (
  <TextField
    select
    label='Filter'
    value={filter}
    onChange={update}
    variant='outlined'
  >
    <MenuItem value={'NEWER'}>
      NEWER
    </MenuItem>
    <MenuItem value={'OLDER'}>
      OLDER
    </MenuItem>
  </TextField>
);

export default FilterSelector
