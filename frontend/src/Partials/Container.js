import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class MainContainer extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Container>
        <Row className="mt-5">
          <Col>
            { this.props.content }
          </Col>
        </Row>
      </Container>
    )
  }
}
