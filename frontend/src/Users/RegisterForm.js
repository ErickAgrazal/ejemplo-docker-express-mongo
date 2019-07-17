import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

import { Button,
         Form,
         FormGroup,
         Label,
         Input,
         Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

export default class RegisterForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
    };
  }
  
  setUsername = (e) => {
    this.setState({ username: e.target.value });
  }

  setPassword = (e) => {
    this.setState({ password: e.target.value });
  }

  setFirstName = (e) => {
    this.setState({ firstName: e.target.value });
  }

  setLastName = (e) => {
    this.setState({ lastName: e.target.value });
  }

  submit = (e) => {
    axios.post(`http://localhost:4000/usuarios/registrar`, this.state)
    .then(function (response) {
      Swal.fire(
        `¡REGISTRADO!`,
        `El usuario se ha AREGISTRADO satisfactoriamente.`,
        'success'
      );
    })
    .catch(function (error) {
      Swal.fire(
        `¡ERROR!`,
        `El usuario no se ha podido REGISTRAR`,
        'error'
      );
    });
  }

  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle><h4>Registro</h4></CardTitle>
          <CardSubtitle><strong>Registro de usuario sistema</strong></CardSubtitle>
          <Form className="mt-4">
            <FormGroup>
              <Label for="username">Nombre de usuario</Label>
              <Input type="text" name="username" id="username" placeholder="Nombre de usuario" onChange={this.setUsername} />
            </FormGroup>
            <FormGroup>
              <Label for="password">Contraseña</Label>
              <Input type="password" name="password" id="password" placeholder="Contraseña" onChange={this.setPassword} />
            </FormGroup>
            <hr></hr>
            <FormGroup>
              <Label for="firstName">Nombre</Label>
              <Input type="text" name="firstName" id="firstName" placeholder="Nombre" onChange={this.setFirstName} />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Apellido</Label>
              <Input type="text" name="lastName" id="lastName" placeholder="Apellido" onChange={this.setLastName} />
            </FormGroup>
          <Button color="primary" onClick={this.submit} >Enviar</Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}