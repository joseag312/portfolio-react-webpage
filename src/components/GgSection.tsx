import { Col, Container, Row } from "react-bootstrap";
import GgProjectContainer from "./GgProjectContainer";

export function GgHome() {
  return (
    <Container className='section position-relative' id='Home' fluid>
      <a id='#home'></a>
      <Row className='h-100'>
        <Col md={1} className='d-md-block d-sm-none'></Col>
        <Col className='h-100' md='auto'>
          <Container className=' h-100 d-flex flex-column align-items-center justify-content-around'>
            <br className='d-none d-md-block' />
            <Container className='text-center'>
              <p className='hexagon-title white-shadow text-nowrap'>Hi! I'm Jose.</p>
              <p className='hexagon-subtitle white-shadow text-nowrap'>A software engineer&nbsp;☕️</p>
              <p>You're welcome...</p>
            </Container>
          </Container>
        </Col>
        <Col md={9} className='d-md-block d-sm-none'></Col>
      </Row>
    </Container>
  );
}

export function GgHero() {
  return (
    <Container className='section position-relative' id='About' fluid>
      <a id='#hero'></a>
      <Row className='h-100'>
        <Col xs={4}></Col>
        <Col className='h-100' lg={4}>
          <Container className=' h-100 d-flex flex-column align-items-center justify-content-around'>
            <Container className='text-center'>
              <img className='d-block mx-auto mb-4 white-shadow' src='https://i.ibb.co/nzrLVz8/Logo2.png' alt='' width='' height={150} />
              <p className='hexagon-title white-shadow text-nowrap'>A quick rant...</p>
              <p className='text-light white-shadow'>
                I'm passionate about developing robust, scalable, and user-friendly software applications. This is where{" "}
                <span className='white-shadow-high font-weight-bold'>
                  <span className='text-info'>GG</span>workz&nbsp;
                </span>
                comes in!
              </p>
              <p className='px-5 text-light white-shadow'>With experience in the full software development life cycle, my goal is to use vanguard technologies to deliver innovative solutions for your business needs.</p>
            </Container>
          </Container>
        </Col>
        <Col xs={4}></Col>
      </Row>
    </Container>
  );
}

export function GgHero2() {
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

export function GgProjects() {
  return (
    <div className='section position-relative' id='Projects'>
      <a id='#projects'></a>
      <Row className='h-100'>
        <Col className='h-100' xs={12}>
          <GgProjectContainer />
        </Col>
      </Row>
    </div>
  );
}
