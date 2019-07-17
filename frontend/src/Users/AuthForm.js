import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

import { Button,
         Form,
         FormGroup,
         Label,
         Input,
         Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

export default class AuthForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  
  setUsername = (e) => {
    this.setState({ username: e.target.value });
  }

  setPassword = (e) => {
    this.setState({ password: e.target.value });
  }

  submit = (e) => {
    axios.post(`http://localhost:4000/usuarios/autenticar`, this.state)
    .then(function (response) {
      Swal.fire(
        `¡AUTENTICADO!`,
        `El usuario se ha AUTENTICADO satisfactoriamente.`,
        'success'
      );
    })
    .catch(function (error) {
      Swal.fire(
        `¡ERROR!`,
        `El usuario no se ha podido AUTENTIFICAR`,
        'error'
      );
    });
  }

 

  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle><h4>Login</h4></CardTitle>
          <CardSubtitle><strong>Iniciar sesión en el sistema</strong></CardSubtitle>
          <Form className="mt-4">
            <FormGroup>
              <Label for="username">Nombre de usuario</Label>
              <Input type="text" name="username" id="username" placeholder="Nombre de usuario" onChange={this.setUsername} />
            </FormGroup>
            <FormGroup>
              <Label for="password">Contraseña</Label>
              <Input type="password" name="password" id="password" placeholder="Contraseña" onChange={this.setPassword} />
            </FormGroup>
          <Button color="primary" onClick={this.submit} >Enviar</Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}