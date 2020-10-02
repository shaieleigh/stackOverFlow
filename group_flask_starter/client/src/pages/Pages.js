
import React from 'react';

import { Route } from  'react-router-dom';


import SignupPage from './SignupPage';

import LoginPage from './LoginPage';

import Questions from './Questions';

import QuestionId from './QuestionId'


export default function Pages() {
  return (
    <>
      <Route path="/signup" component={SignupPage} />
      <Route path="/login" component={LoginPage} />
      <Route exact path="/questions" component={Questions} />
      <Route path="/questions/:id" component={QuestionId} />
    </>
  )
}
