import React, { Component } from 'react';

class Search extends Component {
  // constructor(props) {
  //   super(props);

  // }
  // getInitialState() {
  //   return {
  //     displayedContacts: CONTACTS
  //   };

  // };

  // handleSearch(event) {
  //   var searchQuery = event.target.value.toLowerCase();
  //   var displayedContacts = CONTACTS.filter(function(el) {
  //     var searchValue = el.name.toLowerCase();

  //     return searchValue.indexOf(searchQuery) !== -1;
  //   });

  //   this.setState({
  //     displayedContacts: displayedContacts
  //   });
  // };

  render() {
    return (
      <form className="search__form">
          <div>
            <input type="search" name="search" id="search" onChange={this.handleSearch} placeholder="Search" />
          </div>
      </form>
    );
  }
}

export default Search;
