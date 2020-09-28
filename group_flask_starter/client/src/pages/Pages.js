
import React from 'react';

import { Route } from  'react-router-dom';


import SignupPage from './SignupPage';


export default function Pages() {
  return (
    <>
      <Route path="/signup" component={SignupPage} />
    </>
  )
}
