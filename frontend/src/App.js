import React from 'react';
import MainContainer from './Partials/Container';
import QuestionsForm from './Preguntas/Form';
import TopNavbar from './Partials/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const questionForm = <QuestionsForm/>
  return (
    <div className="App">
      < TopNavbar />
      <MainContainer content={questionForm} />
    </div>
  );
}

export default App;
