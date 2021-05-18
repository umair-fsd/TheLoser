import React from "react";
import logo1 from "./photo/firstbatman.png";
import logo2 from "./photo/logo.png";
import logs from "./photo/logs.png";

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
// import logo2 from './photo/hay.png';

class Headerlogo extends React.Component {
  render() {
    return (
      <div className="Headerlogomain">
        <Container>
          <Row>
            <img className="batname" src={logo1} />
            <img className="batname1" src={logs} />
            <img className="heartname" src={logo2} />
            {/* <b className="texttheloser">The Loser</b> */}
          </Row>
        </Container>
      </div>
    );
  }
}
export default Headerlogo;
