import React from 'react';

import List from '@material-ui/core/List';
import ArticleItem from 'components/molecules/ArticleItem';

const ArticleList = ({articles, load }) => (
  articles.length ?
    <List component='nav'>
      {
        articles.map((article, key) => <ArticleItem key={key} {...article} />)
      }
    </List>
    :
    load()
);

export default ArticleList;
