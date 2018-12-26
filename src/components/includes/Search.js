import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as contactAction from '../../actions/contactAction';
import {toastr} from 'react-redux-toastr';
class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(e) {
    this.setState({
        [e.target.name]: e.target.value
    });
    this.search();
  }

  handleSearch(e) {
    e.preventDefault();
    this.search();
  }

  search() {
    if(this.state.search !== "") {
      this.props.searchContact(this.state.search);
      toastr.info("Results", `Showing results for ${this.state.search}`);
    } 
  }

  render() {
    return (
      <form className="search__form" onSubmit={this.handleSearch}>
          <div>
            <input type="search" name="search" id="search" onChange={this.handleChange} placeholder="Search" />
          </div>
      </form>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      searchContact: name => dispatch(contactAction.searchContact(name))
  }
};

export default connect(null, mapDispatchToProps)(Search);
