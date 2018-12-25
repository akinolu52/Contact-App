import React, { Component } from 'react';

class Search extends Component {
  // constructor(props) {
  //   super(props);

  // }

  render() {
    return (
      <form className="search__form">
          <div>
            <input type="search" name="search" id="search" placeholder="Search" />
          </div>
      </form>
    );
  }
}

export default Search;
