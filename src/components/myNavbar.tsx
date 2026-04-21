import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">PL App</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Forside</Nav.Link>
          <Nav.Link as={Link} to="/table">Stilling</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}