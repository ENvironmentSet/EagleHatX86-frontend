import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import donation from 'store/donation';
import graph from 'store/graph';
import news from 'store/news';
import notices from 'store/notices';
import query from 'store/query';

const reducer = combineReducers({ donation, graph, news, notices, query });

const middleware = applyMiddleware(thunk);
const state = {
  donation: {
    amount: 1
  },
  graph: {
    northKoreaDefector: [],
    USB: []
  },
  news: [],
  notices: [],
  query: {
    filter: 'NEWER',
    keyword: ''
  }
};

export default createStore(reducer, state, middleware);

export { updateDonation } from 'store/donation';
export { loadUSBGraph, loadNorthKoreaDefector, updateUsbGraph, updateNorthKoreaDefector } from 'store/graph';
export { loadNews, updateNews } from 'store/news';
export { loadNotices, updateNotices } from 'store/notices';
export { FILTER, updateFilter, updateKeyword } from 'store/query';
