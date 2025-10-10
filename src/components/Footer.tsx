import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-5" style={{ 
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
            <h5 className="fw-bold mb-2 text-white">Insight Via Artificial Intelligence</h5>
            <p className="text-white mb-1" style={{ opacity: '0.9' }}>
              Transforming complex data into actionable intelligence through innovative AI solutions.
            </p>
            <p className="text-white mb-0" style={{ opacity: '0.8' }}>
              <small>Based in South Australia</small>
            </p>
          </Col>
          <Col lg={6} className="text-lg-end">
            <button className="btn btn-outline-light mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-download me-2"
                viewBox="0 0 16 16"
              >
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
              </svg>
              Download Brochure
            </button>
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
