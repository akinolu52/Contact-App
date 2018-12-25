import React, { Component } from 'react';
import Header from './includes/Header';
import Sidebar from './includes/Sidebar';
import Content from './includes/Content';

class Main extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div style={{ width: '100%', minHeight: '400px', overflow: 'hidden'}}>
        <Header />
        <div className="main__container">
          <Sidebar />
          <Content/>
        </div>
      </div>
    );
  }
}

export default Main;
