import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as contactAction from '../../actions/contactAction';

/**
 * Class reprenstation for the search contact component
 */
class Search extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  /**
   * @summary perdorms a serach operation on pervious contact list
   * @param  {string} 
   */
  handleChange(e) {
    // perform search operstion
    this.props.searchContact(e.target.value);
  }

  render() {
    return (
      <div className="search__form">
        <input type="search" name="search" id="search" onChange={this.handleChange} placeholder="Search" />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      searchContact: name => dispatch(contactAction.searchContact(name))
  }
};

export default connect(null, mapDispatchToProps)(Search);
