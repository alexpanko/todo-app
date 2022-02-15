import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { signInWithGoogle, signOut } from '../firebaseConfig';

const Header = ({ onAdd, showAdd, user }) => {
  return (
    <Navbar bg="light" expand="lg" className="my-2">
      <Container>
        <Navbar.Brand expand="sm" href="#home">
          To-do list for a great day
        </Navbar.Brand>
        <Nav className="justify-content-end">
          {user ? (
            <div>
              <Button
                variant={showAdd ? 'success' : 'primary'}
                className="m-1"
                onClick={onAdd}
              >
                {showAdd ? 'Close' : 'Add task'}
              </Button>
              <Button variant="danger" className="m-1" onClick={signOut}>
                Sign out
              </Button>
            </div>
          ) : (
            <Button className="m-1" onClick={signInWithGoogle}>
              Sign in with Google
            </Button>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
