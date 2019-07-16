import React from 'react';
import { Switch, Route } from 'react-router-dom'
import AuthForm from './AuthForm';
import RegisterForm from './RegisterForm';

export default function UserSwitch() {
  return (
    <Switch>
      <Route exact path='/usuarios/autenticar' component={AuthForm}/>
      <Route path='/usuarios/registrar' component={RegisterForm}/>
    </Switch>
  );
}