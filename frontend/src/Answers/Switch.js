import React from 'react';
import { Switch, Route } from 'react-router-dom'
import AnswerForm from './Form';
import AnswerList from './List';

export default function AnswerSwitch() {
  return (
    <Switch>
      <Route exact path='/respuestas' component={AnswerList}/>
      <Route path='/respeustas/crear' component={AnswerForm}/>
      <Route path='/respuestas/:id' component={AnswerForm}/>
    </Switch>
  );
}