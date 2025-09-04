import { useEffect, useRef, useState } from "react";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import GgFavIcon from "./GgFavIcon";

export function GgTopNav() {
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);

  // Close Navbar on Outside Click
  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (navbarRef.current && !(navbarRef.current as any).contains(event.target)) {
        setExpanded(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <Navbar variant='dark' bg='dark' expand='lg' fixed='top' expanded={expanded} onToggle={(isExpanded) => setExpanded(isExpanded)} ref={navbarRef}>
      <Container fluid>
        <Navbar.Brand href='#Home'>
          <Image src={"https://i.ibb.co/nzrLVz8/Logo2.png"} fluid={false} height='24px' width='21px' className='d-inline-block align-text-top'></Image>
          &nbsp;&nbsp;&nbsp;<span className='text-info'>GG</span>workz
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbar-dark-example' onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id='navbar-dark-example'>
          <Nav>
            <Nav.Link className='ml-1' href='#About' onClick={() => setExpanded(false)}>
              About
            </Nav.Link>
            <Nav.Link className='ml-1' href='#Projects' onClick={() => setExpanded(false)}>
              Projects
            </Nav.Link>
            <Nav.Link className='ml-1' href='#Stack' onClick={() => setExpanded(false)}>
              Tech Stack
            </Nav.Link>
            <Nav.Link className='ml-1' href='#Coffee' onClick={() => setExpanded(false)}>
              Coffee?
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export function GgBottomNav() {
  return (
    <Navbar bg='dark' variant='dark' fixed='bottom'>
      <Container fluid className='justify-content-end'>
        <Nav>
          <Nav.Link href='https://www.linkedin.com/in/jose-azuara/'>
            <GgFavIcon iconType='LinkedIn' />
          </Nav.Link>
          <Nav.Link href='https://github.com/joseag312'>
            <GgFavIcon iconType='GitHub' />
          </Nav.Link>
          <Nav.Link href='tel:555-555-5555'>
            <GgFavIcon iconType='Phone' />
          </Nav.Link>
          <Nav.Link href='mailto:example@example.com'>
            <GgFavIcon iconType='Mail' />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
