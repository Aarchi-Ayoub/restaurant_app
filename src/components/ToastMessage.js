import React from 'react';
import Toast from 'react-native-toast-message';
export default () => {
  return <Toast ref={ref => Toast.setRef(ref)} />;
};
