import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2'

import { Table } from 'reactstrap';


export default class QuestionsList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      questions: []
    }
  }
  componentDidMount = () => {
    axios.get('http://localhost:4000/preguntas/')
    .then((response) => this.setState({ questions: response.data.questions }))
    .catch((error) => console.log(error));
  }

  deleteRow = (index) => {
    var questions = [...this.state.questions];
    questions.splice(index, 1);
    this.setState({questions});
  }

  deleteQuestionFactory = (i, documentId) => {
    return (e) => {
      Swal.fire({
        title: '¿Estas seguro?',
        text: "Esta acción eliminará la pregunta elegida.",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Sí, eliminala!',
        cancelButtonText: '¡Nope!'
      }).then((result) => {
        if (result.value) {
          axios.delete(`http://localhost:4000/preguntas/${documentId}`)
          .then((response) => {
            this.deleteRow(i);
            Swal.fire(
              '¡Eliminado!',
              'La pregunta ha sido eliminada satisfactoriamente.',
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
            <th>Preguntas</th>
            <th>Herramientas</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.questions ? this.state.questions.map((v, i) => (
              <tr key={i}>
                <td><a href={`/preguntas/${v.id}`}> {v.name}</a></td>
                <td><button className="btn btn-danger" href={`/preguntas/${v.id}`} onClick={this.deleteQuestionFactory(i, v.id)} data-index={i}> &times; Eliminar</button></td>
              </tr>
            )) : []
          }
          
        </tbody>
      </Table>
    );
  }
}