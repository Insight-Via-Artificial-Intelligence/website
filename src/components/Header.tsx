import Link from "next/link";
import { useRouter } from "next/router";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  // Check if we're on a solutions page
  const isSolutionsPage = router.pathname === '/process-guardian' || router.pathname === '/vital-guardian';
  
  // Check if we're on the contact page
  const isContactPage = router.pathname === '/contact';

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar 
      expand="lg" 
      className={`navbar-modern fixed-top ${isSolutionsPage ? 'navbar-gradient' : (isScrolled ? 'navbar-scrolled' : 'navbar-transparent')}`} 
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={Link} href="/" className="fw-bold text-white d-flex align-items-center">
          <span style={{ fontWeight: 900 }}>INSIGHT <span style={{ fontWeight: 400 }}>VIA</span> ARTIFICIAL INTELLIGENCE</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <NavDropdown 
              title="Solutions" 
              id="solutions-dropdown" 
              className="nav-dropdown-modern text-white fw-500 mx-3"
            >
              <NavDropdown.Item as={Link} href="/process-guardian">
                Process Guardian
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/vital-guardian">
                Vital Guardian
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#projects" className="nav-link-modern text-white fw-500 mx-3">
              Projects
            </Nav.Link>
            <Link href={isContactPage ? "/" : "/contact"} passHref legacyBehavior>
              <Button variant="primary" className="ms-3">
                {isContactPage ? "Home" : "Contact Us"}
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
