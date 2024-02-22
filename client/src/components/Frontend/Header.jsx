import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();

  useEffect(()=>{
    console.log("USER", user)
  }, [isAuthenticated])

  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-5">
      <Container>
        <Link to="/" className="navbar-brand">
          First Project
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isAuthenticated ? (
              <Link to="/admin">My Account</Link>
            ) : (
              <Link
                onClick={() =>
                  loginWithRedirect({
                    appState: { targetUrl: window.location.pathname },
                  })
                }
              >
                Login
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
