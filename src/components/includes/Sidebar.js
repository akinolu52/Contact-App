import React from 'react';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <i className="zmdi zmdi-accounts-list-alt"/> 
          <span>Contacts (533)</span>
        </li>
        <li>
          <i className="zmdi zmdi-settings"/> 
          <span>Settings</span>
        </li>
        <li>
          <i className="zmdi zmdi-help" /> 
          <span>Help</span>
          </li>
      </ul>
    </nav>
  );
}

export default Sidebar;