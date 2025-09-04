import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import GgCarousel from "./GgCarousel";
import { PROJECT_CONFIG } from "./GgProjectConfig";
import GgProjectList from "./GgProjectList";
import { GgHexagonLoader } from "./GgSVG";

function GgProjectContainer() {
  const [binStatus, setBinStatus] = useState("inactive");
  const [projectName, setProjectName] = useState("");
  const [projectData, setProjectData] = useState({});

  const projectList: any = PROJECT_CONFIG;

  // Handle Project Selection
  function handleProjectSelect(name: string) {
    setBinStatus("loading");
    setProjectName(name);
    setTimeout(() => {
      setProjectData(projectList[name]);
      setBinStatus("loaded");
    }, 3000); // Simulate loading time
  }

  // Exit Button Handler
  function handleExitClick() {
    setBinStatus("inactive");
    setProjectName("");
    setProjectData({});
  }

  // Conditional Display
  let spinner;
  if (binStatus === "loading") {
    spinner = (
      <div className='d-flex h-100 flex-column align-items-center justify-content-center'>
        <div className='hexagon-loader'>
          <GgHexagonLoader />
        </div>
      </div>
    );
  } else if (binStatus != "loaded") {
    spinner = (
      <Row className='h-20'>
        <Col className='h-100'>
          <Container className='h-100 mt-5 d-flex flex-column align-items-center justify-content-end'>
            <p className='text-center text-light white-shadow hexagon-title'>Here are some of my projects 🛠️</p>
            <p className='text-center text-light white-shadow'>Click to learn more</p>
          </Container>
        </Col>
      </Row>
    );
  }

  let project;
  if (binStatus === "loaded") {
    const data: any = projectData;
    project = (
      <div className='position-relative h-100'>
        <GgCarousel
          variant={data.variant}
          title1={data.title1}
          caption1={data.caption1}
          img1={data.img1}
          position1={data.position1}
          color1={data.color1}
          title2={data.title2}
          caption2={data.caption2}
          img2={data.img2}
          position2={data.position2}
          color2={data.color2}
          title3={data.title3}
          caption3={data.caption3}
          img3={data.img3}
          position3={data.position3}
          color3={data.color3}
        />
        <button className='exit-button-centered btn btn-black-white d-flex align-items-center justify-content-center' onClick={handleExitClick}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='20px' height='20px' fill='none' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='me-2'>
            <circle cx='12' cy='12' r='10'></circle>
            <line x1='15' y1='9' x2='9' y2='15'></line>
            <line x1='9' y1='9' x2='15' y2='15'></line>
          </svg>
          Exit
        </button>
      </div>
    );
  } else if (binStatus !== "loading") {
    project = <GgProjectList onProjectSelect={handleProjectSelect} />;
  }

  return (
    <div className='h-100 position-relative p-5'>
      <div
        className={`h-100 border rounded 
        ${binStatus === "loading" ? "white-fill" : ""} 
        ${binStatus === "loaded" ? "white-fill-2" : ""} `}
      >
        {spinner}
        {project}
      </div>
    </div>
  );
}

export default GgProjectContainer;
