import React, {Fragment} from 'react';
import {Text} from 'react-native';
import Router from './src/router';
import 'react-native-gesture-handler';
const App = () => {
  console.log('Test for debugger');
  return (
    <Fragment>
      <Router />
    </Fragment>
  );
};
export default App;
