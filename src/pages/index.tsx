import Head from "next/head";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Insight via Artificial Intelligence</title>
        <meta name="description" content="A modern, responsive website built with Next.js, React, and Bootstrap" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="hero-section-gradient text-white">
        <div className="hero-dots-background"></div>
        <div className="hero-circles-background"></div>
        <div className="hero-flower-background"></div>
        <div className="hero-background-image"></div>
        <Container>
          <Row className="justify-content-center">
            <Col lg={12} xl={10} className="text-center position-relative">
              <div className="hero-content">
                <h1 className="hero-tagline fw-bold mb-0" style={{ fontSize: '4rem', lineHeight: '1.1' }}>
                  <span style={{ 
                    color: '#52d37b', 
                    textShadow: '0 0 20px rgba(72, 243, 86, 0.62), 0 0 40px rgba(6, 182, 212, 0.4), 0 0 60px rgba(6, 182, 212, 0.2)' 
                  }}>
                    Amplifying Human Potential
                  </span>
                  <br />
                  with Trusted Technology
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Who We Are Section */}
      <section id="who-we-are" className="py-6 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-4" data-text="WHO WE ARE">WHO WE ARE</h2>
          </div>
          <Row className="justify-content-center align-items-center">
            <Col lg={5} className="mb-4 mb-lg-0">
              <div className="who-we-are-image">
                <img 
                  src="/who.jpg" 
                  alt="Who We Are - IVAI Team" 
                  className="img-fluid rounded shadow-lg"
                  style={{ width: '100%', height: '600px', objectFit: 'cover' }}
                />
              </div>
            </Col>
            <Col lg={7}>
              <div className="content-text">
                <p className="mb-4">
                  IVAI is an Australian-based technology company dedicated to transforming frontier research into secure, human-centred solutions. By integrating advanced AI, statistical computing, UX design, and systems engineering, we create operational technologies that serve people and society — from sensor to signal to solution.
                </p>
                <p className="mb-4">
                  Our PhD-qualified team has proven experience across diverse domains, including Defence, Health, Government, and Culture. We work closely with clients, collaborators, and end-users to deliver end-to-end systems that are transparent, explainable, and reliable, even in the most critical environments.
                </p>
                <p className="mb-4">
                  At our core, we believe that trust is foundational. That's why we embed security, ethics, and accountability into every layer of our technology. We measure our success not only through innovation but through the lasting value and empowerment our solutions bring to individuals, organisations, and communities.
                </p>
                <p>
                  Through this partnership-driven approach, we turn cutting-edge research into practical tools that enhance human capability, support informed choices, and create meaningful impact. Our commitment is simple: to deliver technology that respects human dignity, inspires confidence, and enables people to flourish.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission Section */}
      <section id="mission" className="mission-section-gradient text-white py-6">
        <div className="mission-flower-background"></div>
        <Container className="position-relative" style={{ zIndex: 2 }}>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="text-center mb-5">
                <h2 className="display-4 fw-bold mb-4" data-text="MISSION">MISSION</h2>
              </div>
              <div className="content-text">
                <p className="mb-4">
                  We transform frontier research into secure, human-aligned artificial intelligence systems that serve people and society — from sensor to signal to solution. Our mission is to build operational, trustworthy technology that empowers confident, ethical decision-making across diverse fields including Defence, Health, Government, and Culture.
                </p>
                <p className="mb-4">
                  We believe that trust is foundational — our systems are designed to be transparent, explainable, and reliable, so users and partners can depend on them even in the most critical environments.
                </p>
                <p className="mb-4">
                  At our core, we are collaborators — working closely with domain experts, end-users, and stakeholders to ensure our solutions address real-world needs and create meaningful impact. Through this partnership-driven approach, we turn cutting-edge research into practical tools that enhance human capability and societal wellbeing.
                </p>
                <p>
                  Our impact is measured not only by technological innovation but by the lasting value and empowerment we deliver to communities, organisations, and individuals. We exist to create solutions that respect human dignity, support informed choices, and ultimately enable people to flourish.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="capabilities-section-gradient text-white py-6">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-4" data-text="CAPABILITIES">CAPABILITIES</h2>
          </div>
        </Container>
        
        <Container>
          {/* Research & Development - Image Left, Text Right */}
          <Row className="mb-6 align-items-center">
            <Col lg={4} className="mb-4 mb-lg-0">
              <div className="capability-image">
                <img 
                  src="/research.jpg" 
                  alt="Research & Development" 
                  className="img-fluid rounded shadow-lg"
                  style={{ width: '100%', height: '500px', objectFit: 'cover', objectPosition: 'center 30%' }}
                />
              </div>
            </Col>
            <Col lg={8}>
              <div className="capability-content">
                <h3 className="h2 fw-bold mb-4">RESEARCH & DEVELOPMENT</h3>
                <p className="lead mb-4">
                  Our team drives innovation at the cutting edge of AI and immersive technologies, delivering technical breakthroughs that underpin our solutions.
                </p>
                <div className="g-4">
                  <div className="mb-3">
                    <div className="d-flex align-items-start mb-3">
                      <div className="capability-icon me-3">
                        <span className="fs-3">🧠</span>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">Frontier AI expertise</h5>
                        <p className="text-muted mb-0">Advanced machine learning, computer vision, natural language processing, and multimodal data fusion.</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex align-items-start mb-3">
                      <div className="capability-icon me-3">
                        <span className="fs-3">🥽</span>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">Immersive VR/AR solutions</h5>
                        <p className="text-muted mb-0">Using human-factors research to create realistic, effective, and safe training, simulation, and scenario validation tools.</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex align-items-start mb-3">
                      <div className="capability-icon me-3">
                        <span className="fs-3">🤝</span>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">Human–machine teaming</h5>
                        <p className="text-muted mb-0">Optimising how AI systems and people interact to maximise decision-making speed, accuracy, and effectiveness.</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex align-items-start">
                      <div className="capability-icon me-3">
                        <span className="fs-3">⚡</span>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">Applied innovation</h5>
                        <p className="text-muted mb-0">Rapidly turning new research insights into demonstrable prototypes and proof-of-concept systems.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          {/* Trusted & Secure Technology - Text Left, Image Right */}
          <Row className="mb-6 align-items-center">
            <Col lg={8} className="order-2 order-lg-1">
              <div className="capability-content py-5">
                <h3 className="h2 fw-bold mb-4">TRUSTED & SECURE TECHNOLOGY</h3>
                <p className="lead mb-4">
                  We build systems and platforms that organisations can rely on, embedding privacy, security, and ethical assurance at every layer of technology. Our capabilities serve critical sectors including Defence, Government, and Health.
                </p>
                <div className="g-4">
                  <div className="mb-3">
                    <div className="d-flex align-items-start mb-3">
                      <div className="capability-icon me-3">
                        <span className="fs-3">🔒</span>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">Privacy by design</h5>
                        <p className="text-muted mb-0">Protecting sensitive data through encryption, access control, and robust governance practices.</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex align-items-start mb-3">
                      <div className="capability-icon me-3">
                        <span className="fs-3">🛡️</span>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">Security-hardened systems</h5>
                        <p className="text-muted mb-0">Architectures designed for cloud, hybrid, and isolated air-gapped environments.</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex align-items-start mb-3">
                      <div className="capability-icon me-3">
                        <span className="fs-3">⚖️</span>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">Ethical and compliant frameworks</h5>
                        <p className="text-muted mb-0">Aligning solutions with Defence, Government, Health, and industry standards for trust, transparency, and accountability.</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex align-items-start">
                      <div className="capability-icon me-3">
                        <span className="fs-3">✅</span>
                      </div>
                      <div>
                        <h5 className="fw-bold mb-2">Operational assurance</h5>
                        <p className="text-muted mb-0">Technologies built to be auditable, resilient, and verifiable in mission-critical environments.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} className="order-1 order-lg-2 mb-4 mb-lg-0">
              <div className="capability-image">
                <img 
                  src="/trusted.jpg" 
                  alt="Trusted & Secure Technology" 
                  className="img-fluid rounded shadow-lg"
                  style={{ width: '100%', height: '500px', objectFit: 'cover', objectPosition: 'center 40%' }}
                />
              </div>
            </Col>
          </Row>

          {/* Real-World Impact - Image Left, Text Right */}
          <Row className="align-items-center">
            <Col lg={4} className="mb-4 mb-lg-0">
              <div className="capability-image">
                <img 
                  src="/realworld.jpg" 
                  alt="Real-World Impact" 
                  className="img-fluid rounded shadow-lg"
                  style={{ width: '100%', height: '500px', objectFit: 'cover', objectPosition: 'center 60%' }}
                />
              </div>
            </Col>
            <Col lg={8}>
              <div className="capability-content py-5">
                <h3 className="h2 fw-bold mb-4">REAL-WORLD IMPACT</h3>
                  <p className="lead mb-4">
                    We deliver operational solutions that scale, integrate, and provide tangible outcomes in complex environments.
                  </p>
                  <div className="g-4">
                    <div className="mb-3">
                      <div className="d-flex align-items-start mb-3">
                        <div className="capability-icon me-3">
                          <span className="fs-3">🚀</span>
                        </div>
                        <div>
                          <h5 className="fw-bold mb-2">End-to-end delivery</h5>
                          <p className="text-muted mb-0">Managing the full lifecycle from concept and prototyping through deployment, maintenance, and continuous improvement.</p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="d-flex align-items-start mb-3">
                        <div className="capability-icon me-3">
                          <span className="fs-3">🔧</span>
                        </div>
                        <div>
                          <h5 className="fw-bold mb-2">Flexible, modular platforms</h5>
                          <p className="text-muted mb-0">Architectures designed to run reliably across cloud, hybrid, and fully on-prem environments, while integrating with existing enterprise and government systems.</p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="d-flex align-items-start mb-3">
                        <div className="capability-icon me-3">
                          <span className="fs-3">👥</span>
                        </div>
                        <div>
                          <h5 className="fw-bold mb-2">Adoption-focused design</h5>
                          <p className="text-muted mb-0">Co-created with end-users and domain experts to ensure usability, relevance, and practical impact.</p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="d-flex align-items-start">
                        <div className="capability-icon me-3">
                          <span className="fs-3">♻️</span>
                        </div>
                        <div>
                          <h5 className="fw-bold mb-2">Sustainable capability</h5>
                          <p className="text-muted mb-0">Solutions that evolve with your organisation, adapting to new challenges, data sources, and operational demands.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
          </Row>
        </Container>
      </section>

      {/* Vision Section */}
      <section id="vision" className="vision-section-gradient text-white">
        <div className="vision-background-text">VISION</div>
        <Container>
          <Row className="justify-content-center align-items-center h-100">
            <Col lg={10} xl={8}>
              <div className="text-center vision-content">
                <p className="fs-4 fw-semibold lh-base">
                  A future where technology amplifies human potential—never replaces it—and is built and deployed with unwavering commitment to scientific rigour, ethical responsibility, and masterful craftsmanship.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Values Section */}
      <section id="values" className="py-6 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-4" data-text="VALUES">VALUES</h2>
            <p className="lead text-muted">
              Our values are the foundation of every project and partnership at IVAI. They ensure we build technology that empowers people, while fostering genuine collaboration, and prioritising meaningful impact over empty promises.
            </p>
          </div>
          
          <Row className="g-4">
            <Col lg={6}>
              <div className="d-flex align-items-start mb-4">
                <div className="value-icon me-3">
                  <span className="fs-3">👤</span>
                </div>
                <div>
                  <h5 className="fw-bold mb-2">Human-first technology</h5>
                  <p className="text-muted mb-0">We design solutions that empower and augment people's capabilities, always prioritising human agency and dignity. Technology should be a tool that enhances potential, never a replacement that diminishes it.</p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="d-flex align-items-start mb-4">
                <div className="value-icon me-3">
                  <span className="fs-3">🤝</span>
                </div>
                <div>
                  <h5 className="fw-bold mb-2">Together, not transactional</h5>
                  <p className="text-muted mb-0">We believe relationships are built on shared purpose and mutual respect. Whether with users, clients, or colleagues, we treat everyone as valued partners, not just means to a business outcome.</p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="d-flex align-items-start mb-4">
                <div className="value-icon me-3">
                  <span className="fs-3">🎯</span>
                </div>
                <div>
                  <h5 className="fw-bold mb-2">Purpose over hype</h5>
                  <p className="text-muted mb-0">Our innovation is guided by genuine needs and meaningful impact, not by fleeting trends or empty buzzwords. Every idea is tested against real-world relevance and long-term value.</p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="d-flex align-items-start mb-4">
                <div className="value-icon me-3">
                  <span className="fs-3">🛠️</span>
                </div>
                <div>
                  <h5 className="fw-bold mb-2">Craft with integrity</h5>
                  <p className="text-muted mb-0">Excellence in technology requires a foundation of ethics and honesty. We hold ourselves accountable to the highest standards, ensuring that our work is trustworthy, responsible, and transparent.</p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="d-flex align-items-start mb-4">
                <div className="value-icon me-3">
                  <span className="fs-3">📋</span>
                </div>
                <div>
                  <h5 className="fw-bold mb-2">Proof through delivery</h5>
                  <p className="text-muted mb-0">Ideas are only as good as their execution. We measure success by delivering working, reliable systems that users can trust, understand, and rely on day after day.</p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="d-flex align-items-start mb-4">
                <div className="value-icon me-3">
                  <span className="fs-3">🔐</span>
                </div>
                <div>
                  <h5 className="fw-bold mb-2">Trust matters</h5>
                  <p className="text-muted mb-0">Trust is the cornerstone of everything we do. We cultivate openness, consistency, and integrity in all relationships and solutions, building confidence that lasts beyond contracts and deadlines.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* What We Deliver Section */}
      <section id="what-we-deliver" className="py-6">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-4" data-text="WHAT WE DELIVER">WHAT WE DELIVER</h2>
            <p className="lead text-muted">
              At IVAI, we build technology that turns complexity into clarity, enabling people and organisations to act with confidence and achieve real-world impact.
            </p>
          </div>
          
          <Row className="g-2">
            <Col lg={11} className="offset-lg-0">
              <div className="p-3 rounded-pill mb-2" style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' }}>
                <div className="d-flex align-items-center text-white">
                  <div className="delivery-icon me-3 d-flex align-items-center justify-content-center rounded-circle bg-primary" style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, #1e40af 0%, #0ea5e9 100%)', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' }}>
                    <span className="fs-2 text-white">🔄</span>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2 text-white">Comprehensive systems</h5>
                    <p className="mb-0 opacity-90">From initial research and prototyping to deployment and ongoing improvement, we deliver solutions that work end-to-end.</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={11} className="offset-lg-1">
              <div className="p-3 rounded-pill mb-2" style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' }}>
                <div className="d-flex align-items-center text-white">
                  <div className="delivery-icon me-3 d-flex align-items-center justify-content-center rounded-circle" style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, #1e40af 0%, #0ea5e9 100%)', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' }}>
                    <span className="fs-2 text-white">💡</span>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2 text-white">Actionable intelligence</h5>
                    <p className="mb-0 opacity-90">Transform diverse, complex datasets into insights that are understandable, timely, and directly usable in operational decisions.</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={11} className="offset-lg-0">
              <div className="p-3 rounded-pill mb-2" style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' }}>
                <div className="d-flex align-items-center text-white">
                  <div className="delivery-icon me-3 d-flex align-items-center justify-content-center rounded-circle" style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, #1e40af 0%, #0ea5e9 100%)', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' }}>
                    <span className="fs-2 text-white">🛡️</span>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2 text-white">Secure, resilient platforms</h5>
                    <p className="mb-0 opacity-90">Engineered for mission-critical and regulated environments, ensuring data protection, compliance, and uninterrupted performance.</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={11} className="offset-lg-1">
              <div className="p-3 rounded-pill mb-2" style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' }}>
                <div className="d-flex align-items-center text-white">
                  <div className="delivery-icon me-3 d-flex align-items-center justify-content-center rounded-circle" style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, #1e40af 0%, #0ea5e9 100%)', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' }}>
                    <span className="fs-2 text-white">👤</span>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2 text-white">Human-first design</h5>
                    <p className="mb-0 opacity-90">Interfaces and workflows that prioritise usability, transparency, and empowerment, so technology amplifies human capability rather than replacing it.</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={11} className="offset-lg-0">
              <div className="p-3 rounded-pill" style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' }}>
                <div className="d-flex align-items-center text-white">
                  <div className="delivery-icon me-3 d-flex align-items-center justify-content-center rounded-circle" style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, #1e40af 0%, #0ea5e9 100%)', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' }}>
                    <span className="fs-2 text-white">🤝</span>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2 text-white">Collaborative innovation</h5>
                    <p className="mb-0 opacity-90">Co-created with end-users, domain experts, and stakeholders, ensuring relevance, adoption, and measurable impact.</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Work With Us Section */}
      <section id="why-work-with-us" className="why-work-with-us-section-gradient text-white py-6">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-4" data-text="WHY WORK WITH US">WHY WORK WITH US</h2>
            <p className="lead">
              We are a trusted partner who delivers solutions that work in the real world. Our team combines deep technical expertise with ethical, human-centred approaches to create systems that are reliable, transparent, and meaningful.
            </p>
          </div>
          
          <Row className="g-2 justify-content-center">
            <Col lg={10}>
              <div className="d-flex align-items-center mb-2 p-4 rounded-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(10px)' }}>
                <div className="why-icon me-3 d-flex align-items-center justify-content-center rounded-circle position-relative" style={{ width: '80px', height: '80px', minWidth: '80px', backgroundColor: 'transparent' }}>
                  {/* Three long dashes positioned around the circle */}
                  <div className="position-absolute rounded-circle" style={{ width: '80px', height: '80px', border: '1px solid rgba(255,255,255,0.6)', boxShadow: '0 0 8px rgba(255, 255, 255, 0.2)' }}></div>
                  <div className="position-absolute rounded-circle" style={{ width: '70px', height: '70px', border: '2px solid #3b82f6', boxShadow: '0 0 15px rgba(59, 130, 246, 0.6), 0 0 30px rgba(59, 130, 246, 0.3)', top: '5px', left: '5px' }}></div>
                  <div className="position-absolute rounded-circle" style={{ width: '60px', height: '60px', border: '1px dashed #10b981', boxShadow: '0 0 8px rgba(16, 185, 129, 0.4), 0 0 16px rgba(16, 185, 129, 0.2), inset 0 0 8px rgba(16, 185, 129, 0.3)', top: '10px', left: '10px' }}></div>
                  <span className="fs-3 position-relative" style={{ zIndex: 1 }}>✅</span>
                </div>
                <div>
                  <h5 className="fw-bold mb-2 text-white">Reliable results</h5>
                  <p className="text-white opacity-75 mb-0">Robust, well-engineered systems that integrate seamlessly and perform under real-world conditions.</p>
                </div>
              </div>
            </Col>
            <Col lg={10}>
              <div className="d-flex align-items-center mb-2 p-4 rounded-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(10px)' }}>
                <div className="why-icon me-3 d-flex align-items-center justify-content-center rounded-circle position-relative" style={{ width: '80px', height: '80px', minWidth: '80px', backgroundColor: 'transparent' }}>
                  {/* Three long dashes positioned around the circle */}
                  <div className="position-absolute rounded-circle" style={{ width: '80px', height: '80px', border: '1px solid rgba(255,255,255,0.6)', boxShadow: '0 0 8px rgba(255, 255, 255, 0.2)' }}></div>
                  <div className="position-absolute rounded-circle" style={{ width: '70px', height: '70px', border: '2px solid #3b82f6', boxShadow: '0 0 15px rgba(59, 130, 246, 0.6), 0 0 30px rgba(59, 130, 246, 0.3)', top: '5px', left: '5px' }}></div>
                  <div className="position-absolute rounded-circle" style={{ width: '60px', height: '60px', border: '1px dashed #10b981', boxShadow: '0 0 8px rgba(16, 185, 129, 0.4), 0 0 16px rgba(16, 185, 129, 0.2), inset 0 0 8px rgba(16, 185, 129, 0.3)', top: '10px', left: '10px' }}></div>
                  <span className="fs-3 position-relative" style={{ zIndex: 1 }}>🧠</span>
                </div>
                <div>
                  <h5 className="fw-bold mb-2 text-white">Deep technical expertise</h5>
                  <p className="text-white opacity-75 mb-0">Advanced AI, immersive technologies, data science, and systems engineering applied to complex challenges.</p>
                </div>
              </div>
            </Col>
            <Col lg={10}>
              <div className="d-flex align-items-center mb-2 p-4 rounded-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(10px)' }}>
                <div className="why-icon me-3 d-flex align-items-center justify-content-center rounded-circle position-relative" style={{ width: '80px', height: '80px', minWidth: '80px', backgroundColor: 'transparent' }}>
                  <div className="position-absolute rounded-circle" style={{ width: '80px', height: '80px', border: '1px solid rgba(255,255,255,0.6)', boxShadow: '0 0 8px rgba(255, 255, 255, 0.2)' }}></div>
                  <div className="position-absolute rounded-circle" style={{ width: '70px', height: '70px', border: '2px solid #3b82f6', boxShadow: '0 0 15px rgba(59, 130, 246, 0.6), 0 0 30px rgba(59, 130, 246, 0.3)', top: '5px', left: '5px' }}></div>
                  <div className="position-absolute rounded-circle" style={{ width: '60px', height: '60px', border: '1px dashed #10b981', boxShadow: '0 0 8px rgba(16, 185, 129, 0.4), 0 0 16px rgba(16, 185, 129, 0.2), inset 0 0 8px rgba(16, 185, 129, 0.3)', top: '10px', left: '10px' }}></div>
                  <span className="fs-3 position-relative" style={{ zIndex: 1 }}>💬</span>
                </div>
                <div>
                  <h5 className="fw-bold mb-2 text-white">Clarity and collaboration</h5>
                  <p className="text-white opacity-75 mb-0">Open communication and co-design practices that ensure teams stay aligned and empowered.</p>
                </div>
              </div>
            </Col>
            <Col lg={10}>
              <div className="d-flex align-items-center mb-2 p-4 rounded-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(10px)' }}>
                <div className="why-icon me-3 d-flex align-items-center justify-content-center rounded-circle position-relative" style={{ width: '80px', height: '80px', minWidth: '80px', backgroundColor: 'transparent' }}>
                  <div className="position-absolute rounded-circle" style={{ width: '80px', height: '80px', border: '1px solid rgba(255,255,255,0.6)', boxShadow: '0 0 8px rgba(255, 255, 255, 0.2)' }}></div>
                  <div className="position-absolute rounded-circle" style={{ width: '70px', height: '70px', border: '2px solid #3b82f6', boxShadow: '0 0 15px rgba(59, 130, 246, 0.6), 0 0 30px rgba(59, 130, 246, 0.3)', top: '5px', left: '5px' }}></div>
                  <div className="position-absolute rounded-circle" style={{ width: '60px', height: '60px', border: '1px dashed #10b981', boxShadow: '0 0 8px rgba(16, 185, 129, 0.4), 0 0 16px rgba(16, 185, 129, 0.2), inset 0 0 8px rgba(16, 185, 129, 0.3)', top: '10px', left: '10px' }}></div>
                  <span className="fs-3 position-relative" style={{ zIndex: 1 }}>⚡</span>
                </div>
                <div>
                  <h5 className="fw-bold mb-2 text-white">Reduced operational burden</h5>
                  <p className="text-white opacity-75 mb-0">We anticipate challenges, manage complexity, and streamline processes so your teams can focus on core priorities.</p>
                </div>
              </div>
            </Col>
            <Col lg={10}>
              <div className="d-flex align-items-center p-4 rounded-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(10px)' }}>
                <div className="why-icon me-3 d-flex align-items-center justify-content-center rounded-circle position-relative" style={{ width: '80px', height: '80px', minWidth: '80px', backgroundColor: 'transparent' }}>
                  <div className="position-absolute rounded-circle" style={{ width: '80px', height: '80px', border: '1px solid rgba(255,255,255,0.6)', boxShadow: '0 0 8px rgba(255, 255, 255, 0.2)' }}></div>
                  <div className="position-absolute rounded-circle" style={{ width: '70px', height: '70px', border: '2px solid #3b82f6', boxShadow: '0 0 15px rgba(59, 130, 246, 0.6), 0 0 30px rgba(59, 130, 246, 0.3)', top: '5px', left: '5px' }}></div>
                  <div className="position-absolute rounded-circle" style={{ width: '60px', height: '60px', border: '1px dashed #10b981', boxShadow: '0 0 8px rgba(16, 185, 129, 0.4), 0 0 16px rgba(16, 185, 129, 0.2), inset 0 0 8px rgba(16, 185, 129, 0.3)', top: '10px', left: '10px' }}></div>
                  <span className="fs-3 position-relative" style={{ zIndex: 1 }}>🤝</span>
                </div>
                <div>
                  <h5 className="fw-bold mb-2 text-white">Integrity and trust</h5>
                  <p className="text-white opacity-75 mb-0">We build confidence through consistent delivery, ethical practice, and transparent decision-making, not empty promises.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
}
