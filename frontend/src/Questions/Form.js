import axios from 'axios';
import React from 'react';
import { Button,
         Form,
         FormGroup,
         Label,
         Input,
         Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

export default class QuestionsForm extends React.Component {
  setName = (e) => {
    this.setState({name: e.target.value});
  }
  submit = (e) => {
    axios.post('http://localhost:4000/preguntas/', {
      name: this.state.name,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle><h4>Preguntas</h4></CardTitle>
          <CardSubtitle><strong>Formulario de preguntas del sistema</strong></CardSubtitle>
          <Form className="mt-4">
            <FormGroup>
              <Label for="preguntaName">Introduzca la pregunta</Label>
              <Input type="text" name="name" id="preguntaName" placeholder="Agregar pregunta deseada" onChange={this.setName} />
            </FormGroup>
          <Button onClick={this.submit} >Enviar</Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}