import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/esm/Nav";
import FavIcon from "./FavIcon";

export function BottomNav() {
  return (
    <Navbar bg='dark' variant='dark' fixed='bottom'>
      <Container fluid className='justify-content-end'>
        <Nav>
          <Nav.Link href='https://www.linkedin.com/in/jose-azuara/'>
            <FavIcon iconType='LinkedIn' />
          </Nav.Link>
          <Nav.Link href='https://github.com/joseag312'>
            <FavIcon iconType='GitHub' />
          </Nav.Link>
          <Nav.Link href='https://leetcode.com/u/joseag312/'>
            <FavIcon iconType='LeetCode' />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
