
import React from 'react';

import { Route } from  'react-router-dom';


import SignupPage from './SignupPage';

import LoginPage from './LoginPage';


export default function Pages() {
  return (
    <>
      <Route path="/signup" component={SignupPage} />
      <Route path="/login" component={LoginPage} />
    </>
  )
}
