import React, { Component } from 'react';
import CreateContact from '../contact/Create';
import AllContact from '../contact/All';

const Content = () => {
  return (
    <div className="content">
      <AllContact />
      <CreateContact />
    </div>
  )
};

export default  Content;