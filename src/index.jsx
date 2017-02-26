import React, { Component } from 'react';
import { render } from 'react-dom';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Home from 'Home/Home.jsx';
import MainLayout from 'MainLayout/MainLayout.jsx'
import Header from 'Header/Header.jsx';
// import Main from 'Main/Main.jsx';
import SettingsContainer from 'Settings/SettingsContainer.jsx'

  /*render(
    <Router history={browserHistory}>
        <Route path="/" component={Header}>
            <IndexRoute component={Home}/>
            <Route path="settings" component={SettingsContainer}>
                <Route path="accounts" component={Home}/>
                <Route path="payment" component={Header}/>
                <Route path="protection" component={Home}/>
                <Route path="notifications" component={Header}/>
            </Route>
        </Route>
        <div class="footer">This is the footer</div>
    </Router>,
    document.getElementById('container')
);*/

render(
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={Home}/>
        <Route path="settings" component={SettingsContainer}>
          <Route path="accounts" component={Home}/>
          <Route path="payment" component={Header}/>
          <Route path="protection" component={Home}/>
          <Route path="notifications" component={Header}/>
      </Route>
    </Route>
  </Router>, 
  document.getElementById('container')
);
