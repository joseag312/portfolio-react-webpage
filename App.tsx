import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Col, Row } from "react-bootstrap";
import Background from "./src/components/Background";
import { BottomNav } from "./src/components/BottomNav";
import { HeroPrimary } from "./src/components/HeroPrimary";
import { HeroSecondary } from "./src/components/HeroSecondary";
import { Home } from "./src/components/Home";
import { ProjectSection } from "./src/components/ProjectSection";
import StackSection from "./src/components/StackSection";
import { TopNav } from "./src/components/TopNav";
import "./src/styles/styles.css";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Background />
        <a id='#home'></a>
        <TopNav />
        <Row className='offset-nav-top'>
          <Col>
            <Home />
          </Col>
        </Row>
        <Row>
          <Col>
            <HeroPrimary />
          </Col>
        </Row>
        <div className='section-qt'></div>
        <Row>
          <Col>
            <ProjectSection />
          </Col>
        </Row>
        <div className='section-qt'></div>
        <a id='Stack'></a>
        <Row className='offset-nav-bottom'>
          <Col>
            <StackSection />
          </Col>
        </Row>
        <Row>
          <Col>
            <HeroSecondary />
          </Col>
        </Row>
        <BottomNav />
      </QueryClientProvider>
    </>
  );
}

export default App;
