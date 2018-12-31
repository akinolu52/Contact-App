import React, { Fragment } from 'react';
import Main from "./components/Main";
import ReduxToastr from 'react-redux-toastr';

const App = () => {
  return (
    <Fragment>
      <Main />
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        closeOnToastrClick />
    </Fragment>
  );
}

export default App;
