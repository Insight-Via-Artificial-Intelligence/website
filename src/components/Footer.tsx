import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-3" style={{ 
      background: `
        radial-gradient(circle at 20% 30%, rgba(15, 30, 57, 0.9) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(16, 29, 34, 0.9) 0%, transparent 50%),
        radial-gradient(circle at 50% 90%, rgba(22, 42, 50, 0.8) 0%, transparent 50%),
        radial-gradient(circle at 90% 20%, rgba(21, 41, 76, 0.8) 0%, transparent 50%),
        linear-gradient(135deg, #050a14 0%, #0a0f19 25%, #121722 50%, #1a202b 75%, #1c2530 100%)
      `,
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        content: '',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 25% 75%, rgba(255, 255, 255, 0.01) 0%, transparent 50%),
          radial-gradient(circle at 75% 25%, rgba(255, 255, 255, 0.005) 0%, transparent 50%)
        `,
        opacity: 0.8
      }}></div>
      <Container style={{ position: 'relative', zIndex: 2 }}>
        <Row className="align-items-center">
          <Col lg={6} className="mb-3 mb-lg-0">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                fill="white"
                className="bi bi-brain"
                viewBox="0 0 2103 1252"
              >
                <g id="Layer_1-2" data-name="Layer 1">
                  <g>
                    <polygon points="117 0 545 1252 428 1252 117 342.25 0 0 117 0"/>
                    <polygon points="1986 909.75 1675 0 1558 0 1986 1252 2103 1252 1986 909.75"/>
                    <polygon points="1324 0 1130 567.5 1013 567.5 1207 0 1090 0 888.06 590.75 614 684.5 856.01 684.5 720.5 1080.88 351 0 234 0 662 1252 779 1252 973.01 684.5 1090 684.5 896 1252 1013 1252 1214.95 661.25 1489 567.5 1247 567.5 1382.5 171.13 1752 1252 1869 1252 1441 0 1324 0"/>
                  </g>
                </g>
              </svg>
            </div>
            <h5 className="fw-bold mb-4 text-white">
              <span style={{ fontWeight: 900 }}>INSIGHT <span style={{ fontWeight: 400 }}>VIA</span><br />ARTIFICIAL INTELLIGENCE</span>
            </h5>
            {/* <p className="text-white mb-4" style={{ opacity: '0.9' }}>
              Transforming complex data into actionable intelligence through innovative AI solutions.
            </p> */}
          </Col>
          <Col lg={6} className="text-lg-end">
            <img 
              src="/south-australia-logo.svg" 
              alt="South Australia" 
              width="150" 
              height="auto" 
              className="mb-2"
            />
            <p className="text-white mb-0" style={{ opacity: '0.8', lineHeight: '1.2' }}>
              <small><em>Based in South Australia</em></small>
            </p>
            <p className="text-white mb-0" style={{ opacity: '0.8', lineHeight: '1.2', marginTop: '-0.2rem' }}>
              <small><em>Kaurna Country</em></small>
            </p>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col className="text-center">
            <div className="text-white" style={{ opacity: '0.8' }}>
              <small>© 2025 Insight Via Artificial Intelligence. All rights reserved.</small>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
