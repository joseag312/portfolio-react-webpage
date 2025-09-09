import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { HexagonLoader } from "./HexagonLoader";
import ProjectCarousel from "./ProjectCarousel";
import { PROJECT_CONFIG, type Project, type ProjectKey } from "./ProjectConfig";
import ProjectList from "./ProjectList";

function ProjectContainer() {
  const [binStatus, setBinStatus] = useState<"inactive" | "loading" | "loaded">("inactive");
  const [projectName, setProjectName] = useState<ProjectKey | null>(null);
  const [projectData, setProjectData] = useState<Project | null>(null);

  function handleProjectSelect(name: ProjectKey) {
    setBinStatus("loading");
    setProjectName(name);
    setTimeout(() => {
      const data = PROJECT_CONFIG[name];
      if (!data) {
        setBinStatus("inactive");
        setProjectName(null);
        setProjectData(null);
        return;
      }
      setProjectData(data);
      setBinStatus("loaded");
    }, 600);
  }

  function handleExitClick() {
    setBinStatus("inactive");
    setProjectName(null);
    setProjectData(null);
  }

  let spinner: JSX.Element | null = null;
  if (binStatus === "loading") {
    spinner = (
      <div className='d-flex h-100 flex-column align-items-center justify-content-center'>
        <div className='hexagon-loader'>
          <HexagonLoader />
        </div>
      </div>
    );
  } else if (binStatus !== "loaded") {
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

  let project: JSX.Element | null = null;
  if (binStatus === "loaded" && projectData) {
    const d = projectData;
    project = (
      <div className='position-relative h-100'>
        <ProjectCarousel
          variant={d.variant}
          title1={d.title1}
          caption1={d.caption1}
          img1={d.img1}
          position1={d.position1}
          color1={d.color1}
          title2={d.title2}
          caption2={d.caption2}
          img2={d.img2}
          position2={d.position2}
          color2={d.color2}
          title3={d.title3}
          caption3={d.caption3}
          img3={d.img3}
          position3={d.position3}
          color3={d.color3}
        />
        <button className='exit-button-centered btn btn-black-white d-flex align-items-center justify-content-center' onClick={handleExitClick}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='20' height='20' fill='none' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='me-2'>
            <circle cx='12' cy='12' r='10'></circle>
            <line x1='15' y1='9' x2='9' y2='15'></line>
            <line x1='9' y1='9' x2='15' y2='15'></line>
          </svg>
          Exit
        </button>
      </div>
    );
  } else if (binStatus !== "loading") {
    project = <ProjectList onProjectSelect={handleProjectSelect} />;
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

export default ProjectContainer;
