import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2'

import { Table } from 'reactstrap';


export default class AnswerList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      answers: []
    }
  }
  componentDidMount = () => {
    axios.get('http://localhost:4000/respuestas/')
    .then((response) => this.setState({ answers: response.data.answers }))
    .catch((error) => console.log(error));
  }

  deleteRow = (index) => {
    var answers = [...this.state.answers];
    answers.splice(index, 1);
    this.setState({answers});
  }

  deleteAnswerFactory = (i, documentId) => {
    return (e) => {
      Swal.fire({
        title: '¿Estas seguro?',
        text: "Esta acción eliminará la respuesta elegida.",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Sí, eliminala!',
        cancelButtonText: '¡Nope!'
      }).then((result) => {
        if (result.value) {
          axios.delete(`http://localhost:4000/respuestas/${documentId}`)
          .then((response) => {
            this.deleteRow(i);
            Swal.fire(
              '¡Eliminado!',
              'La respuesta ha sido eliminada satisfactoriamente.',
              'success'
            );
          })
          .catch((error) => console.log(error));
        }
      })
      e.preventDefault();
    }
  }

  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>Respuestas</th>
            <th>Herramientas</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.answers ? this.state.answers.map((v, i) => (
              <tr key={i}>
              <td><a href={`/preguntas/${v.id}`}> {v.name}</a></td>
                <td><a href={`/respuestas/${v.id}`}> {v.answer}</a></td>
                <td><button className="btn btn-danger" href={`/respuestas/${v.id}`} onClick={this.deleteAnswerFactory(i, v.id)} data-index={i}> &times; Eliminar</button></td>
              </tr>
            )) : []
          }
          
        </tbody>
      </Table>
    );
  }
}