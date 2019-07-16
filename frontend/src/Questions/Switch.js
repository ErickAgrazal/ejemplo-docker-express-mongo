import React from 'react';
import { Switch, Route } from 'react-router-dom'
import QuestionsForm from './Form';
import QuestionsList from './List';

export default function QuesitonSwitch() {
  return (
    <Switch>
      <Route exact path='/preguntas' component={QuestionsList}/>
      <Route path='/preguntas/crear' component={QuestionsForm}/>
      <Route path='/preguntas/:id' component={QuestionsForm}/>
    </Switch>
  );
}