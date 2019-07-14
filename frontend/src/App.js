import React from 'react';
import MainContainer from './Partials/Container';
import QuestionsForm from './Questions/Form';
import QuestionsList from './Questions/List';
import TopNavbar from './Partials/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const questionForm = <QuestionsForm/>;
  const questionsList = <QuestionsList/>;
  return (
    <div className="App">
      < TopNavbar />
      <MainContainer content={questionsList} />
    </div>
  );
}

export default App;
