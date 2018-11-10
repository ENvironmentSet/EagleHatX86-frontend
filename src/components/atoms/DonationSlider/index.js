import React from 'react';

import Slider from '@material-ui/lab/Slider';

const DonationSlider = ({ amount, update }) => (
  <Slider
    min={1}
    max={100}
    value={amount}
    onChange={update}
    step={1}
  />
);

export default DonationSlider;
