import Head from "next/head";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Header from "@/components/Header";
import ContactFooter from "@/components/ContactFooter";

export default function Contact() {

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Head>
        <title>Contact Us - Insight Via Artificial Intelligence</title>
        <meta name="description" content="Get in touch with Insight Via Artificial Intelligence. We'd love to hear from you and discuss how we can help with your AI solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="contact-page hero-gradient-bg" style={{ paddingTop: '100px', flex: '1', paddingBottom: '2rem' }}>
        <div className="contact-dots-background"></div>
        <div className="contact-flower-background"></div>
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} xl={8}>
              <div className="contact-hero text-center mb-5">
                <h1 className="display-4 fw-bold mb-4">CONTACT US</h1>
              </div>

              <Row>
                <Col xs={12}>
                  {/* Email Box */}
                  <div className="contact-box mb-4 contact-box-clickable contact-box-animate-1" onClick={() => window.location.href = 'mailto:contactus@ivai.com.au'} style={{ cursor: 'pointer' }}>
                    <div className="contact-box-content text-center">
                      <p className="mb-0 fs-3">
                        <span className="fw-semibold text-white">
                          contactus at ivai.com.au
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Office Details Box */}
                  <div className="contact-box contact-box-clickable contact-box-animate-2" onClick={() => window.open('https://www.google.com/maps/place/Insight+Via+Artificial+Intelligence+Pty+Ltd./@-34.9247019,138.6023076,891m/data=!3m3!1e3!4b1!5s0x6ab0ced187e37379:0x817ceba21a9877c7!4m6!3m5!1s0x6ab0d0666cffffff:0x1ba42fefe03da80f!8m2!3d-34.9247064!4d138.6071785!16s%2Fg%2F11ll7cj50b?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D', '_blank')} style={{ cursor: 'pointer' }}>
                    <div className="contact-box-content text-center">
                      <div className="office-details-split">
                        <div className="office-address">
                          <h6 className="text-white mb-2">Visit Us</h6>
                          <p className="mb-0 text-white-50">
                            Unit 3C, Level 3<br />
                            60 Hindmarsh Square<br />
                            Adelaide, 5000<br />
                            South Australia<br />
                          </p>
                        </div>
                        
                        <div className="office-hours">
                          <h6 className="text-white mb-2">Office Hours</h6>
                          <p className="mb-0 text-white-50">
                            Monday - Friday<br />
                            9:00 AM - 5:00 PM ACDT<br />
                            <br />
                            <em>(By appointment only)</em>
                          </p>
                        </div>

                        <div className="office-location">
                          <img 
                            src="/south-australia-logo.svg" 
                            alt="South Australia" 
                            width="100" 
                            height="auto" 
                            className="mb-2"
                          />
                          <p className="text-white-50 mb-0" style={{ lineHeight: '1.2' }}>
                            <small><em>Based in South Australia</em></small>
                          </p>
                          <p className="text-white-50 mb-0" style={{ lineHeight: '1.2', marginTop: '-0.2rem' }}>
                            <small><em>Kaurna Country</em></small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </main>

      <ContactFooter />
    </div>
  );
}