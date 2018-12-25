import React, { Component } from 'react';
import CreateContact from '../contact/Create';
import AllContact from '../contact/All';
// import DeleteContact from '../contact/Delete';

class Content extends Component {
  // constructor(props) {
  //   super(props);
    
  // }
  render() {
    return (
      <div className="content">
        <AllContact />
        <CreateContact />
        {/* <EditContact /> */}
      </div>
    );
  }
}

export default Content;
