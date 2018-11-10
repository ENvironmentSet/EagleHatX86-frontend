import React from 'react';

import Button from '@material-ui/core/Button';

function createPaymentRequest(amount) {
  const supportedInstruments = [
    {
      supportedMethods: 'basic-card',
      data: {
        supportedMethods: ['visa', 'mastercard'],
        supportedTypes: ['credit']
      }
    }
  ];

  const details = {
    displayItems: [{
      label: 'Original donation amount',
      amount: {currency: 'USD', value: `${amount}.00`}
    }],
    total: {
      label: 'Total due',
      amount: {currency: 'USD', value: `${amount}.00`}
    }
  };

  new PaymentRequest(supportedInstruments, details).show();
}

const DonationButton = ({ amount }) => (
  <Button variant='extendedFab' onClick={() => createPaymentRequest(amount)}>
    Contribute Now!
  </Button>
);

export default DonationButton;
