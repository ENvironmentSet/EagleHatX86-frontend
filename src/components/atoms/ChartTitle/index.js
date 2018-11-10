import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const ChartTitle = ({ title }) => (
  <AppBar position='static'>
    <Tabs value={0} centered>
      <Tab label={title} />
    </Tabs>
  </AppBar>
);

export default ChartTitle;
