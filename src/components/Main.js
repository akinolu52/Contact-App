import React, { Component } from 'react';
import Header from './includes/Header';
import Sidebar from './includes/Sidebar';
import Content from './includes/Content';

const Main = () => {
  return (
    <div className="main">
      <Header />
      <div className="main__container">
        <Sidebar />
        <Content/>
      </div>
    </div>
  );
}

export default Main;
