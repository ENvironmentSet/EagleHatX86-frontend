import React from 'react';

import Tab from '@material-ui/core/Tab';

const TopBarTab = ({ title, history }) => (
  <Tab label={title} onClick={() => history.push(`/${title}`)}/>
);

export default TopBarTab;
