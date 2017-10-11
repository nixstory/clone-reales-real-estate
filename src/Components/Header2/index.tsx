import * as React from 'react';
import './style.css';

import { Icon } from 'react-fa';

import UserMenu from './UserMenu';
import NotifyMenu from './NotifyMenu';
import SearchForm from './SearchForm';

class Header2 extends React.Component<{}, {}> {

  render() {
    return (
      <div className="header2">
        <div className="logo">
          <a href="index.html">
            <Icon className="fa fa-home marker" name="home" />
            <span className="logoText">reales</span>
          </a>
        </div>
        <a href="#" className="navHandler"><Icon className="fa fa-bars" name="bars" /></a>
        <SearchForm />

        <UserMenu />
        <NotifyMenu />
        <a href="#" className="mapHandler"><Icon className="icon-map" name="map-o" /></a>
        <div className="clearfix" />
      </div>
    );
  }
}

export default Header2;