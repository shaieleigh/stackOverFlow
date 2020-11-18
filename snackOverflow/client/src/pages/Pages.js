
import React from 'react';

import { Route } from  'react-router-dom';

import LandingPage from './LandingPage';
import SignupPage from './SignupPage';

import LoginPage from './LoginPage';

import Questions from './Questions';

import QuestionId from './QuestionId'
import QuestionForm from './QuestionForm';


export default function Pages() {
  return (
    <>
      <Route exact path="/" component={LandingPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/login" component={LoginPage} />
      <Route exact path="/questions" component={Questions} />
      <Route path="/questions/q/:id" component={QuestionId} />
      <Route exact path="/questions/ask" component={QuestionForm} />
    </>
  );
}
