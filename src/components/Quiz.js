import React from 'react';
import Front from './Front';
import Back from './Back';
import End from './End';

const Quiz = () => {
  const status = 'end';
  if (status === 'front') return <Front />;
  if (status === 'back') return <Back />;
  return <End />;
};

export default Quiz;
