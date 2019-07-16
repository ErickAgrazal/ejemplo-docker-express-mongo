import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';

import TopNavbar from './Partials/Navbar';
import QuesitonSwitch from './Questions/Switch';

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
                <Route path='/preguntas' component={QuesitonSwitch}/>
              </Col>
            </Row>
          </Container>
        </div>
      </Router>
    </div>
  );
}

export default App;
