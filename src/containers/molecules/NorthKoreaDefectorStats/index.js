import React from 'react';
import { connect } from 'react-redux';

import { loadNorthKoreaDefector } from 'store'

import NorthKoreaDefectorStats from 'components/molecules/NorthKoreaDefectorStats';
import CircularProgress from '@material-ui/core/CircularProgress';

const mapStateToProps = ({graph: {northKoreaDefector: datas}}) => ({datas});

const mapDispatchToProps = dispatch => ({
  load() {
    dispatch(loadNorthKoreaDefector());

    return (<CircularProgress />)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NorthKoreaDefectorStats);