import { Col, Container, Row } from "react-bootstrap";

export function HeroSecondary() {
  return (
    <Container className='section position-relative' id='Coffee' fluid>
      <a id='#hero'></a>
      <Row className='h-100'>
        <Col xs={4}></Col>
        <Col className='h-100' lg={4}>
          <Container className=' h-100 d-flex flex-column align-items-center justify-content-around'>
            <Container className='text-center'>
              <p className='hexagon-title white-shadow text-nowrap'>Let's work together!</p>
              <p className='text-light white-shadow'>How do you take your coffee?</p>
            </Container>
          </Container>
        </Col>
        <Col xs={4}></Col>
      </Row>
    </Container>
  );
}
