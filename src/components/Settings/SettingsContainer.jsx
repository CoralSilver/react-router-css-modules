
import LeftMenu from 'LeftMenu/LeftMenu.jsx';
import Settings from 'Settings/Settings.jsx';


import React, { Component } from 'react';

export default class SettingsContainer extends Component {
    render() {

        return (
          // className={ styles.main }
            <section>
                adfsdfgsdgfsdfgsd
                <LeftMenu/>
                {/*dynamically upddate component based on menu selection in LeftMenu*/}
                {this.props.children}
            </section>
        );
    }




    // getLinks() {
    //   return leftNavItems.map((links) => {
    //     return (
    //       <li className={ styles.leftMenuItem } key={}><Link to="{links.linkPath}" activeClassName="active">{links.link}</Link></li>
    //     );
    //   });
    // }
};
