import React from 'react';
import AlertInput from '../components/alertInput/alertInput';

const inputsController = (input, value) => {
  if (value.trim() === null || value.trim() === '') {
    return <AlertInput show={true} />;
  }
  return <div></div>;
};

export default inputsController;
