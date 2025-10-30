import Head from "next/head";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState, useRef } from "react";

export default function ProcessGuardian() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [visibleValueCards, setVisibleValueCards] = useState<Set<number>>(new Set());
  const [visibleIndustryItems, setVisibleIndustryItems] = useState<Set<number>>(new Set());
  const [visibleTimelineSteps, setVisibleTimelineSteps] = useState<Set<number>>(new Set());
  const [timelineLineVisible, setTimelineLineVisible] = useState(false);
  
  // Boolean states for one-time animations (like vital-guardian)
  const [processCardsAnimated, setProcessCardsAnimated] = useState(false);
  const [valueCardsAnimated, setValueCardsAnimated] = useState(false);
  const [industryItemsAnimated, setIndustryItemsAnimated] = useState(false);
  const [timelineStepsAnimated, setTimelineStepsAnimated] = useState(false);
  const [screenshotsAnimated, setScreenshotsAnimated] = useState(false);
  
  // Screenshots animation states
  const [visibleScreenshots, setVisibleScreenshots] = useState<Set<number>>(new Set());
  
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const valueCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const industryItemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineStepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const screenshotRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  // Intersection Observers for card animations - separate observers like vital-guardian and index pages
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    // Process Intelligence Cards Observer
    if (cardRefs.current.length > 0 && !processCardsAnimated) {
      const processObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setProcessCardsAnimated(true);
              // Trigger all 6 process cards with staggered timing
              setTimeout(() => setVisibleCards(new Set([0])), 0);
              setTimeout(() => setVisibleCards(prev => new Set([...prev, 1])), 200);
              setTimeout(() => setVisibleCards(prev => new Set([...prev, 2])), 400);
              setTimeout(() => setVisibleCards(prev => new Set([...prev, 3])), 600);
              setTimeout(() => setVisibleCards(prev => new Set([...prev, 4])), 800);
              setTimeout(() => setVisibleCards(prev => new Set([...prev, 5])), 1000);
              // Stop observing after animation triggers
              processObserver.disconnect();
            }
          });
        },
        { threshold: 0.3 }
      );
      
      cardRefs.current.forEach(ref => {
        if (ref) processObserver.observe(ref);
      });
      observers.push(processObserver);
    }
    
    // Value Cards Observer
    if (valueCardRefs.current.length > 0 && !valueCardsAnimated) {
      const valueObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setValueCardsAnimated(true);
              // Trigger all value cards with staggered timing
              setTimeout(() => setVisibleValueCards(new Set([0])), 0);
              setTimeout(() => setVisibleValueCards(prev => new Set([...prev, 1])), 150);
              setTimeout(() => setVisibleValueCards(prev => new Set([...prev, 2])), 300);
              // Stop observing after animation triggers
              valueObserver.disconnect();
            }
          });
        },
        { threshold: 0.3 }
      );
      
      valueCardRefs.current.forEach(ref => {
        if (ref) valueObserver.observe(ref);
      });
      observers.push(valueObserver);
    }
    
    // Industry Items Observer
    if (industryItemRefs.current.length > 0 && !industryItemsAnimated) {
      const industryObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIndustryItemsAnimated(true);
              // Trigger industry items with staggered timing
              setTimeout(() => setVisibleIndustryItems(new Set([0])), 0);
              setTimeout(() => setVisibleIndustryItems(prev => new Set([...prev, 1])), 100);
              setTimeout(() => setVisibleIndustryItems(prev => new Set([...prev, 2])), 200);
              setTimeout(() => setVisibleIndustryItems(prev => new Set([...prev, 3])), 300);
              setTimeout(() => setVisibleIndustryItems(prev => new Set([...prev, 4])), 400);
              setTimeout(() => setVisibleIndustryItems(prev => new Set([...prev, 5])), 500);
              // Stop observing after animation triggers
              industryObserver.disconnect();
            }
          });
        },
        { threshold: 0.3 }
      );
      
      industryItemRefs.current.forEach(ref => {
        if (ref) industryObserver.observe(ref);
      });
      observers.push(industryObserver);
    }
    
    // Timeline Steps Observer
    if (timelineStepRefs.current.length > 0 && !timelineStepsAnimated) {
      const timelineObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimelineStepsAnimated(true);
              // Trigger timeline steps with staggered timing
              setTimeout(() => setVisibleTimelineSteps(new Set([0])), 0);
              setTimeout(() => setVisibleTimelineSteps(prev => new Set([...prev, 1])), 200);
              setTimeout(() => setVisibleTimelineSteps(prev => new Set([...prev, 2])), 400);
              setTimeout(() => setVisibleTimelineSteps(prev => new Set([...prev, 3])), 600);
              setTimeout(() => setVisibleTimelineSteps(prev => new Set([...prev, 4])), 800);
              
              // Start line animation after first step appears
              setTimeout(() => setTimelineLineVisible(true), 100);
              // Stop observing after animation triggers
              timelineObserver.disconnect();
            }
          });
        },
        { threshold: 0.3 }
      );
      
      timelineStepRefs.current.forEach(ref => {
        if (ref) timelineObserver.observe(ref);
      });
      observers.push(timelineObserver);
    }
    
    // Screenshots Observer
    if (screenshotRefs.current.length > 0 && !screenshotsAnimated) {
      const screenshotsObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setScreenshotsAnimated(true);
              // Trigger screenshots with left-to-right timing: screenshot1, arrows, screenshot2
              setTimeout(() => setVisibleScreenshots(new Set([0])), 0);     // First screenshot
              setTimeout(() => setVisibleScreenshots(prev => new Set([...prev, 1])), 300);   // Arrows
              setTimeout(() => setVisibleScreenshots(prev => new Set([...prev, 2])), 600);   // Second screenshot
              // Stop observing after animation triggers
              screenshotsObserver.disconnect();
            }
          });
        },
        { threshold: 0.3 }
      );
      
      screenshotRefs.current.forEach(ref => {
        if (ref) screenshotsObserver.observe(ref);
      });
      observers.push(screenshotsObserver);
    }

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []); // Empty dependency array like the working pages

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
                src="/PG_shield.svg"
                alt="Process Monitoring Visualization"
                style={{
                  position: "absolute",
                  left: "-25%",
                  top: "80%",
                  transform: `translateY(calc(-50% + ${
                    scrollY * 0.05
                  }px)) translateX(${isLoaded ? "0" : "-20px"})`,
                  width: "350px",
                  height: "auto",
                  opacity: isLoaded ? 0.8 : 0,
                  mixBlendMode: "lighten",
                  zIndex: 15,
                  transition: "all 1.2s ease-out",
                }}
              />

              {/* Process analytics dashboard - right side */}
              <img
                src="/PG_graph_ab.png"
                alt="Process Analytics Dashboard"
                style={{
                  position: "absolute",
                  right: "-23%",
                  top: "30%",
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
                style={{ position: "relative", zIndex: 10, marginTop: "11rem" }}
              >
                <div className="hero-logo mb-4">
                  <img
                    src="/PG_logo.svg"
                    alt="Process Guardian Logo"
                    style={{
                      width: "280px",
                      height: "auto",
                      marginBottom: ".5rem",
                      filter: "drop-shadow(0 0 20px rgba(42, 177, 117, 0.4))",
                    }}
                  />
                  <h1
                    className="hero-tagline fw-bold mb-4"
                    style={{ fontSize: "2.8rem", lineHeight: "0.8" }}
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
                    fontSize: "2rem",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                  }}
                >
                  CLARITY, CONTROL, AND CONFIDENCE
                </p>
                <p className="mb-5 opacity-90" style={{ fontSize: "1rem", paddingLeft: "2rem", paddingRight: "2rem" }}>
                  <b>Process Guardian</b> is your smart assistant for complex
                  operations. It continuously oversees IoT sensor-driven
                  processes—whether individual machines or entire interconnected
                  systems—working behind the scenes to keep everything running
                  seamlessly. When anomalies arise, it detects them early,
                  pinpoints the root cause, and guides your team toward the
                  right solution—preventing downtime, avoiding costly
                  disruptions, and keeping your operations performing at their
                  best.
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

      {/* Video Section */}
      <section 
        className="process-guardian-hero-image text-white py-6" 
        style={{ 
          minHeight: '80vh', 
          display: 'flex', 
          alignItems: 'center',
          transform: 'scaleY(-1)'
        }}
      >
        <Container style={{ transform: 'scaleY(-1)' }}>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="text-center mb-5">
                <h2 className="display-5 fw-bold mb-4">
                  See Process Guardian in Action
                </h2>
                <p className="lead text-white opacity-90">
                  Discover how Process Guardian transforms complex operations into clear, actionable insights
                </p>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center align-items-center">
            <Col xs={12} lg={10} xl={8} className="position-relative">
              {/* Process monitoring visualization - left side */}
              <img 
                src="/PG_pump.png" 
                alt="Process Monitoring Visualization"
                style={{
                  position: 'absolute',
                  left: '-35%',
                  top: '70%',
                  transform: `translateY(calc(-50% + ${scrollY * 0.1}px)) translateX(${isLoaded ? "0" : "-20px"})`,
                  width: '450px',
                  height: 'auto',
                  opacity: isLoaded ? 0.3 : 0,
                  mixBlendMode: 'overlay',
                  zIndex: 1,
                  transition: 'all 1.2s ease-out'
                }}
              />
              
              {/* Process analytics dashboard - right side */}
              <img 
                src="/PG_ship.png" 
                alt="Process Analytics Dashboard"
                style={{
                  position: 'absolute',
                  right: '-40%',
                  top: '10%',
                  transform: `translateY(calc(-50% + ${scrollY * -0.08}px)) translateX(${isLoaded ? "0" : "20px"})`,
                  width: '780px',
                  height: 'auto',
                  opacity: isLoaded ? 0.3 : 0,
                  mixBlendMode: 'overlay',
                  zIndex: 1,
                  transition: 'all 1.2s ease-out'
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
                  src="https://www.youtube.com/embed/DpjUdc3HmGo"
                  title="Process Guardian Demo Video"
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
                <h2 className="display-4 fw-bold mb-4" style={{ color: "#0a2f28" }}>
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
            {[
              {
                icon: "bi-cpu",
                title: "Learns Your Process",
                description: "Utilises advanced machine learning to understand the normal operation of any business process. From manufacturing production lines to HR workflows, Process Guardian adapts to your unique operational patterns."
              },
              {
                icon: "bi-speedometer2",
                title: "One Score for Total Health",
                description: "Combines hundreds of metrics into a single, easy-to-understand health score. Know at a glance whether your process is performing optimally or needs attention."
              },
              {
                icon: "bi-crosshair",
                title: "Pinpoints the Root Cause",
                description: "When issues arise, Process Guardian doesn't just alert you – it identifies the specific factors causing the problem, saving hours of investigation time."
              },
              {
                icon: "bi-question-circle",
                title: "What If Scenarios",
                description: "Simulate changes before implementing them. Understand the potential impact of operational adjustments on your process health and performance."
              },
              {
                icon: "bi-bell",
                title: "Actionable Alerts",
                description: "Receive intelligent notifications that provide not just what's wrong, but specific steps to resolve issues. Turn reactive maintenance into proactive optimization."
              },
              {
                icon: "bi-eye",
                title: "Clarity from Complexity",
                description: "Transform overwhelming data streams into clear, actionable insights. Process Guardian makes complex industrial and business processes understandable for everyone."
              }
            ].map((card, index) => (
              <Col md={6} lg={4} key={index} className="d-flex">
                <div
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  className={`card-animation h-100 w-100 ${visibleCards.has(index) ? 'visible' : ''}`}
                  style={{
                    animationDelay: `${(index % 3) * 200}ms`
                  }}
                >
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body className="p-4 text-center d-flex flex-column">
                      <div className="mb-3">
                        <i
                          className={`bi ${card.icon}`}
                          style={{ fontSize: "3rem", color: "#2ab175" }}
                        ></i>
                      </div>
                      <h5 className="fw-bold mb-3">{card.title}</h5>
                      <p className="text-muted flex-grow-1">
                        {card.description}
                      </p>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Screenshots Section */}
      <section className="process-guardian-hero-image text-white py-6" style={{ position: "relative", overflow: "hidden" }}>
        {/* Background Grid */}
        <img
          src="/PG_grid.svg"
          alt="Process Guardian Grid Background"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, calc(-30% + ${scrollY * -0.05}px))`,
            width: "120%",
            height: "auto",
            opacity: 0.1,
            zIndex: 1,
            pointerEvents: "none",
            transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)"
          }}
        />
        <Container style={{ position: "relative", zIndex: 2 }}>
          <Row className="justify-content-center mb-5">
            <Col lg={10}>
              <div className="text-center">
                <h2 className="display-5 fw-bold mb-4" style={{ color: "#ffffff" }}>
                  From Anomaly Detection to Recovery
                </h2>
                <p className="lead opacity-90" style={{ fontSize: "1.1rem" }}>
                  When things go wrong in complex operations, Process Guardian doesn't just raise an alarm. 
                  It pinpoints the exact cause, explains what's happening, and guides you through the most 
                  effective actions to bring your system back to normal.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="g-4 justify-content-center align-items-center">
            <Col lg={5}>
              <div 
                ref={(el) => {
                  screenshotRefs.current[0] = el;
                }}
                className={`screenshot-animation text-center ${visibleScreenshots.has(0) ? 'visible' : ''}`}
              >
                <img
                  src="/PG_screenshot_1.png"
                  alt="Process Guardian Screenshot 1"
                  className="img-fluid rounded shadow"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </Col>
            <Col lg={2} className="d-flex align-items-center justify-content-center">
              <div 
                ref={(el) => {
                  screenshotRefs.current[1] = el;
                }}
                className={`arrow-animation d-flex ${visibleScreenshots.has(1) ? 'visible' : ''}`} 
                style={{ transform: "translateY(-10%) translateX(-30px)" }}
              >
                <div 
                  style={{ 
                    fontSize: "20rem", 
                    fontWeight: "300",
                    color: "#dd2c15ff",
                    filter: "drop-shadow(0 0 15px rgba(221, 44, 21, 0.4))",
                    letterSpacing: "-0.2em",
                    lineHeight: "1",
                    whiteSpace: "nowrap",
                    animation: "arrowFade1 2s ease-in-out infinite"
                  }}
                >
                  ›
                </div>
                <div 
                  style={{ 
                    fontSize: "20rem", 
                    fontWeight: "300",
                    color: "#f2f325",
                    filter: "drop-shadow(0 0 15px rgba(242, 243, 37, 0.4))",
                    letterSpacing: "-0.2em",
                    lineHeight: "1",
                    whiteSpace: "nowrap",
                    animation: "arrowFade2 2s ease-in-out infinite"
                  }}
                >
                  ›
                </div>
                <div 
                  style={{ 
                    fontSize: "20rem", 
                    fontWeight: "300",
                    color: "#2ab175",
                    filter: "drop-shadow(0 0 15px rgba(42, 177, 117, 0.4))",
                    letterSpacing: "-0.2em",
                    lineHeight: "1",
                    whiteSpace: "nowrap",
                    animation: "arrowFade3 2s ease-in-out infinite"
                  }}
                >
                  ›
                </div>
              </div>
            </Col>
            <Col lg={5}>
              <div 
                ref={(el) => {
                  screenshotRefs.current[2] = el;
                }}
                className={`screenshot-animation text-center ${visibleScreenshots.has(2) ? 'visible' : ''}`}
              >
                <img
                  src="/PG_screenshot_2.png"
                  alt="Process Guardian Screenshot 2"
                  className="img-fluid rounded shadow"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* The Value Section */}
      <section className="py-6">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="text-center mb-5">
                <h2 className="display-5 fw-bold mb-4" style={{ color: "#0a2f28" }}>The Value</h2>
                <p className="lead text-muted">
                  Unlock tangible benefits that transform your operations
                </p>
              </div>
            </Col>
          </Row>

          <Row className="g-5 justify-content-center">
            {[
              {
                icon: "bi-shield-exclamation",
                title: "Early Detection",
                description: "Prevent costly disruptions.",
                gradient: "linear-gradient(135deg, #ff4444 0%, #cc0000 100%)",
                shadowColor: "rgba(255, 68, 68, 0.3)"
              },
              {
                icon: "bi-graph-up-arrow",
                title: "Smarter Decisions",
                description: "Actionable, real-time insights.",
                gradient: "linear-gradient(135deg, #ffbb00 0%, #ff8800 100%)",
                shadowColor: "rgba(255, 187, 0, 0.3)"
              },
              {
                icon: "bi-award",
                title: "Stronger Operations",
                description: "Confidence to operate safely and efficiently.",
                gradient: "linear-gradient(135deg, #2ab175 0%, #1a8c57 100%)",
                shadowColor: "rgba(42, 177, 117, 0.3)"
              }
            ].map((valueCard, index) => (
              <Col md={6} lg={4} key={index} className="d-flex">
                <div
                  ref={(el) => {
                    valueCardRefs.current[index] = el;
                  }}
                  className={`card-animation h-100 w-100 ${visibleValueCards.has(index) ? 'visible' : ''}`}
                  style={{}}
                >
                  <div 
                    className="text-center p-4 rounded-4 h-100"
                    style={{
                      background: valueCard.gradient,
                      boxShadow: `0 10px 30px ${valueCard.shadowColor}, 0 0 20px ${valueCard.shadowColor.replace('0.3', '0.1')}`,
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      backdropFilter: "blur(10px)",
                      position: "relative",
                      overflow: "hidden"
                    }}
                  >
                    <div 
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        height: "2px",
                        background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)"
                      }}
                    />
                    <div className="mb-4">
                      <div
                        className="rounded-circle d-inline-flex align-items-center justify-content-center"
                        style={{ 
                          width: "80px", 
                          height: "80px",
                          background: "rgba(255, 255, 255, 0.2)",
                          backdropFilter: "blur(10px)",
                          border: "1px solid rgba(255, 255, 255, 0.3)"
                        }}
                      >
                        <i
                          className={`bi ${valueCard.icon}`}
                          style={{ fontSize: "2.5rem", color: "white" }}
                        ></i>
                      </div>
                    </div>
                    <h4 className="fw-bold mb-3" style={{ color: "white" }}>{valueCard.title}</h4>
                    <p style={{ color: "rgba(255, 255, 255, 0.9)" }}>
                      {valueCard.description}
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-6 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="text-center mb-5">
                <h2 className="display-5 fw-bold mb-4" style={{ color: "#0a2f28" }}>Industries We Serve</h2>
                <p className="lead text-muted">
                  Process Guardian adapts to diverse industries, delivering tailored solutions for your unique operational challenges.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={8}>
              <Row className="g-4">
                {[
                  "Manufacturing & Production",
                  "Energy & Utilities", 
                  "Chemical Processing",
                  "Healthcare Operations",
                  "Financial Services",
                  "Supply Chain Management"
                ].map((industry, index) => (
                  <Col md={6} key={index}>
                    <div
                      ref={(el) => {
                        industryItemRefs.current[index] = el;
                      }}
                      className={`card-animation ${visibleIndustryItems.has(index) ? 'visible' : ''}`}
                    >
                      <div className="d-flex align-items-baseline mb-3">
                        <i className="bi bi-check-circle-fill text-success me-3" style={{ fontSize: "1.5rem" }}></i>
                        <h5 className="fw-bold mb-0">{industry}</h5>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>

        </Container>
      </section>

      {/* Industry Images Banner */}
      <div className="w-100">
        <div className="d-flex w-100" style={{ height: "250px" }}>
          <div className="flex-fill">
            <img
              src="/PG_in_1.png"
              alt="Industry Application 1"
              className="w-100 h-100"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex-fill">
            <img
              src="/PG_in_4.png"
              alt="Industry Application 4"
              className="w-100 h-100"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex-fill">
            <img
              src="/PG_in_2.png"
              alt="Industry Application 2"
              className="w-100 h-100"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex-fill">
            <img
              src="/PG_in_3.png"
              alt="Industry Application 3"
              className="w-100 h-100"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section 
        className="py-6" 
        style={{ 
          background: "linear-gradient(135deg, rgba(255, 187, 0, 1) 0%, #f3de25ff 100%)",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Large Semi-Transparent PG Logo Background */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-49.4%, calc(-30% + ${scrollY * -0.08}px))`,
            width: "2400px",
            height: "2400px",
            zIndex: 1,
            pointerEvents: "none",
            transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)"
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
              background: "radial-gradient(circle at center, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 40%, rgba(255, 255, 255, 0.05) 70%, transparent 100%)",
              mask: "url(/PG_logo.svg) no-repeat center/contain",
              WebkitMask: "url(/PG_logo.svg) no-repeat center/contain"
            }}
          />
        </div>
        
        <Container style={{ position: "relative", zIndex: 2 }}>
          <Row className="justify-content-center text-center">
            <Col lg={10}>
              <h2 className="display-5 fw-bold mb-4" style={{ color: "#0a2f28" }}>
                Ready to Transform Your Processes?
              </h2>
              <p className="lead mb-5" style={{ color: "#0a2f28" }}>
                Discover how Process Guardian can optimize your operations,
                reduce costs, and improve efficiency.
              </p>
            </Col>
          </Row>

          {/* Process Timeline */}
          <Row className="justify-content-center mb-5">
            <Col lg={10}>
              <div className="position-relative">
                {/* Timeline line - positioned to run through center of circles */}
                <div 
                  className={`timeline-line position-absolute d-none d-lg-block ${timelineLineVisible ? 'visible' : ''}`}
                  style={{
                    top: '52px',
                    left: '10%',
                    right: '10%',
                    height: '3px',
                    background: 'linear-gradient(90deg, rgba(10, 47, 40, 0.2) 0%, rgba(10, 47, 40, 0.6) 50%, rgba(10, 47, 40, 0.2) 100%)',
                    zIndex: 1
                  }}
                ></div>
                
                <Row className="g-4 position-relative" style={{ zIndex: 2 }}>
                  {[
                    {
                      number: 1,
                      title: "Discovery First",
                      description: "Understand processes, risks, and goals."
                    },
                    {
                      number: 2,
                      title: "Insight to Action",
                      description: "Analyse data, uncover insights, and co-design tailored solutions."
                    },
                    {
                      number: 3,
                      title: "Seamless Integration",
                      description: "Modular deployment built around your existing systems."
                    },
                    {
                      number: 4,
                      title: "Agile & Risk-Aware",
                      description: "Every step shaped by feedback, feasibility, and evolving needs."
                    },
                    {
                      number: 5,
                      title: "The Result",
                      description: "Speed with depth — real results, responsibly delivered."
                    }
                  ].map((step, index) => (
                    <Col lg key={index} className="text-center">
                      <div
                        ref={(el) => {
                          timelineStepRefs.current[index] = el;
                        }}
                        className={`timeline-step ${visibleTimelineSteps.has(index) ? 'visible' : ''}`}
                      >
                        <div className="mb-4">
                          <div
                            className="rounded-circle d-inline-flex align-items-center justify-content-center mx-auto"
                            style={{ 
                              width: "60px", 
                              height: "60px",
                              border: '3px solid #0a2f28',
                              background: '#0a2f28',
                              boxShadow: '0 0 20px rgba(10, 47, 40, 0.6), 0 0 40px rgba(10, 47, 40, 0.3)'
                            }}
                          >
                            <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "white", fontFamily: "Aptly" }}>{step.number}</span>
                          </div>
                        </div>
                        <h5 className="fw-bold mb-3" style={{ color: "#0a2f28" }}>{step.title}</h5>
                        <p style={{ color: "#0a2f28", opacity: 0.8 }}>
                          {step.description}
                        </p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <Button 
                size="lg" 
                className="me-3 cta-btn-primary"
                href="/contact"
                as="a"
              >
                Schedule Consultation
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
}
