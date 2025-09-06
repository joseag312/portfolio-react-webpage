import { Col, Row } from "react-bootstrap";
import ProjectContainer from "./ProjectContainer";

export function ProjectSection() {
  return (
    <div className='section position-relative' id='Projects'>
      <a id='#projects'></a>
      <Row className='h-100'>
        <Col className='h-100' xs={12}>
          <ProjectContainer />
        </Col>
      </Row>
    </div>
  );
}
