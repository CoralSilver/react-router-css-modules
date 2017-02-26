import styles from './Main.css';

import LeftMenu from 'LeftMenu/LeftMenu.jsx';
import Settings from 'Settings/Settings.jsx';


import React, { Component } from 'react';

export default class Main extends Component {

  render() {
    return (
        <main className={ styles.main }>
          coral
            <LeftMenu />
            {/*dynamically upddate component based on menu selection in LeftMenu*/}
            {this.props.children}
        </main>
    );
  }

};
