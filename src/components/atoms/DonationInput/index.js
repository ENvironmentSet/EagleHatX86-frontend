import React from 'react';

import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

const DonationInput = ({ amount, update }) => (
  <TextField
    variant='outlined'
    label='Your Contribution'
    value={amount}
    onChange={update}
    InputProps={
      {
        startAdornment: <InputAdornment position='start'>$</InputAdornment>
      }
    }
  />
);

export default DonationInput;
