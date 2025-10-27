import Head from "next/head";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function VitalGuardian() {
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
        <title>Vital Guardian - Insight via Artificial Intelligence</title>
        <meta
          name="description"
          content="Vital Guardian - AI-powered vital signs monitoring and health analytics solution"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="vital-guardian-hero-image text-white" style={{ overflow: 'visible' }}>
        <Container style={{ overflow: 'visible' }}>
          <Row className="justify-content-center align-items-center min-vh-100">
            <Col lg={12} xl={10} className="text-center position-relative" style={{ overflow: 'visible' }}>
              {/* VG Person 1 - left side */}
              <img 
                src="/vg_person1.png" 
                alt="VG Person 1"
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
              
              {/* VG Person 2 - right side */}
              <img 
                src="/vg_person2.png" 
                alt="VG Person 2"
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
                  <svg
                    id="vital-guardian-logo"
                    className="vital-guardian-logo"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1184.13 339.39"
                    width="600"
                    height="auto"
                  >
                    <defs>
                      <style>{`.cls-1 { fill: #fff; }`}</style>
                    </defs>
                    <g id="Object">
                      <rect
                        id="line"
                        className="cls-1"
                        x="425.04"
                        y="13.19"
                        width="10.7"
                        height="313"
                      />
                      <g id="logo">
                        <path
                          className="cls-1"
                          d="M224.13,199.51c-13.19,19.03-32.03,40.57-54.79,58.38-39.71-29.41-88.85-92.52-98.84-171.21,8.68-3.48,17.59-6.51,26.71-9.07,2-.56,4.01-1.11,6.04-1.61,11.21,75.49,45.11,114.34,66.09,136.46,1.64-1.64,10.46-12.44,18.45-22.48,3.26.39,6.51.92,9.74,1.56,9.1,1.75,18,4.45,26.6,7.99Z"
                        />
                        <path
                          className="cls-1"
                          d="M268.18,86.68c-2.62,18.23-6.62,33.75-11.38,47.61-10.41-4.56-21.15-8.32-32.14-11.21,4.62-14,9.21-31.67,10.77-47.08,2.03.5,4.03,1.06,6.04,1.61h.03c9.13,2.56,18,5.59,26.68,9.07Z"
                        />
                        <path
                          className="cls-1"
                          d="M330.55,122.04c-8.43-6.46-30.05-19.9-30.5-20.2,2.14-11.88,3.53-23.93,4.2-36.15-10.8-5.43-62.88-31.83-134.26-31.83h-1.34c-65.72,0-123.88,26.63-134.26,31.83,10.48,127.22,82.23,199.32,134.93,233.99,40.51-26.32,74.14-65.05,94.91-100.26-9.21-6.54-19.14-12.13-29.61-16.64-10.6-4.62-21.79-8.13-33.39-10.38-8.04-1.59-16.28-2.59-24.65-2.95-2.53-3.26-4.95-6.62-7.26-10.05-5.06-7.49-9.6-15.33-13.61-23.51,61.27-4.44,115.28,20.19,151.23,55.01-34.5,73.17-83.43,116.73-137.63,148.48C47.76,275.1,6.37,149.54,1.32,77.91.63,68.19-.25,55.44.06,45.91,39.93,22.2,97.06,0,169.33,0s126.01,20.3,169.27,45.91c.03,17.25-.98,45.09-8.04,76.13Z"
                        />
                      </g>
                      <g>
                        <path
                          className="cls-1"
                          d="M567.1,159.58c-.27.82-1.22,1.5-2.18,1.5h-18.36c-.95,0-1.9-.68-2.18-1.5l-31.14-92.21c-.27-.68.27-1.5,1.09-1.5h15.23c.95,0,1.77.68,2.18,1.5l25.02,81.87,24.62-81.87c.27-.82,1.09-1.5,2.04-1.5h13.19c.82,0,1.36.82,1.09,1.5l-30.6,92.21Z"
                        />
                        <path
                          className="cls-1"
                          d="M608.72,161.07c-.82,0-1.63-.82-1.63-1.63l1.09-46.38-1.09-45.56c0-.82.82-1.63,1.63-1.63h14.14c.82,0,1.63.82,1.63,1.63l-1.09,45.56,1.09,46.38c0,.82-.82,1.63-1.63,1.63h-14.14Z"
                        />
                        <path
                          className="cls-1"
                          d="M663.39,161.07c-.82,0-1.63-.82-1.63-1.63l1.22-45.83-1.09-34.68h-25.7c-.82,0-1.63-.82-1.63-1.63v-9.79c0-.82.82-1.63,1.63-1.63h68.95c.82,0,1.63.82,1.63,1.63v9.79c0,.82-.82,1.63-1.63,1.63h-25.7l-.95,34.68,1.22,45.83c0,.82-.82,1.63-1.63,1.63h-14.69Z"
                        />
                        <path
                          className="cls-1"
                          d="M770.7,161.07c-.95,0-1.9-.68-2.18-1.5l-8.16-24.62h-37.54l-7.89,24.62c-.27.82-1.22,1.5-2.18,1.5h-13.6c-.82,0-1.36-.82-1.09-1.5l32.5-92.21c.27-.82,1.22-1.5,2.18-1.5h18.9c.95,0,1.9.68,2.18,1.5l31.96,92.21c.27.68-.27,1.5-1.09,1.5h-14.01ZM755.87,121.09l-14.42-43.52-14.14,43.52h28.56Z"
                        />
                        <path
                          className="cls-1"
                          d="M796.13,161.07c-.82,0-1.63-.82-1.63-1.63l1.09-46.92-1.09-45.02c0-.82.82-1.63,1.63-1.63h14.14c.82,0,1.63.82,1.63,1.63l-.82,44.06.82,36.45h39.85c.82,0,1.63.82,1.63,1.63v9.79c0-.82-.82,1.63-1.63,1.63h-55.62Z"
                        />
                        <path
                          className="cls-1"
                          d="M561.94,285.97c-26.52,0-45.15-19.86-45.15-49.5s17.95-49.5,45.02-49.5c22.3,0,36.86,11.29,41.75,30.87.27.82-.41,1.63-1.22,1.63h-13.87c-.95,0-1.77-.68-2.04-1.63-3.26-11.56-11.83-17.54-24.62-17.54-17.41,0-27.88,13.74-27.88,36.45s11.02,35.9,28.7,35.9c15.91,0,25.16-9.93,25.43-26.52h-25.7c-.82,0-1.63-.82-1.63-1.63v-9.38c0-.82.82-1.63,1.63-1.63h41.89c.82,0,1.63.82,1.63,1.63.14,33.73-15.78,50.86-43.93,50.86Z"
                        />
                        <path
                          className="cls-1"
                          d="M654.28,285.97c-24.48,0-37.13-13.46-36.99-37.54l.27-27.61-.82-30.33c0-.82.82-1.63,1.63-1.63h14.55c.82,0,1.63.82,1.63,1.63l-.68,29.92.14,27.88c0,14.82,5.98,23.8,20.26,23.8s21.22-8.98,21.22-23.8v-27.47l-.54-30.33c0-.82.82-1.63,1.63-1.63h13.06c.82,0,1.63.82,1.63,1.63l-.54,30.33v27.61c0,24.07-12.1,37.54-36.45,37.54Z"
                        />
                        <path
                          className="cls-1"
                          d="M767.02,284.07c-.95,0-1.9-.68-2.18-1.5l-8.16-24.62h-37.54l-7.89,24.62c-.27.82-1.22,1.5-2.18,1.5h-13.6c-.82,0-1.36-.82-1.09-1.5l32.5-92.21c.27-.82,1.22-1.5,2.18-1.5h18.9c.95,0,1.9.68,2.18,1.5l31.96,92.21c.27.68-.27,1.5-1.09,1.5h-14.01ZM752.2,244.09l-14.42-43.52-14.14,43.52h28.56Z"
                        />
                        <path
                          className="cls-1"
                          d="M836.65,265.03l-11.83-17.82h-17.27l.68,35.22c0,.82-.82,1.63-1.63,1.63h-14.14c-.82,0-1.63-.82-1.63-1.63l.95-46.51-.95-45.42c0-.82.82-1.63,1.63-1.63h35.77c22.71,0,36.31,9.79,36.31,29.1,0,14.55-8.3,23.94-22.03,27.61l23.94,37.13c.27.54-.14,1.36-.82,1.36h-16.18c-.95,0-1.9-.54-2.45-1.36l-10.34-17.68ZM829.17,201.65h-21.22l-.54,32.64h22.17c10.61,0,18.77-4.62,18.77-16.05s-7.07-16.59-19.18-16.59Z"
                        />
                        <path
                          className="cls-1"
                          d="M879.22,284.07c-.82,0-1.63-.82-1.63-1.63l1.09-46.51-1.09-45.42c0-.82.82-1.63,1.63-1.63h31.69c27.34,0,49.37,15.5,49.37,48.01s-22.98,47.19-49.1,47.19h-31.96ZM895.13,271.01h17.14c16.05,0,30.74-9.93,30.74-34.27s-13.87-34.82-31.28-34.82h-16.59c0,.14-.95,21.08-.95,33.59s.95,35.36.95,35.5Z"
                        />
                        <path
                          className="cls-1"
                          d="M974.69,284.07c-.82,0-1.63-.82-1.63-1.63l1.09-46.38-1.09-45.56c0-.82.82-1.63,1.63-1.63h14.14c.82,0,1.63.82,1.63,1.63l-1.09,45.56,1.09,46.38c0-.82-.82,1.63-1.63,1.63h-14.14Z"
                        />
                        <path
                          className="cls-1"
                          d="M1072.48,284.07c-.95,0-1.9-.68-2.18-1.5l-8.16-24.62h-37.54l-7.89,24.62c-.27.82-1.22,1.5-2.18,1.5h-13.6c-.82,0-1.36-.82-1.09-1.5l32.5-92.21c.27-.82,1.22-1.5,2.18-1.5h18.9c.95,0,1.9.68,2.18,1.5l31.96,92.21c.27.68-.27,1.5-1.09,1.5h-14.01ZM1057.65,244.09l-14.42-43.52-14.14,43.52h28.56Z"
                        />
                        <path
                          className="cls-1"
                          d="M1112.19,248.71l.14,33.73c0,.82-.82,1.63-1.63,1.63h-12.78c-.82,0-1.63-.82-1.63-1.63l.95-46.24-.82-45.7c0-.82.82-1.63,1.63-1.63h16.86c.95,0,1.9.54,2.45,1.36l43.79,72.62-.14-5.71-.54-29.92v-36.72c0-.82.82-1.63,1.63-1.63h12.65c.82,0,1.63.82,1.63,1.63l-.82,45.7.82,46.24c0,.82-.82,1.63-1.63,1.63h-17.68c-.95,0-1.9-.54-2.45-1.36l-43.11-71.54.27,8.7.41,28.83Z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <p
                  className="lead mb-4"
                  style={{
                    fontSize: "2.5rem",
                    color: "#61c997",
                    fontWeight: "500",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                  }}
                >
                  PROTECT. EMPOWER. ELEVATE.
                </p>
                <p className="mb-5 opacity-90" style={{ fontSize: "1.1rem" }}>
                  <b>Vital Guardian</b> is a cutting-edge health and safety solution
                  powered by wearable technology. It continuously monitors key
                  physiological signals — tracking parameters such as fatigue,
                  heat stress, and sleep quality, to protect people working in
                  high-risk or isolated environments. From Defence operations
                  and frontline responders to personnel working in challenging
                  industrial environments, Vital Guardian keeps teams safe,
                  alert, and performing at their best.
                </p>

                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <Button
                    variant="outline-light"
                    size="lg"
                    style={{ borderColor: "#61c997", color: "#61c997" }}
                    href="/contact"
                    as="a"
                  >
                    Request Demo
                  </Button>
                  <Button
                    variant="light"
                    size="lg"
                    style={{ backgroundColor: "#61c997", borderColor: "#61c997", color: "white" }}
                    href="/VitalGuardian_Brochure.pdf"
                    download="VitalGuardian_Brochure.pdf"
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

      {/* Video Section */}
      <section className="vital-guardian-hero-image" style={{ height: '80vh', display: 'flex', alignItems: 'center', transform: 'scaleY(-1)' }}>
        <Container fluid style={{ transform: 'scaleY(-1)' }}>
          {/* <Row className="justify-content-center">
            <Col lg={10}>
              <div className="text-center mb-5">
                <h2 className="display-5 fw-bold mb-4">
                  See Vital Guardian in Action
                </h2>
                <p className="lead text-muted">
                  Discover how Vital Guardian revolutionizes health monitoring and team safety
                </p>
              </div>
            </Col>
          </Row> */}

          <Row className="justify-content-center align-items-center">
            <Col xs={12} lg={10} xl={8} className="position-relative">
              {/* Watch image - left side */}
              <img 
                src="/watch.png" 
                alt="Smart Watch"
                style={{
                  position: 'absolute',
                  left: '-15%',
                  top: '70%',
                  transform: `translateY(calc(-50% + ${scrollY * 0.1}px))`,
                  width: '300px',
                  height: 'auto',
                  opacity: 0.3,
                  mixBlendMode: 'overlay',
                  zIndex: 1,
                  transition: 'transform 0.1s ease-out'
                }}
              />
              
              {/* Phone image - right side */}
              <img 
                src="/phone.png" 
                alt="Smart Phone"
                style={{
                  position: 'absolute',
                  right: '-20%',
                  top: '30%',
                  transform: `translateY(calc(-50% + ${scrollY * -0.08}px))`,
                  width: '320px',
                  height: 'auto',
                  opacity: 0.3,
                  mixBlendMode: 'overlay',
                  zIndex: 1,
                  transition: 'transform 0.1s ease-out'
                }}
              />
              
              {/* Video container with higher z-index */}
              <div className="position-relative" style={{ 
                paddingBottom: '56.25%', 
                height: 0, 
                overflow: 'hidden', 
                maxWidth: '100%', 
                maxHeight: '60vh', 
                border: '12px solid rgba(255, 255, 255, 0.7)', 
                borderRadius: '16px',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 0 30px rgba(255, 255, 255, 0.3)',
                zIndex: 10
              }}>
                <iframe
                  src="https://www.youtube.com/embed/ZhF9fEpmuSc"
                  title="Vital Guardian Demo Video"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    borderRadius: '8px',
                    zIndex: 10
                  }}
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
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
                <h2 className="display-5 fw-bold mb-4">
                  Team Safety Revolutionized
                </h2>
                <p className="lead">
                  Vital Guardian combines secure edge AI processing with flexible system integration to deliver privacy-focused health monitoring and actionable intelligence for protecting teams in high-risk environments.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="g-4">
            <Col md={6} lg={4}>
              <Card 
                className="border-0 shadow-sm" 
                style={{ 
                  position: 'relative', 
                  marginTop: '80px',
                  opacity: isLoaded ? 1 : 0,
                  transform: `translateY(${isLoaded ? '0' : '30px'})`,
                  transition: 'all 0.8s ease-out 0.2s'
                }}
              >
                <div 
                  style={{
                    position: 'absolute',
                    top: '-80px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    height: '160px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img 
                    src="/VGHex.png" 
                    alt="Hexagon background" 
                    style={{
                      height: '160px',
                      width: 'auto',
                      position: 'absolute',
                      top: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      zIndex: 1
                    }}
                  />
                  <i
                    className="bi bi-shield-lock"
                    style={{ fontSize: "4rem", color: "white", position: 'relative', zIndex: 2 }}
                  ></i>
                </div>
                <Card.Body className="text-center" style={{ marginTop: '80px', paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingTop: '1.5rem', paddingBottom: '1rem' }}>
                  <h5 className="fw-bold mb-3">Secure Edge Intelligence</h5>
                  <p className="text-muted">
                    Deploying AI algorithms locally to ensure data privacy and security while enabling real-time processing.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card 
                className="border-0 shadow-sm" 
                style={{ 
                  position: 'relative', 
                  marginTop: '80px',
                  opacity: isLoaded ? 1 : 0,
                  transform: `translateY(${isLoaded ? '0' : '30px'})`,
                  transition: 'all 0.8s ease-out 0.4s'
                }}
              >
                <div 
                  style={{
                    position: 'absolute',
                    top: '-80px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    height: '160px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img 
                    src="/VGHex.png" 
                    alt="Hexagon background" 
                    style={{
                      height: '160px',
                      width: 'auto',
                      position: 'absolute',
                      top: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      zIndex: 1
                    }}
                  />
                  <i
                    className="bi bi-lightbulb"
                    style={{ fontSize: "4rem", color: "white", position: 'relative', zIndex: 2 }}
                  ></i>
                </div>
                <Card.Body className="text-center" style={{ marginTop: '80px', paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingTop: '1.5rem', paddingBottom: '1rem' }}>
                  <h5 className="fw-bold mb-3">Actionable Insights</h5>
                  <p className="text-muted">
                    Transforming complex health data into clear, actionable recommendations for healthcare providers and patients.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card 
                className="border-0 shadow-sm" 
                style={{ 
                  position: 'relative', 
                  marginTop: '80px',
                  opacity: isLoaded ? 1 : 0,
                  transform: `translateY(${isLoaded ? '0' : '30px'})`,
                  transition: 'all 0.8s ease-out 0.6s'
                }}
              >
                <div 
                  style={{
                    position: 'absolute',
                    top: '-80px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    height: '160px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img 
                    src="/VGHex.png" 
                    alt="Hexagon background" 
                    style={{
                      height: '160px',
                      width: 'auto',
                      position: 'absolute',
                      top: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      zIndex: 1
                    }}
                  />
                  <i
                    className="bi bi-diagram-3"
                    style={{ fontSize: "4rem", color: "white", position: 'relative', zIndex: 2 }}
                  ></i>
                </div>
                <Card.Body className="text-center" style={{ marginTop: '80px', paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingTop: '1.5rem', paddingBottom: '1rem' }}>
                  <h5 className="fw-bold mb-3">Flexible Integration</h5>
                  <p className="text-muted">
                    Seamlessly integrating with existing healthcare systems and IoT devices for comprehensive monitoring solutions.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Technology Section */}
      <section className="vital-guardian-hero-image py-6" style={{ minHeight: "auto", display: "block" }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="text-center mb-5">
                <h2 className="display-5 fw-bold mb-4 text-white">
                  Our Process
                </h2>
              </div>
            </Col>
          </Row>

          {/* Large screen layout (≥1200px) - Image with overlays */}
          <Row className="justify-content-center d-none d-xl-flex">
            <Col xs={12}>
              <div className="text-center position-relative" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
                <img 
                  src="/VG_OP_hexes.png" 
                  alt="Our Process" 
                  className="img-fluid"
                  style={{
                    width: "100%",
                    height: "auto"
                  }}
                />
                
                {/* Top row text overlays */}
                <div className="position-absolute" style={{ top: "2%", left: "21.3%", transform: "translateX(-50%)", maxWidth: "280px", textAlign: "center" }}>
                  <h6 className="fw-bold mb-1" style={{ fontSize: "1.3rem", color: "#61b0ff", textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
                    Discovery First
                  </h6>
                  <p className="text-white small mb-0" style={{ fontSize: "1rem", textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}>
                    Work with you to understand the physical and environmental demands on your workforce.
                  </p>
                </div>
                
                <div className="position-absolute" style={{ top: "2%", left: "50%", transform: "translateX(-50%)", maxWidth: "280px", textAlign: "center" }}>
                  <h6 className="fw-bold mb-1" style={{ fontSize: "1.3rem", color: "#61b0ff", textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
                    Co-Designed Solutions
                  </h6>
                  <p className="text-white small mb-0" style={{ fontSize: "1rem", textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}>
                    Integrate seamlessly into workflows, connect with safety systems, and customise alerts and dashboards.
                  </p>
                </div>
                
                <div className="position-absolute" style={{ top: "2%", left: "78.3%", transform: "translateX(-50%)", maxWidth: "280px", textAlign: "center" }}>
                  <h6 className="fw-bold mb-1" style={{ fontSize: "1.3rem", color: "#61b0ff", textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
                    The Result
                  </h6>
                  <p className="text-white small mb-0" style={{ fontSize: "1rem", textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}>
                    Safer workplaces, stronger teams, smarter decisions.
                  </p>
                </div>
                
                {/* Icons below top text */}
                <div className="position-absolute" style={{ top: "34%", left: "21.3%", transform: "translateX(-50%)" }}>
                  <i className="bi bi-search text-white" style={{ fontSize: "4rem", textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}></i>
                </div>
                
                <div className="position-absolute" style={{ top: "34%", left: "50%", transform: "translateX(-50%)" }}>
                  <i className="bi bi-gear text-white" style={{ fontSize: "4rem", textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}></i>
                </div>
                
                <div className="position-absolute" style={{ top: "34%", left: "78.3%", transform: "translateX(-50%)" }}>
                  <i className="bi bi-trophy text-white" style={{ fontSize: "4rem", textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}></i>
                </div>
                
                {/* Icons above bottom text */}
                <div className="position-absolute" style={{ bottom: "35%", left: "35.3%", transform: "translateX(-50%)" }}>
                  <i className="bi bi-bar-chart text-white" style={{ fontSize: "4rem", textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}></i>
                </div>
                
                <div className="position-absolute" style={{ bottom: "35%", left: "63.9%", transform: "translateX(-50%)" }}>
                  <i className="bi bi-shield-check text-white" style={{ fontSize: "4rem", textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}></i>
                </div>
                
                {/* Bottom row text overlays */}
                <div className="position-absolute" style={{ bottom: "2%", left: "35.3%", transform: "translateX(-50%)", maxWidth: "280px", textAlign: "center" }}>
                  <h6 className="fw-bold mb-1" style={{ fontSize: "1.3rem", color: "#61b0ff", textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
                    Tailored Insights
                  </h6>
                  <p className="text-white small mb-0" style={{ fontSize: "1rem", textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}>
                    Track the physiological signals and provide the health and safety insights that matter most for your team.
                  </p>
                </div>
                
                <div className="position-absolute" style={{ bottom: "2%", left: "63.7%", transform: "translateX(-50%)", maxWidth: "300px", textAlign: "center" }}>
                  <h6 className="fw-bold mb-1" style={{ fontSize: "1.3rem", color: "#61b0ff", textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
                    Trusted Outcomes
                  </h6>
                  <p className="text-white small mb-0" style={{ fontSize: "1rem", textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}>
                    Deliver a trusted, human-centred system that boosts safety, performance, and operational resilience.
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          {/* Small/Medium screen layout (<1200px) - Card grid */}
          <Row className="g-4 d-xl-none">
            <Col md={6} lg={4}>
              <div className="text-center" style={{ position: 'relative', marginTop: '80px', backgroundColor: 'rgba(0, 0, 0, 0.4)', padding: '2rem', borderRadius: '15px' }}>
                <div 
                  style={{
                    position: 'absolute',
                    top: '-80px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    height: '160px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img 
                    src="/VGHex.png" 
                    alt="Hexagon background" 
                    style={{
                      height: '160px',
                      width: 'auto',
                      position: 'absolute',
                      top: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      zIndex: 1
                    }}
                  />
                  <i
                    className="bi bi-search"
                    style={{ fontSize: "4rem", color: "white", position: 'relative', zIndex: 2 }}
                  ></i>
                </div>
                <div style={{ marginTop: '80px', paddingTop: '1.5rem' }}>
                  <h5 className="fw-bold mb-3" style={{ color: "#61b0ff" }}>Discovery First</h5>
                  <p className="text-white">
                    Work with you to understand the physical and environmental demands on your workforce.
                  </p>
                </div>
              </div>
            </Col>
            
            <Col md={6} lg={4}>
              <div className="text-center" style={{ position: 'relative', marginTop: '80px', backgroundColor: 'rgba(0, 0, 0, 0.4)', padding: '2rem', borderRadius: '15px' }}>
                <div 
                  style={{
                    position: 'absolute',
                    top: '-80px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    height: '160px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img 
                    src="/VGHex.png" 
                    alt="Hexagon background" 
                    style={{
                      height: '160px',
                      width: 'auto',
                      position: 'absolute',
                      top: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      zIndex: 1
                    }}
                  />
                  <i
                    className="bi bi-gear"
                    style={{ fontSize: "4rem", color: "white", position: 'relative', zIndex: 2 }}
                  ></i>
                </div>
                <div style={{ marginTop: '80px', paddingTop: '1.5rem' }}>
                  <h5 className="fw-bold mb-3" style={{ color: "#61b0ff" }}>Co-Designed Solutions</h5>
                  <p className="text-white">
                    Integrate seamlessly into workflows, connect with safety systems, and customise alerts and dashboards.
                  </p>
                </div>
              </div>
            </Col>
            
            <Col md={6} lg={4}>
              <div className="text-center" style={{ position: 'relative', marginTop: '80px', backgroundColor: 'rgba(0, 0, 0, 0.4)', padding: '2rem', borderRadius: '15px' }}>
                <div 
                  style={{
                    position: 'absolute',
                    top: '-80px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    height: '160px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img 
                    src="/VGHex.png" 
                    alt="Hexagon background" 
                    style={{
                      height: '160px',
                      width: 'auto',
                      position: 'absolute',
                      top: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      zIndex: 1
                    }}
                  />
                  <i
                    className="bi bi-trophy"
                    style={{ fontSize: "4rem", color: "white", position: 'relative', zIndex: 2 }}
                  ></i>
                </div>
                <div style={{ marginTop: '80px', paddingTop: '1.5rem' }}>
                  <h5 className="fw-bold mb-3" style={{ color: "#61b0ff" }}>The Result</h5>
                  <p className="text-white">
                    Safer workplaces, stronger teams, smarter decisions.
                  </p>
                </div>
              </div>
            </Col>
            
            <Col md={6} lg={4} className="mx-auto">
              <div className="text-center" style={{ position: 'relative', marginTop: '80px', backgroundColor: 'rgba(0, 0, 0, 0.4)', padding: '2rem', borderRadius: '15px' }}>
                <div 
                  style={{
                    position: 'absolute',
                    top: '-80px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    height: '160px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img 
                    src="/VGHex.png" 
                    alt="Hexagon background" 
                    style={{
                      height: '160px',
                      width: 'auto',
                      position: 'absolute',
                      top: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      zIndex: 1
                    }}
                  />
                  <i
                    className="bi bi-bar-chart"
                    style={{ fontSize: "4rem", color: "white", position: 'relative', zIndex: 2 }}
                  ></i>
                </div>
                <div style={{ marginTop: '80px', paddingTop: '1.5rem' }}>
                  <h5 className="fw-bold mb-3" style={{ color: "#61b0ff" }}>Tailored Insights</h5>
                  <p className="text-white">
                    Track the physiological signals and provide the health and safety insights that matter most for your team.
                  </p>
                </div>
              </div>
            </Col>
            
            <Col md={6} lg={4} className="mx-auto">
              <div className="text-center" style={{ position: 'relative', marginTop: '80px', backgroundColor: 'rgba(0, 0, 0, 0.4)', padding: '2rem', borderRadius: '15px' }}>
                <div 
                  style={{
                    position: 'absolute',
                    top: '-80px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    height: '160px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img 
                    src="/VGHex.png" 
                    alt="Hexagon background" 
                    style={{
                      height: '160px',
                      width: 'auto',
                      position: 'absolute',
                      top: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      zIndex: 1
                    }}
                  />
                  <i
                    className="bi bi-shield-check"
                    style={{ fontSize: "4rem", color: "white", position: 'relative', zIndex: 2 }}
                  ></i>
                </div>
                <div style={{ marginTop: '80px', paddingTop: '1.5rem' }}>
                  <h5 className="fw-bold mb-3" style={{ color: "#61b0ff" }}>Trusted Outcomes</h5>
                  <p className="text-white">
                    Deliver a trusted, human-centred system that boosts safety, performance, and operational resilience.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Value Section */}
      <section className="py-6">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="text-center mb-5">
                <h2 className="display-5 fw-bold mb-4">The Value</h2>
              </div>
            </Col>
          </Row>

          <Row className="g-5">
            <Col lg={6}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Body className="p-5">
                  <h4 className="fw-bold mb-4">For Organizations</h4>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <i className="bi bi-check2-circle text-success me-2"></i>
                      Reduced workplace incidents and liability
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-check2-circle text-success me-2"></i>
                      Enhanced operational resilience
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-check2-circle text-success me-2"></i>
                      Improved workforce productivity and performance
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-check2-circle text-success me-2"></i>
                      Real-time safety compliance monitoring
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-check2-circle text-success me-2"></i>
                      Data-driven decision making for team safety
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Body className="p-5">
                  <h4 className="fw-bold mb-4">For Personnel</h4>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <i className="bi bi-check2-circle text-success me-2"></i>
                      Proactive health and safety monitoring
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-check2-circle text-success me-2"></i>
                      Early warning of fatigue and heat stress
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-check2-circle text-success me-2"></i>
                      Personalized wellness insights and recommendations
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-check2-circle text-success me-2"></i>
                      Enhanced confidence in high-risk environments
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-check2-circle text-success me-2"></i>
                      Improved work-life balance and recovery
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* VG Ins Outs Image Section */}
      <section 
        className="pt-5 position-relative"
        style={{ 
          background: "linear-gradient(0deg, #002048 0%, #1e3870ff 50%, #003372 100%)"
        }}
      >
        <Container fluid className="px-0">
          <Row>
            <Col xs={12} className="px-0 position-relative">
              <div className="position-absolute w-100 text-center" style={{ top: "3rem", zIndex: 10 }}>
                <h2 className="display-5 fw-bold text-white mb-0" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
                  Signals to Insights
                </h2>
              </div>
              <img 
                src="/VG_ins_outs_hr.png" 
                alt="Vital Guardian Inputs and Outputs" 
                className="img-fluid"
                style={{
                  width: "70%",
                  height: "auto",
                  display: "block",
                  margin: "3rem auto 0 auto",
                  mixBlendMode: "lighten"
                }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="text-white" style={{ background: "linear-gradient(135deg, #61c997 0%, #5bc18e 100%)" }}>
        <Container className="py-6">
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="display-5 fw-bold mb-4">
                Protect Your Most Valuable Asset
              </h2>
              <p className="lead mb-5">
                Discover how Vital Guardian can enhance team safety, reduce workplace 
                incidents, and optimize performance in high-risk environments.
              </p>
              
              <Button 
                variant="light" 
                size="lg" 
                className="me-3"
                href="/contact"
                as="a"
              >
                Schedule Consultation
              </Button>
              <Button 
                variant="outline-light" 
                size="lg"
                href="/VitalGuardian_Brochure.pdf"
                download="VitalGuardian_Brochure.pdf"
                as="a"
              >
                Download Brochure
              </Button>
            </Col>
          </Row>
        </Container>
        
        {/* VG Images Row - at bottom with no gaps */}
        <div className="d-flex position-relative" style={{ height: "400px", overflow: "visible" }}>
          <div style={{ flex: 1, overflow: "visible" }}>
            <img 
              src="/VG_img3.png" 
              alt="VG Image 3" 
              style={{ 
                width: "100%", 
                height: "400px", 
                objectFit: "cover",
                display: "block"
              }}
            />
          </div>
          <div style={{ flex: 1, overflow: "visible", position: "relative", zIndex: 100 }}>
            <img 
              src="/VG_img4.png" 
              alt="VG Image 4" 
              style={{ 
                width: "100%", 
                height: "400px", 
                objectFit: "cover",
                display: "block"
              }}
            />
            {/* VG Shield Green overlay */}
            <img 
              src="/VG_shield_green.png" 
              alt="VG Shield Green" 
              style={{ 
                position: "absolute",
                top: "-70px",
                left: "-80px",
                width: "240px",
                height: "auto",
                zIndex: 1000
              }}
            />
          </div>
          <div style={{ flex: 1, overflow: "hidden" }}>
            <img 
              src="/VG_img1.png" 
              alt="VG Image 1" 
              style={{ 
                width: "100%", 
                height: "400px", 
                objectFit: "cover",
                display: "block"
              }}
            />
          </div>
          <div style={{ flex: 1, overflow: "hidden" }}>
            <img 
              src="/VG_img2.png" 
              alt="VG Image 2" 
              style={{ 
                width: "100%", 
                height: "400px", 
                objectFit: "cover",
                display: "block"
              }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
