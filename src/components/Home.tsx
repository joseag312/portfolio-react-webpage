import { Col, Container, Row } from "react-bootstrap";

export function Home() {
  return (
    <Container className='section position-relative' id='Home' fluid>
      <Row className='h-100'>
        <Col md={1} className='d-md-block d-sm-none'></Col>
        <Col className='h-100' md='auto'>
          <Container className=' h-100 d-flex flex-column align-items-center justify-content-around'>
            <br className='d-none d-md-block' />
            <Container className='text-center'>
              <p className='hexagon-title white-shadow text-nowrap'>Hi! I'm Jose.</p>
              <p className='hexagon-subtitle white-shadow text-nowrap'>A software engineer&nbsp;☕️</p>
            </Container>
          </Container>
        </Col>
        <Col md={9} className='d-md-block d-sm-none'></Col>
      </Row>
    </Container>
  );
}
