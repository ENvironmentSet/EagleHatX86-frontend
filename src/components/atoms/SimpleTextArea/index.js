import React from 'react';
import Paper from '@material-ui/core/Paper';

const SimpleTextArea = ({ children: content }) => (
  <Paper elevation={1}>
    {content}
  </Paper>
);

export default SimpleTextArea;
