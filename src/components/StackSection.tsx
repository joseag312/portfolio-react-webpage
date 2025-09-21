import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

type StackKey = "front" | "back" | "ops";

const STACKS: Record<StackKey, { label: string; preview: string; icons: { name: string; img: string; scale?: number }[] }> = {
  front: {
    label: "Front-end",
    preview: "/frontend.png",
    icons: [
      { name: "React", img: "/react.png" },
      { name: "Bootstrap", img: "/bootstrap.png" },
      { name: "TypeScript", img: "/typescript.png" },
      { name: "Sass", img: "/sass.png" },
    ],
  },
  back: {
    label: "Back-end",
    preview: "/backend.png",
    icons: [
      { name: "Java", img: "/java.png" },
      { name: "Spring", img: "/spring.png" },
      { name: "Python", img: "/python.png" },
      { name: "SQL", img: "/sql.png" },
    ],
  },
  ops: {
    label: "DevOps",
    preview: "/devops.png",
    icons: [
      { name: "AWS", img: "/aws.png" },
      { name: "Linux", img: "/linux.png" },
      { name: "Tomcat", img: "/tomcat.png" },
    ],
  },
};

function OrbitNodes({ type }: { type: StackKey }) {
  const stack = STACKS[type];
  const radius = 120;

  return (
    <div className='orbit-container'>
      {stack.icons.map((icon, i) => {
        const count = stack.icons.length;
        const angle = (360 / count) * (count - i) + 225;
        return (
          <div
            key={icon.name}
            className='orbit-node'
            style={{
              transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
            }}
          >
            <div className='orbit-content' style={{ "--delay": `${i * 0.15}s` } as React.CSSProperties}>
              <img
                src={icon.img}
                alt={icon.name}
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function StackSection() {
  const [active, setActive] = useState<StackKey | null>(null);

  return (
    <Container className='stack-section position-relative'>
      <Row className='h-20 mb-3'>
        <Col>
          <Container className='h-100 d-flex flex-column align-items-center justify-content-end'>
            <p className='text-center text-light white-shadow hexagon-title'>Current Stack ⚙️</p>
          </Container>
        </Col>
      </Row>

      <Row className='h-80 d-flex align-items-center justify-content-center'>
        {(Object.keys(STACKS) as StackKey[]).map((key) => {
          const stack = STACKS[key];
          const isActive = active === key;
          return (
            <Col xs={12} md={4} key={key} className='p-3 h-100 d-flex flex-column align-items-center'>
              <div className={`root-node ${isActive ? "active" : ""}`} onClick={() => setActive(isActive ? null : key)}>
                <img src={stack.preview} alt={stack.label} width='100' height='100' className='stack-icon' />
                {isActive && <OrbitNodes type={key} />}
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
