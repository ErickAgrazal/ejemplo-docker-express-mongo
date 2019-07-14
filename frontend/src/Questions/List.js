import axios from 'axios';
import React from 'react';
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
    .then((response) => {
      console.log(response);
      console.log(response.data);
      console.log(response.data.questions);
      this.setState({questions: response.data.questions});
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Preguntas</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.questions ? this.state.questions.map(v => (
              <tr>
                <th scope="row">{v.id}</th>
                <td>{v.name}</td>
              </tr>
            )) : []
          }
          
        </tbody>
      </Table>
    );
  }
}