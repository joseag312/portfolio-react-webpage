import type { JSX } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { buildProjectFromConfig, type ProjectKey } from "../config/ProjectConfig";
import { HexagonLoader } from "./HexagonLoader";
import ProjectCarousel from "./ProjectCarousel";
import ProjectList from "./ProjectList";

function ProjectContainer() {
  const [binStatus, setBinStatus] = useState<"inactive" | "loading" | "loaded">("inactive");
  const [prebuilt, setPrebuilt] = useState<JSX.Element | null>(null);
  const [anim, setAnim] = useState<"enter" | "exit" | null>("enter");

  async function handleProjectSelect(name: ProjectKey) {
    const project = buildProjectFromConfig(name);
    if (!project) {
      setBinStatus("inactive");
      setPrebuilt(null);
      return;
    }

    setAnim("exit");
    setTimeout(() => {
      setBinStatus("loading");
      setAnim("enter");
      setPrebuilt(<ProjectCarousel project={project} />);
    }, 400);

    const urls = project.slides.flatMap((s) => [s.imgDesktop, s.imgMobile].filter(Boolean) as string[]);
    const preload = Promise.all(
      urls.map(
        (url) =>
          new Promise<void>((resolve) => {
            const img = new Image();
            img.onload = img.onerror = () => resolve();
            img.src = url!;
          })
      )
    );

    const minDuration = new Promise((res) => setTimeout(res, 3500));
    await Promise.all([preload, minDuration]);
    setAnim("exit");
    setTimeout(() => {
      setBinStatus("loaded");
      setAnim("enter");
    }, 400);
  }

  function handleExitClick() {
    setAnim("exit");
    setTimeout(() => {
      setBinStatus("inactive");
      setPrebuilt(null);
      setAnim("enter");
    }, 400);
  }

  return (
    <div className='h-100 position-relative p-5'>
      <div className='h-100 border rounded position-relative overflow-hidden'>
        {binStatus === "inactive" && (
          <div className={`h-100 ${anim === "enter" ? "bin-fade-enter" : anim === "exit" ? "bin-fade-exit" : ""}`}>
            <Row className='h-20'>
              <Col className='h-100'>
                <Container className='h-100 mt-1 d-flex flex-column align-items-center justify-content-end'>
                  <p className='text-center text-light white-shadow hexagon-title'>Porftolio 🥽</p>
                </Container>
              </Col>
            </Row>
            <ProjectList onProjectSelect={handleProjectSelect} anim={anim} />
          </div>
        )}

        {binStatus === "loading" && (
          <div className={`h-100 white-fill d-flex align-items-center justify-content-center ${anim === "enter" ? "bin-fade-enter" : anim === "exit" ? "bin-fade-exit" : ""}`}>
            <div className='hexagon-loader'>
              <HexagonLoader />
            </div>
          </div>
        )}

        {binStatus === "loaded" && (
          <div className={`h-100 border rounded position-relative white-fill-2 ${anim === "enter" ? "bin-fade-enter" : anim === "exit" ? "bin-fade-exit" : ""}`}>
            {prebuilt}
            <button className='exit-button-centered btn btn-black-white d-flex align-items-center justify-content-center' onClick={handleExitClick}>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='20' height='20' fill='none' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='me-2'>
                <circle cx='12' cy='12' r='10'></circle>
                <line x1='15' y1='9' x2='9' y2='15'></line>
                <line x1='9' y1='9' x2='15' y2='15'></line>
              </svg>
              Exit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectContainer;
