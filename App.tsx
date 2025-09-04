import { Col, Row } from "react-bootstrap";
import { QueryClient, QueryClientProvider } from "react-query";
import GgBackground from "./src/components/GgBackground";
import { GgBottomNav, GgTopNav } from "./src/components/GgNavBars";
import { GgHero, GgHero2, GgHome, GgProjects } from "./src/components/GgSection";
import GgStack from "./src/components/GgStack";
import "./src/styles/styles.css";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GgBackground />
        <GgTopNav />
        <Row className='offset-nav-top'>
          <Col>
            <GgHome />
          </Col>
        </Row>
        <Row>
          <Col>
            <GgHero />
          </Col>
        </Row>
        <div className='section-qt'></div>
        <Row>
          <Col>
            <GgProjects />
          </Col>
        </Row>
        <a id='Stack'></a>
        <div className='section-qt'></div>
        <Row className='offset-nav-bottom'>
          <GgStack />
        </Row>
        <Row>
          <Col>
            <GgHero2 />
          </Col>
        </Row>
        <GgBottomNav />
      </QueryClientProvider>
    </>
  );
}

export default App;
