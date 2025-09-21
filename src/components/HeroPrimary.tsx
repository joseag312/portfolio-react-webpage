import { Col, Container, Row } from "react-bootstrap";
import { LOGO } from "../config/CDN";

export function HeroPrimary() {
  return (
    <Container className='section position-relative' id='About' fluid>
      <a id='#hero'></a>
      <Row className='h-100'>
        <Col xs={4}></Col>
        <Col className='h-100' lg={4}>
          <Container className=' h-100 d-flex flex-column align-items-center justify-content-around'>
            <Container className='text-center'>
              <img className='d-block mx-auto mb-4 white-shadow-high' src={LOGO} alt='' width='' height={150} />
              <p className='hexagon-title white-shadow text-nowrap'>About Me</p>
              <p className='text-light white-shadow'>I'm passionate about developing robust, scalable, and user-friendly software.</p>
              <p className='text-light white-shadow'>
                {" "}
                I started{" "}
                <span className='white-shadow-high font-weight-bold'>
                  <span className='text-info'>GG</span>workz&nbsp;
                </span>
                to explore a modern tech stack and showcase my skills. Thanks for stopping by!
              </p>
            </Container>
          </Container>
        </Col>
        <Col xs={4}></Col>
      </Row>
    </Container>
  );
}
