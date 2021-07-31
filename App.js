import React, {Fragment} from 'react';
import ToastMessage from './src/components/ToastMessage';
import Router from './src/router';
const App = () => {
  console.log('Test for debugger');

  return (
    <Fragment>
      <Router />
      <ToastMessage />
    </Fragment>
  );
};
export default App;
