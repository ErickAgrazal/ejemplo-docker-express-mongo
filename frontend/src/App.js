import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';

import TopNavbar from './Partials/Navbar';
import QuestionSwitch from './Questions/Switch';
import UserSwitch from './Users/Switch';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          < TopNavbar />
          <Container>
            <Row className="mt-5">
              <Col>
                {/* <Route exact path="/" component={Home} /> */}
                <Route path='/preguntas' component={QuestionSwitch}/>
                <Route path='/usuarios' component={UserSwitch}/>
              </Col>
            </Row>
          </Container>
        </div>
      </Router>
    </div>
  );
}

export default App;
