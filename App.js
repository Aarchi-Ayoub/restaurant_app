import React, {Fragment} from 'react';
import {Provider} from 'react-redux';
import ToastMessage from './src/components/ToastMessage';
import Router from './src/router';
import {store} from './src/strore/store';
const App = () => {
  console.log('Test for debugger');

  return (
    <Fragment>
      <Provider store={store}>
        <Router />
        <ToastMessage />
      </Provider>
    </Fragment>
  );
};
export default App;
