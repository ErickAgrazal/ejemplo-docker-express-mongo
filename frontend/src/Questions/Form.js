import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2'

import { Button,
         Form,
         FormGroup,
         Label,
         Input,
         Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

export default class QuestionsForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: ''
    }
  }

  componentDidMount = () => {
    if(this.props.match.params.id){
      axios.get(`http://localhost:4000/preguntas/${this.props.match.params.id}`)
      .then((response) => this.setState({name: response.data.name}))
      .catch(function (error) {
        console.log(error);
      });
    }
  }

  setName = (e) => {
    this.setState({name: e.target.value});
  }

  postQuestion = ({ fn, url, params, type }) => {
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
      this.postQuestion({
        fn: axios.put,
        url: `http://localhost:4000/preguntas/${id}`,
        params: { name: this.state.name},
        type: 'ACTUALIZADO'
      });
    } else {
      this.postQuestion({
        fn: axios.post,
        url: 'http://localhost:4000/preguntas',
        params: { name: this.state.name},
        type: 'AGREGADO'
      });
    }
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
              <Input type="text" name="name" id="preguntaName" placeholder="Agregar pregunta deseada" onChange={this.setName} defaultValue={ this.state.name } />
            </FormGroup>
          <Button onClick={this.submit} >Enviar</Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}