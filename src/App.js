import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from 'store';

import TopBar from 'components/organisms/TopBar';
import Home from 'components/pages/Home';
import Introduce from 'components/pages/Introduce';
import Notice from 'components/pages/Notice';

export default () => (
  <Provider store={store}>
    <Router>
      <>
        <Route exact path='/' render={() => <Redirect to='/Home' />} />
        <Route path='/:page' component={TopBar} />
        <Route path='/Home' component={Home} />
        <Route path='/Introduce' component={Introduce} />
        <Route path='/Notice' component={Notice} />
      </>
    </Router>
  </Provider>
);
