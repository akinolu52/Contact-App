import React, { Component, Fragment } from 'react';
import Main from "./components/Main";
import ReduxToastr from 'react-redux-toastr';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Main />
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
          closeOnToastrClick />
      </Fragment>
    );
  }
}

export default App;
