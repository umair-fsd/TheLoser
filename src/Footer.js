import React, { Component } from "react";
import {
  Button,
  Container,
  Col,
  Row,
  Card,
  Popover,
  Input,
  OverlayTrigger,
  Nav,
  Navbar,
  NavDropdown,
  Image,
  Text,
  Form,
  FormGroup,
  Label,
} from "react-bootstrap";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
class Footer extends Component {
  render() {
    return (
      <div className="footer ">
        <div className="footer1">
          <Container>
            <Row style={{ marginTop: -10 }}>
              <Col md={{ span: 2, offset: 1 }} className="yyy">
                <Row style={{ lineHeight: 2, marginLeft: "30px" }}>
                  <p style={{ color: "white" }}>
                    <Link to="/PrivacyPolicy">
                      <p style={{ color: "white" }}> Privacy Policy</p>
                    </Link>
                  </p>
                </Row>

                <Row style={{ lineHeight: 2, marginLeft: "30px" }}>
                  <p style={{ color: "white", marginTop: "-40px" }}>
                    <Link to="/Gdpr">
                      <p style={{ color: "white" }}>GDRP</p>
                    </Link>
                  </p>
                </Row>
              </Col>

              <Col md={{ span: 2, offset: 1 }} className="yyy">
                <Row style={{ lineHeight: 2, marginLeft: "30px" }}>
                  <p style={{ color: "white" }}>
                    <Link to="/TermsandConditions">
                      <p style={{ color: "white" }}> Terms conditions</p>
                    </Link>
                  </p>
                </Row>
                <Row style={{ lineHeight: 2, marginLeft: "30px" }}>
                  <p style={{ color: "white", marginTop: "-40px" }}>
                    {" "}
                    <Link to="/CookiePolicy">
                      <p style={{ color: "white" }}>Cookie Policy</p>
                    </Link>
                  </p>
                </Row>
              </Col>
              <Col md={{ span: 2, offset: 1 }} className="yyy">
                <Row style={{ lineHeight: 2, marginLeft: "30px" }}>
                  <p style={{ textAlign: "center", color: "white" }}>
                    Contact us
                  </p>
                </Row>
                <Row style={{ lineHeight: 2, marginLeft: "30px" }}>
                  <p
                    style={{
                      textAlign: "center",
                      color: "white",
                      marginTop: "-25px",
                    }}
                  >
                    <a
                      className="contact"
                      href="mailto:contactus.theloser@gmail.com"
                    >
                      Contactus.theloser@gmail.com
                    </a>
                  </p>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <div className="ioio">
          <Container>
            <Row>
              <Col className="footerrefrence"><footer> <small> The Loser &copy; 2021, Powered by Aditech Software</small> </footer> </Col>
            </Row>
          </Container>
        </div> */}
      </div>
    );
  }
}
export default Footer;
