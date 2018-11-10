import React from 'react';
import { connect } from 'react-redux';

import { loadNotices } from 'store';

import CircularProgress from '@material-ui/core/CircularProgress';
import ArticleList from 'components/organisms/ArticleList';

const mapStateToProps = ({ notices: articles }) => ({ articles });

const mapDispatchToProps = dispatch => ({
  load() {
    dispatch(loadNotices());

    return (<CircularProgress />);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
