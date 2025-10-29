import Head from "next/head";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function ProcessGuardian() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 500);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Process Guardian - Insight via Artificial Intelligence</title>
        <meta name="description" content="Process Guardian - Advanced AI-powered process monitoring and optimization solution" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="process-guardian-hero-image text-white" style={{ overflow: 'visible' }}>
        <Container style={{ overflow: 'visible' }}>
          <Row className="justify-content-center align-items-center min-vh-100">
            <Col lg={12} xl={10} className="text-center position-relative" style={{ overflow: 'visible' }}>
              {/* Process monitoring visualization - left side */}
              <img 
                src="/process_visual_1.png" 
                alt="Process Monitoring Visualization"
                style={{
                  position: 'absolute',
                  left: '-25%',
                  top: '60%',
                  transform: `translateY(calc(-50% + ${scrollY * 0.05}px)) translateX(${isLoaded ? '0' : '-20px'})`,
                  width: '400px',
                  height: 'auto',
                  opacity: isLoaded ? 0.8 : 0,
                  mixBlendMode: 'lighten',
                  zIndex: 15,
                  transition: 'all 1.2s ease-out'
                }}
              />
              
              {/* Process analytics dashboard - right side */}
              <img 
                src="/process_visual_2.png" 
                alt="Process Analytics Dashboard"
                style={{
                  position: 'absolute',
                  right: '-25%',
                  top: '60%',
                  transform: `translateY(calc(-50% + ${scrollY * -0.04}px)) translateX(${isLoaded ? '0' : '20px'})`,
                  width: '400px',
                  height: 'auto',
                  opacity: isLoaded ? 0.8 : 0,
                  mixBlendMode: 'lighten',
                  zIndex: 1,
                  transition: 'all 1.2s ease-out'
                }}
              />
              
              <div className="hero-content" style={{ position: 'relative', zIndex: 10 }}>
                <div className="hero-logo mb-4">
                  <h1 className="hero-tagline fw-bold mb-4" style={{ fontSize: '4.5rem', lineHeight: '1.1' }}>
                    <span style={{ 
                      color: '#0ce76fff', 
                      textShadow: '0 0 20px rgba(12, 231, 111, 0.8), 0 0 40px rgba(12, 231, 111, 0.4), 0 0 60px rgba(12, 231, 111, 0.2)' 
                    }}>
                      Process Guardian
                    </span>
                  </h1>
                </div>
                <p
                  className="lead mb-4"
                  style={{
                    fontSize: "2.5rem",
                    color: "#0ce76fff",
                    fontWeight: "500",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                  }}
                >
                  MONITOR. OPTIMIZE. EXCEL.
                </p>
                <p className="mb-5 opacity-90" style={{ fontSize: "1.1rem" }}>
                  <b>Process Guardian</b> is an advanced AI-powered solution that
                  revolutionizes process monitoring and optimization across industrial
                  and operational environments. From real-time anomaly detection
                  and predictive analytics to automated optimization workflows,
                  Process Guardian transforms how organizations manage their critical
                  processes, ensuring peak performance, reduced downtime, and
                  enhanced operational excellence.
                </p>

                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <Button
                    variant="outline-light"
                    size="lg"
                    style={{ borderColor: "#0ce76fff", color: "#0ce76fff" }}
                    href="/contact"
                    as="a"
                  >
                    Request Demo
                  </Button>
                  <Button
                    variant="light"
                    size="lg"
                    style={{ backgroundColor: "#0ce76fff", borderColor: "#0ce76fff", color: "white" }}
                    href="/ProcessGuardian_Brochure.pdf"
                    download="ProcessGuardian_Brochure.pdf"
                    as="a"
                  >
                    <i className="bi bi-download me-2"></i>
                    Brochure
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Overview Section */}
      <section className="py-6 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="text-center mb-5">
                <h2 className="display-4 fw-bold mb-4">Process Intelligence Redefined</h2>
                <p className="lead">
                  Process Guardian combines cutting-edge AI with real-time monitoring to transform how organizations manage, optimize, and secure their critical processes.
                </p>
              </div>
            </Col>
          </Row>
          
          <Row className="g-4">
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <div className="mb-3">
                    <i className="bi bi-speedometer2" style={{ fontSize: '3rem', color: '#0ce76fff' }}></i>
                  </div>
                  <h5 className="fw-bold mb-3">Real-Time Monitoring</h5>
                  <p className="text-muted">
                    Continuous process surveillance with intelligent anomaly detection and instant alerting for critical deviations.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <div className="mb-3">
                    <i className="bi bi-graph-up-arrow" style={{ fontSize: '3rem', color: '#0ce76fff' }}></i>
                  </div>
                  <h5 className="fw-bold mb-3">Predictive Analytics</h5>
                  <p className="text-muted">
                    Advanced machine learning models that predict process failures and optimization opportunities before they occur.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <div className="mb-3">
                    <i className="bi bi-gear-wide-connected" style={{ fontSize: '3rem', color: '#0ce76fff' }}></i>
                  </div>
                  <h5 className="fw-bold mb-3">Automated Optimization</h5>
                  <p className="text-muted">
                    Self-learning algorithms that continuously improve process efficiency and adapt to changing operational conditions.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Key Features Section */}
      <section className="py-6">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="text-center mb-5">
                <h2 className="display-5 fw-bold mb-4">Key Features</h2>
              </div>
            </Col>
          </Row>
          
          <Row className="g-5 align-items-center">
            <Col lg={6}>
              <h3 className="fw-bold mb-4">Comprehensive Process Intelligence</h3>
              <div className="mb-4">
                <h5 className="fw-bold text-primary">Multi-Source Data Integration</h5>
                <p className="text-muted">
                  Seamlessly integrates data from sensors, databases, and systems to provide a unified view of your processes.
                </p>
              </div>
              <div className="mb-4">
                <h5 className="fw-bold text-primary">Advanced Analytics Engine</h5>
                <p className="text-muted">
                  Sophisticated algorithms analyze patterns, trends, and correlations to deliver actionable insights.
                </p>
              </div>
              <div className="mb-4">
                <h5 className="fw-bold text-primary">Customizable Dashboards</h5>
                <p className="text-muted">
                  Role-based dashboards that present relevant information to different stakeholders across your organization.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="bg-light p-5 rounded">
                <h4 className="fw-bold mb-4">Industries We Serve</h4>
                <ul className="list-unstyled">
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Manufacturing & Production</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Energy & Utilities</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Chemical Processing</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Healthcare Operations</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Financial Services</li>
                  <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Supply Chain Management</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-6 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="text-center mb-5">
                <h2 className="display-5 fw-bold mb-4">Why Choose Process Guardian?</h2>
              </div>
            </Col>
          </Row>
          
          <Row className="g-4">
            <Col md={6} lg={3}>
              <div className="text-center">
                <div className="mb-3">
                  <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-shield-check text-white" style={{ fontSize: '2rem' }}></i>
                  </div>
                </div>
                <h5 className="fw-bold mb-3">Enhanced Security</h5>
                <p className="text-muted">
                  Built-in security protocols protect your sensitive process data and ensure compliance with industry standards.
                </p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="text-center">
                <div className="mb-3">
                  <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-lightning text-white" style={{ fontSize: '2rem' }}></i>
                  </div>
                </div>
                <h5 className="fw-bold mb-3">Rapid Deployment</h5>
                <p className="text-muted">
                  Quick setup and integration with existing systems, minimizing disruption to your operations.
                </p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="text-center">
                <div className="mb-3">
                  <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-arrows-fullscreen text-white" style={{ fontSize: '2rem' }}></i>
                  </div>
                </div>
                <h5 className="fw-bold mb-3">Scalable Architecture</h5>
                <p className="text-muted">
                  Grows with your organization, from single processes to enterprise-wide implementations.
                </p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="text-center">
                <div className="mb-3">
                  <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-headset text-white" style={{ fontSize: '2rem' }}></i>
                  </div>
                </div>
                <h5 className="fw-bold mb-3">Expert Support</h5>
                <p className="text-muted">
                  Dedicated support team with deep domain expertise to ensure your success.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="solutions-cta-gradient text-white py-6">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="display-5 fw-bold mb-4">Ready to Transform Your Processes?</h2>
              <p className="lead mb-5">
                Discover how Process Guardian can optimize your operations, reduce costs, and improve efficiency.
              </p>
              <Button variant="light" size="lg" className="me-3">
                Schedule Consultation
              </Button>
              <Button variant="outline-light" size="lg">
                Download Datasheet
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
}