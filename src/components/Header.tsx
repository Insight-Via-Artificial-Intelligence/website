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
  const [isMobile, setIsMobile] = useState(false);
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

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991.98);
    };

    // Initial check
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Navbar 
      expand="lg" 
      className={`navbar-modern fixed-top ${isSolutionsPage ? 'navbar-gradient' : (isScrolled ? 'navbar-scrolled' : 'navbar-transparent')}`} 
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={Link} href="/" className="fw-bold text-white d-flex align-items-center">
          {/* Desktop text - hidden on mobile */}
          <span className="d-none d-lg-inline" style={{ fontWeight: 900 }}>
            INSIGHT <span style={{ fontWeight: 400 }}>VIA</span> ARTIFICIAL INTELLIGENCE
          </span>
          {/* Mobile logo - hidden on desktop */}
          <img 
            src="/logo_only_gray.svg" 
            alt="IVAI Logo" 
            className="d-lg-none navbar-logo-mobile"
            style={{ height: '40px', width: 'auto' }}
          />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {isMobile ? (
              // Mobile: Show expanded submenu structure
              <>
                <div className="text-center text-white fw-600" style={{ fontSize: '1.1rem', padding: '0.75rem 0' }}>
                  Solutions
                </div>
                <div className="d-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '0.75rem', width: '100%', marginBottom: '1rem' }}>
                  <Link href="/process-guardian" passHref legacyBehavior>
                    <Button 
                      variant="link" 
                      className="text-white"
                      style={{ 
                        fontSize: '0.85rem', 
                        fontWeight: 400,
                        backgroundColor: 'rgba(33, 37, 41, 0.4)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        textTransform: 'none',
                        padding: '0.75rem 0.5rem',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(33, 37, 41, 0.4)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      Process Guardian
                    </Button>
                  </Link>
                  <Link href="/vital-guardian" passHref legacyBehavior>
                    <Button 
                      variant="link" 
                      className="text-white"
                      style={{ 
                        fontSize: '0.85rem', 
                        fontWeight: 400,
                        backgroundColor: 'rgba(33, 37, 41, 0.4)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        textTransform: 'none',
                        padding: '0.75rem 0.5rem',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(33, 37, 41, 0.4)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      Vital Guardian
                    </Button>
                  </Link>
                </div>
              </>
            ) : (
              // Desktop: Normal dropdown
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
            )}
            <Link href={isContactPage ? "/" : "/contact"} passHref legacyBehavior>
              <Button 
                variant="primary" 
                className="ms-3"
                style={isSolutionsPage ? {
                  background: 'linear-gradient(135deg, #3dc799ff 0%, #3ba164ff 100%)',
                  border: 'none'
                } : {}}
              >
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
