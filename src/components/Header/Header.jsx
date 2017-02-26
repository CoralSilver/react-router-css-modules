import styles from './Header1.css';
import globalStyles from '../App.css'
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {

  render() {
    // const { location } = this.props;

    return (
        <header className={ styles.header }>
          <nav className={ styles.nav }>
          <Link to="/" className={ styles.logoOne}>
            <h1 className={globalStyles.screenReaderOnly}>
              Paribus
            </h1>
          </Link>
          <ul className={ styles.headerMenuLeft }>
              <li className={ styles.headerMenuItem }><a>Header Link 1</a></li>
              <li className={ styles.headerMenuItem }><a>Header Link 2</a></li>
              <li className={ styles.headerMenuItem }><a>Header Link 3</a></li>
              <li className={ styles.headerMenuItem }><Link to="/settings" activeClassName="active">Header Link 4</Link></li>
          </ul>
          <ul className={ styles.headerMenuRight }>
              <li className={ styles.headerMenuItem }><a>Contact</a></li>
              <li className={ styles.headerMenuItem }><a>Log out</a></li>
          </ul>
          </nav>
        </header>
    );
  }

};
