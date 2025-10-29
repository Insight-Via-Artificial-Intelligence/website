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
    window.addEventListener("scroll", handleScroll);

    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Process Guardian - Insight via Artificial Intelligence</title>
        <meta
          name="description"
          content="Process Guardian - Advanced AI-powered process monitoring and optimization solution"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* Hero Section */}
      <section
        className="process-guardian-hero-image text-white"
        style={{ overflow: "visible" }}
      >
        <Container style={{ overflow: "visible" }}>
          <Row className="justify-content-center align-items-center min-vh-100">
            <Col
              lg={12}
              xl={10}
              className="text-center position-relative"
              style={{ overflow: "visible" }}
            >
              {/* Process monitoring visualization - left side */}
              <img
                src="/process_visual_1.png"
                alt="Process Monitoring Visualization"
                style={{
                  position: "absolute",
                  left: "-25%",
                  top: "60%",
                  transform: `translateY(calc(-50% + ${
                    scrollY * 0.05
                  }px)) translateX(${isLoaded ? "0" : "-20px"})`,
                  width: "400px",
                  height: "auto",
                  opacity: isLoaded ? 0.8 : 0,
                  mixBlendMode: "lighten",
                  zIndex: 15,
                  transition: "all 1.2s ease-out",
                }}
              />

              {/* Process analytics dashboard - right side */}
              <img
                src="/process_visual_2.png"
                alt="Process Analytics Dashboard"
                style={{
                  position: "absolute",
                  right: "-25%",
                  top: "60%",
                  transform: `translateY(calc(-50% + ${
                    scrollY * -0.04
                  }px)) translateX(${isLoaded ? "0" : "20px"})`,
                  width: "400px",
                  height: "auto",
                  opacity: isLoaded ? 0.8 : 0,
                  mixBlendMode: "lighten",
                  zIndex: 1,
                  transition: "all 1.2s ease-out",
                }}
              />

              {/* PG Circles Gradient Background */}
              <img
                src="/PG_circles_grad.png"
                alt="Process Guardian Background Circles"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "120%",
                  height: "auto",
                  opacity: 0.3,
                  zIndex: 2,
                  mixBlendMode: "lighten",
                  pointerEvents: "none",
                }}
              />

              <div
                className="hero-content"
                style={{ position: "relative", zIndex: 10, marginTop: "4rem" }}
              >
                <div className="hero-logo mb-4">
                  <img
                    src="/PG_logo.svg"
                    alt="Process Guardian Logo"
                    style={{
                      width: "350px",
                      height: "auto",
                      marginBottom: "1.5rem",
                      filter: "drop-shadow(0 0 20px rgba(42, 177, 117, 0.4))",
                    }}
                  />
                  <h1
                    className="hero-tagline fw-bold mb-4"
                    style={{ fontSize: "3.5rem", lineHeight: "1.1" }}
                  >
                    <span
                      style={{
                        color: "#2ab175",
                        textShadow:
                          "0 0 20px rgba(42, 177, 117, 0.8), 0 0 40px rgba(42, 177, 117, 0.4), 0 0 60px rgba(42, 177, 117, 0.2)",
                      }}
                    >
                      Process Guardian
                    </span>
                  </h1>
                </div>
                <p
                  className="lead mb-4 hero-motto"
                  style={{
                    fontSize: "2.5rem",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                  }}
                >
                  CLARITY, CONTROL, AND CONFIDENCE
                </p>
                <p className="mb-5 opacity-90" style={{ fontSize: "1.1rem" }}>
                  <b>Process Guardian</b> is your smart assistant for complex
                  operations. It continuously oversees IoT sensor-driven
                  processes—whether individual machines or entire interconnected
                  systems—working behind the scenes to keep everything running
                  seamlessly. When anomalies arise, it detects them early,
                  pinpoints the root cause, and guides your team toward the
                  right solution—preventing downtime, avoiding costly
                  disruptions, and keeping your operations performing at their
                  best.
                  <br />
                  <br />
                  Built to be modular and customisable, it adapts seamlessly to
                  your world—whether it is a manufacturing process or the
                  management of complex systems.
                </p>

                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <Button
                    variant="outline-light"
                    size="lg"
                    style={{ borderColor: "#2ab175", color: "#2ab175" }}
                    href="/contact"
                    as="a"
                  >
                    Request Demo
                  </Button>
                  <Button
                    variant="light"
                    size="lg"
                    style={{
                      backgroundColor: "#2ab175",
                      borderColor: "#2ab175",
                      color: "white",
                    }}
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
                <h2 className="display-4 fw-bold mb-4">
                  Process Intelligence Redefined
                </h2>
                <p className="lead">
                  Process Guardian combines cutting-edge AI with real-time
                  monitoring to transform how organizations manage, optimize,
                  and secure their critical processes.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="g-4">
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <div className="mb-3">
                    <i
                      className="bi bi-speedometer2"
                      style={{ fontSize: "3rem", color: "#2ab175" }}
                    ></i>
                  </div>
                  <h5 className="fw-bold mb-3">Real-Time Monitoring</h5>
                  <p className="text-muted">
                    Continuous process surveillance with intelligent anomaly
                    detection and instant alerting for critical deviations.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <div className="mb-3">
                    <i
                      className="bi bi-graph-up-arrow"
                      style={{ fontSize: "3rem", color: "#2ab175" }}
                    ></i>
                  </div>
                  <h5 className="fw-bold mb-3">Predictive Analytics</h5>
                  <p className="text-muted">
                    Advanced machine learning models that predict process
                    failures and optimization opportunities before they occur.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <div className="mb-3">
                    <i
                      className="bi bi-gear-wide-connected"
                      style={{ fontSize: "3rem", color: "#2ab175" }}
                    ></i>
                  </div>
                  <h5 className="fw-bold mb-3">Automated Optimization</h5>
                  <p className="text-muted">
                    Self-learning algorithms that continuously improve process
                    efficiency and adapt to changing operational conditions.
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

          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="mb-4">
                <h5 className="fw-bold text-primary">
                  Learns Your Process
                </h5>
                <p className="text-muted">
                  Utilises advanced machine learning to understand the normal operation of any business process. From manufacturing production lines to HR workflows, Process Guardian adapts to your unique operational patterns.
                </p>
              </div>
              <div className="mb-4">
                <h5 className="fw-bold text-primary">
                  One Score for Total Health
                </h5>
                <p className="text-muted">
                  Combines hundreds of metrics into a single, easy-to-understand health score. Know at a glance whether your process is performing optimally or needs attention.
                </p>
              </div>
              <div className="mb-4">
                <h5 className="fw-bold text-primary">
                  Pinpoints the Root Cause
                </h5>
                <p className="text-muted">
                  When issues arise, Process Guardian doesn't just alert you – it identifies the specific factors causing the problem, saving hours of investigation time.
                </p>
              </div>
              <div className="mb-4">
                <h5 className="fw-bold text-primary">
                  What If Scenarios
                </h5>
                <p className="text-muted">
                  Simulate changes before implementing them. Understand the potential impact of operational adjustments on your process health and performance.
                </p>
              </div>
              <div className="mb-4">
                <h5 className="fw-bold text-primary">
                  Actionable Alerts
                </h5>
                <p className="text-muted">
                  Receive intelligent notifications that provide not just what's wrong, but specific steps to resolve issues. Turn reactive maintenance into proactive optimization.
                </p>
              </div>
              <div className="mb-4">
                <h5 className="fw-bold text-primary">
                  Clarity from Complexity
                </h5>
                <p className="text-muted">
                  Transform overwhelming data streams into clear, actionable insights. Process Guardian makes complex industrial and business processes understandable for everyone.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-6 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="text-center mb-5">
                <h2 className="display-5 fw-bold mb-4">Industries We Serve</h2>
                <p className="lead text-muted">
                  Process Guardian adapts to diverse industries, delivering tailored solutions for your unique operational challenges.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={8}>
              <Row className="g-4">
                <Col md={6}>
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-check-circle-fill text-success me-3" style={{ fontSize: "1.5rem" }}></i>
                    <h5 className="fw-bold mb-0">Manufacturing & Production</h5>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-check-circle-fill text-success me-3" style={{ fontSize: "1.5rem" }}></i>
                    <h5 className="fw-bold mb-0">Energy & Utilities</h5>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-check-circle-fill text-success me-3" style={{ fontSize: "1.5rem" }}></i>
                    <h5 className="fw-bold mb-0">Chemical Processing</h5>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-check-circle-fill text-success me-3" style={{ fontSize: "1.5rem" }}></i>
                    <h5 className="fw-bold mb-0">Healthcare Operations</h5>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-check-circle-fill text-success me-3" style={{ fontSize: "1.5rem" }}></i>
                    <h5 className="fw-bold mb-0">Financial Services</h5>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-check-circle-fill text-success me-3" style={{ fontSize: "1.5rem" }}></i>
                    <h5 className="fw-bold mb-0">Supply Chain Management</h5>
                  </div>
                </Col>
              </Row>
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
                <h2 className="display-5 fw-bold mb-4">
                  Why Choose Process Guardian?
                </h2>
              </div>
            </Col>
          </Row>

          <Row className="g-4">
            <Col md={6} lg={3}>
              <div className="text-center">
                <div className="mb-3">
                  <div
                    className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <i
                      className="bi bi-shield-check text-white"
                      style={{ fontSize: "2rem" }}
                    ></i>
                  </div>
                </div>
                <h5 className="fw-bold mb-3">Enhanced Security</h5>
                <p className="text-muted">
                  Built-in security protocols protect your sensitive process
                  data and ensure compliance with industry standards.
                </p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="text-center">
                <div className="mb-3">
                  <div
                    className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <i
                      className="bi bi-lightning text-white"
                      style={{ fontSize: "2rem" }}
                    ></i>
                  </div>
                </div>
                <h5 className="fw-bold mb-3">Rapid Deployment</h5>
                <p className="text-muted">
                  Quick setup and integration with existing systems, minimizing
                  disruption to your operations.
                </p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="text-center">
                <div className="mb-3">
                  <div
                    className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <i
                      className="bi bi-arrows-fullscreen text-white"
                      style={{ fontSize: "2rem" }}
                    ></i>
                  </div>
                </div>
                <h5 className="fw-bold mb-3">Scalable Architecture</h5>
                <p className="text-muted">
                  Grows with your organization, from single processes to
                  enterprise-wide implementations.
                </p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="text-center">
                <div className="mb-3">
                  <div
                    className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <i
                      className="bi bi-headset text-white"
                      style={{ fontSize: "2rem" }}
                    ></i>
                  </div>
                </div>
                <h5 className="fw-bold mb-3">Expert Support</h5>
                <p className="text-muted">
                  Dedicated support team with deep domain expertise to ensure
                  your success.
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
              <h2 className="display-5 fw-bold mb-4">
                Ready to Transform Your Processes?
              </h2>
              <p className="lead mb-5">
                Discover how Process Guardian can optimize your operations,
                reduce costs, and improve efficiency.
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
