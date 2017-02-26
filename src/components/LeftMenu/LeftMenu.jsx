import styles from './LeftMenu.css';
import { Link } from 'react-router';

import React, { Component } from 'react';

export default class LeftMenu extends Component {



  //   {leftNavItems.map({
  //             link: link,
  //             linkPath: linkPath}) =>
  //           <li className={ styles.leftMenuItem }><Link to="{linkPath}" activeClassName="active">{link}</Link></li> )}

  render() {
          const data = [
      {
        link: 'Link one', linkPath: '/settings/accounts'
      }, 
      {
        link: 'Link two', linkPath: '/settings/payment'
      },
      {
        link: 'Link three', linkPath: '/settings/protection'
      }
    ]
      // const IndexSidebar = () => (

    return (
      <div className={ styles.menuContainer }>
        <ul>
          {/*can I use props here so data doesn't have to be declared in this file?
          and can be declared elsewhere so data is dyamic?*/}
          {data.map((category, index) => (
            <li key={index}>
              <Link to={`${category.linkPath}`}>{category.link}</Link>
            </li>
          ))}
        </ul>
      </div>
  
      /*<div className={ styles.menuContainer }>
        <ul>
            <li className={ styles.leftMenuItem }><Link to="/settings/accounts" activeClassName="active">Linked Accounts</Link></li>
            <li className={ styles.leftMenuItem }><Link to="/settings/payment" activeClassName="active">Payment Methods</Link></li>
            <li className={ styles.leftMenuItem }><Link to="/settings/credit-cards" activeClassName="active">Credit Cards Protection</Link></li>
            <li className={ styles.leftMenuItem }><Link to="/settings/notifications" activeClassName="active">Email Notifications</Link></li>
            <li className={ styles.leftMenuItem }><Link to="/settings/profile" activeClassName="active">Profile</Link></li>
        </ul>
      </div>*/

      /*<div className={ styles.menuContainer }>
        <ul>
            {navItems}
        </ul>
      </div>*/


    );
  }

};
