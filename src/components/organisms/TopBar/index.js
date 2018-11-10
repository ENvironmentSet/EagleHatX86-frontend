import React from 'react';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import TopBarTab from 'containers/atoms/TopBarTab';

function pageToIndex(page) {
  let result;

  switch (page) {
    case 'Home':
      result = 0;
      break;
    case 'Introduce':
      result = 1;
      break;
    case 'Notice':
      result = 2;
      break;
    default:
      result = 0;
  }

  return result;
}

const TopBar = ({ match: { params: { page } } }) => (
  <Paper position='static'>
    <Tabs
      value={pageToIndex(page)}
      indicatorColor='primary'
      textColor='primary'
      centered
    >
      <TopBarTab title='Home'/>
      <TopBarTab title='Introduce'/>
      <TopBarTab title='Notice'/>
    </Tabs>
  </Paper>
);

export default TopBar;
