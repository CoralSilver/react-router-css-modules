import globalStyles from '../App.css'
import styles from './Footer.css'
import React, { Component } from 'react';
import { Link } from 'react-router';

// only create class when you need STATE, REFS, LIFECYCLE METHODS OR CHILD FUNCTIONS(FOR PERFORMANCE)
// Instead use ES6 stateless functional component

const Footer = (props)=> {
    return (
      <footer className={styles.footer}>
        <ul>
          <li>Footer link 1</li>
          <li>Footer link 2</li>
          <li>Footer link 3</li>
        </ul>
      </footer>
    );
};

export default Footer;
