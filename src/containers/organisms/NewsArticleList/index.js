import React from 'react';
import { connect } from 'react-redux';

import { loadNews } from 'store';

import CircularProgress from '@material-ui/core/CircularProgress';
import ArticleList from 'components/organisms/ArticleList';

const mapStateToProps = ({news: articles}) => ({articles});

const mapDispatchToProps = dispatch => ({
  load() {
    dispatch(loadNews());

    return (<CircularProgress />);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
