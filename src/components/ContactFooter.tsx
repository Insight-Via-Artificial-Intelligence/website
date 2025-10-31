import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ContactFooter: React.FC = () => {
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
      <Container style={{ position: 'relative', zIndex: 2 }} className="h-100 d-flex align-items-center">
        <Row className="w-100">
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

export default ContactFooter;