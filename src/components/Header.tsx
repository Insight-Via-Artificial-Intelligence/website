import Link from "next/link";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`navbar-modern fixed-top ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`} 
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={Link} href="/" className="fw-bold text-white d-flex align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="white"
            className="bi bi-brain me-2"
            viewBox="0 0 16 16"
          >
            <path d="M13.825 4.413c-.053-.084-.12-.156-.197-.218-.223-.179-.455-.319-.691-.413-.23-.092-.467-.134-.705-.134h-.003c-.292.001-.584.05-.871.147a3.607 3.607 0 0 0-.814.41c-.225.16-.427.35-.597.56-.175.218-.314.457-.41.712-.094.25-.142.514-.142.781v.108a2.81 2.81 0 0 0-.143-.78 3.59 3.59 0 0 0-.412-.713 3.634 3.634 0 0 0-.596-.56 3.607 3.607 0 0 0-.814-.41A3.509 3.509 0 0 0 7.168 3.6h-.003c-.238 0-.475.042-.705.134-.236.094-.468.234-.691.413-.077.062-.144.134-.197.218-.053.084-.093.176-.124.272a3.491 3.491 0 0 0-.106.592v.108c0-.267-.048-.53-.142-.781a3.59 3.59 0 0 0-.41-.712 3.634 3.634 0 0 0-.597-.56 3.607 3.607 0 0 0-.814-.41A3.509 3.509 0 0 0 2.707 3.6c-.238 0-.475.042-.705.134-.236.094-.468.234-.691.413-.077.062-.144.134-.197.218a1.532 1.532 0 0 0-.124.272 3.491 3.491 0 0 0-.106.592c0 .456.097.902.287 1.315.19.413.466.782.808 1.08.35.305.766.53 1.218.66.452.13.93.161 1.4.091a3.45 3.45 0 0 0 1.33-.54c.42-.286.784-.656 1.072-1.085a3.45 3.45 0 0 0 .54-1.33c.07-.47.039-.948-.091-1.4a3.45 3.45 0 0 0-.66-1.218 3.45 3.45 0 0 0-1.08-.808A3.517 3.517 0 0 0 2.707 3.6c.159 0 .318.03.47.09.152.06.295.147.42.257.125.11.231.242.314.39.083.147.142.307.177.472.035.165.047.334.035.5a1.93 1.93 0 0 1-.106.491 1.935 1.935 0 0 1-.242.45 1.93 1.93 0 0 1-.363.374 1.933 1.933 0 0 1-.46.26 1.93 1.93 0 0 1-.528.098c-.18 0-.359-.033-.528-.098a1.933 1.933 0 0 1-.46-.26 1.93 1.93 0 0 1-.363-.374 1.935 1.935 0 0 1-.242-.45 1.93 1.93 0 0 1-.106-.491c-.012-.166 0-.335.035-.5.035-.165.094-.325.177-.472.083-.148.189-.28.314-.39.125-.11.268-.197.42-.257.152-.06.311-.09.47-.09"/>
          </svg>
          <span>INSIGHT VIA ARTIFICIAL INTELLIGENCE</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#solutions" className="nav-link-modern text-white fw-500 mx-3">
              Solutions
            </Nav.Link>
            <Nav.Link href="#projects" className="nav-link-modern text-white fw-500 mx-3">
              Projects
            </Nav.Link>
            <Button variant="primary" className="ms-3">
              Contact Us
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
