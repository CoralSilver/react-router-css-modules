import layoutStyles from 'shared/styles/layout.css'
// import styles from './MainLayout.css'
import globalStyles from '../App.css'

import React, { Component } from 'react';
import { render } from 'react-dom';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Header from 'Header/Header.jsx';
import Footer from 'Footer/Footer.jsx';


export default class MainLayout extends Component {
  render() {
    return (
      <section className={globalStyles.app}>
        <Header/>
          <main>
          {this.props.children}
          </main>
        <Footer/>
      </section>
    );
  }
}