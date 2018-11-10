import React from 'react';

import Button from '@material-ui/core/Button';

const LoadNoticeButton = ({ load }) => (
  <Button variant='extendedFab' onClick={load}>
    Load Notice
  </Button>
);

export default LoadNoticeButton;
