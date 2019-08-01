import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2'

import { Button,
         Form,
         FormGroup,
         Label,
         Input,
         Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

export default class AnswersForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      answer: ''
    }
  }

  componentDidMount = () => {
    if(this.props.match.params.id){
      axios.get(`http://localhost:4000/respuestas/${this.props.match.params.id}`)
      .then((response) => this.setState({answer: response.data.answer}))
      .catch(function (error) {
        console.log(error);
      });
    }
  }

  setName = (e) => {
    this.setState({answer: e.target.value});
  }

  postAnswer = ({ fn, url, params, type }) => {
    fn(url, params)
    .then(function (response) {
      Swal.fire(
        `¡${type}!`,
        `La pregunta ha sido ${type} satisfactoriamente.`,
        'success'
      );
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  submit = (e) => {
    const { id } = this.props.match.params
    if (id) {
      this.postAnswer({
        fn: axios.put,
        url: `http://localhost:4000/respuestas/${id}`,
        params: { answer: this.state.answer},
        type: 'ACTUALIZADO'
      });
    } else {
      this.postAnswer({
        fn: axios.post,
        url: 'http://localhost:4000/respuestas',
        params: { answer: this.state.answer},
        type: 'AGREGADO'
      });
    }
  }

  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle><h4>Respuestas</h4></CardTitle>
          <CardSubtitle><strong>Formulario de respuestas del sistema</strong></CardSubtitle>
          <Form className="mt-4">
            <FormGroup>
              <Label for="respuestaName">Introduzca la respuesta</Label>
              <Input type="text" name="name" id="respuestaName" placeholder="Agregar respuesta" onChange={this.setName} defaultValue={ this.state.answer } />
            </FormGroup>
          <Button onClick={this.submit} >Enviar</Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}