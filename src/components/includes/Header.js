import React, { Component } from 'react';
import Search from './Search'

class Header extends Component {
  render() {
    return (
      <nav className="topbar">
        <div className="topbar__inner">
          <div className="logo">
            <span>
              <img src="/images/toggle_line.png" alt="logo" />
            </span>
            <h4>Fluid Contacts</h4>
          </div>
          <Search />
          <div className="user__avatar">
            <img src="https://robohash.org/olu" alt="Olu" />
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
