import React from 'react';
import DonationInput from 'containers/atoms/DonationInput';
import DonationSlider from 'containers/atoms/DonationSlider';
import DonationButton from 'containers/atoms/DonationButton';

const Donation = () => (
  <>
    <DonationSlider />
    <DonationInput />
    <DonationButton />
  </>
);

export default Donation;