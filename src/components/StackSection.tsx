import { BaseSyntheticEvent, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

interface StackType {
  type: string;
}

function StackCard({ type }: StackType) {
  let iconDescs: string[] = [];
  let imgPaths: string[] = [];
  let imgScale: string[] = [];

  if (type == "front") {
    iconDescs = ["React", "Bootstrap", "TypeScript", "Sass"];
    imgPaths = ["/react.png", "/bootstrap.png", "/typescript.png", "/sass.png"];
    imgScale = ["60", "60", "60", "60"];
  } else if (type == "back") {
    iconDescs = ["Java", "Spring", "Python", "SQL"];
    imgPaths = ["/java.png", "/spring.png", "/python.png", "/sql.png"];
    imgScale = ["80", "60", "60", "60"];
  } else if (type == "ops") {
    iconDescs = ["AWS", "Linux", "TomCat"];
    imgPaths = ["/aws.png", "/linux.png", "/tomcat.png", "/sass.png"];
    imgScale = ["80", "80", "80"];
  }

  return (
    <>
      {iconDescs.map((iconDesc, index) => (
        <div key={iconDesc} className='h-20 w-100 d-flex flex-row align-items-center justify-content-around'>
          <div className='h-100 flex-column d-flex justify-content-center align items-center'>
            <img className={`tech-icon-${imgScale[index]} d-block white-shadow h-100`} src={imgPaths[index]} alt='' width='' />
            <p className='stack-text white-shadow m-0 text-center'>{iconDesc}</p>
          </div>
        </div>
      ))}
    </>
  );
}

function StackSection() {
  const [frontActive, setFrontActive] = useState(false);
  const [backActive, setBackActive] = useState(false);
  const [opsActive, setOpsActive] = useState(false);

  function handleClickFront(e: BaseSyntheticEvent) {
    document.querySelector(".stack-front")?.classList.remove("show");
    document.querySelector(".stack-back")?.classList.add("show");
    document.querySelector(".stack-ops")?.classList.add("show");
    setTimeout(showFrontList, 300);
  }

  function showFrontList() {
    setFrontActive(true);
    setBackActive(false);
    setOpsActive(false);
  }

  function handleClickBack(e: BaseSyntheticEvent) {
    document.querySelector(".stack-front")?.classList.add("show");
    document.querySelector(".stack-back")?.classList.remove("show");
    document.querySelector(".stack-ops")?.classList.add("show");
    setTimeout(showBackList, 300);
  }

  function showBackList() {
    setFrontActive(false);
    setBackActive(true);
    setOpsActive(false);
  }

  function handleClickOps(e: BaseSyntheticEvent) {
    document.querySelector(".stack-front")?.classList.add("show");
    document.querySelector(".stack-back")?.classList.add("show");
    document.querySelector(".stack-ops")?.classList.remove("show");
    setTimeout(showOpsList, 300);
  }

  function showOpsList() {
    setFrontActive(false);
    setBackActive(false);
    setOpsActive(true);
  }

  let frontList;
  if (!frontActive) {
    frontList = <img className='d-block stack-icon' src='/frontend.png' alt='' width='100' height='100' />;
  } else {
    frontList = <StackCard type='front'></StackCard>;
  }

  let backList;
  if (!backActive) {
    backList = <img className='d-block stack-icon' src='/backend.png' alt='' width='100' height='100' />;
  } else {
    backList = <StackCard type='back'></StackCard>;
  }

  let opsList;
  if (!opsActive) {
    opsList = <img className='d-block stack-icon' src='/devops.png' alt='' width='100' height='100' />;
  } else {
    opsList = (
      <>
        <StackCard type='ops'></StackCard>
      </>
    );
  }

  return (
    <Container
      className='h-100 section
     position-relative'
    >
      <Row className='h-20'>
        <Col className='h-100'>
          <Container className='h-100 d-flex flex-column align-items-center justify-content-end'>
            <p className='text-center text-light white-shadow hexagon-title'>Been using some cool stuff! 🥽</p>
            <p className='text-center text-light white-shadow'>Click to learn more</p>
          </Container>
        </Col>
      </Row>
      <Row className='h-80'>
        <Col md={4} className='p-3 h-80'>
          <div className={`h-100 stack-front fade show ${frontActive ? "border rounded box-white-shadow" : ""}`}>
            <div className='h-100 d-flex flex-column align-items-center justify-content-around'>
              <div onClick={frontActive ? () => {} : handleClickFront} className='stack-front h-100 w-100 fade show d-flex flex-column align-items-center justify-content-around'>
                {frontList}
              </div>
            </div>
          </div>
        </Col>
        <Col md={4} className='p-3 h-80'>
          <div className={`h-100 stack-back fade show ${backActive ? "border rounded box-white-shadow" : ""}`}>
            <div className='h-100 d-flex flex-column align-items-center justify-content-center'>
              <div onClick={backActive ? () => {} : handleClickBack} className='stack-back h-100 w-100 fade show d-flex flex-column align-items-center justify-content-around'>
                {backList}
              </div>
            </div>
          </div>
        </Col>
        <Col md={4} className='p-3 h-80'>
          <div className={`h-100 stack-ops fade show ${opsActive ? "border rounded box-white-shadow " : ""}`}>
            <div className='h-100 d-flex flex-column align-items-center justify-content-center'>
              <div onClick={opsActive ? () => {} : handleClickOps} className='stack-ops h-100 w-100 fade show d-flex flex-column align-items-center justify-content-around'>
                {opsList}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default StackSection;
