import React from 'react';
import { Button,
         Form,
         FormGroup,
         Label,
         Input,
         Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

export default class QuestionsForm extends React.Component {
  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle><h4>Preguntas</h4></CardTitle>
          <CardSubtitle><strong>Formulario de preguntas del sistema</strong></CardSubtitle>
          <Form className="mt-4">
            <FormGroup>
              <Label for="preguntaName">Introduzca la pregunta</Label>
              <Input type="text" name="name" id="preguntaName" placeholder="Agregar pregunta deseada" />
            </FormGroup>
          <Button>Enviar</Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}