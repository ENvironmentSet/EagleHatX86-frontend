import React from 'react';
import { connect } from 'react-redux';

import { loadUSBGraph } from 'store'

import USBStats from 'components/molecules/USBStats';
import CircularProgress from '@material-ui/core/CircularProgress';

const mapStateToProps = ({ graph: { USB: datas } }) => ({ datas });

const mapDispatchToProps = dispatch => ({
  load() {
    dispatch(loadUSBGraph());

    return (<CircularProgress />);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(USBStats);
