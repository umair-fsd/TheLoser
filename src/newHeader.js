import React from "react";

import "./App.css";
import {
  Route,
  Redirect,
  BrowserRouter as Router,
  Switch,
  Link,
} from "react-router-dom";

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
import $ from "jquery";

import "@szhsin/react-menu/dist/index.css";
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      username: "",
      gender: "",
      haircolor: "",
      bust: "",
      country: "",
      height: "",
      hips: "",
      language: "",
      Title: "",
      waist: "",
      anything: "",
      Raise_your_voice: "Raise_your_voice",
      Raise_your_voice_for_feminist: "Raise_your_voice_for_feminist",
      Raise_your_voice_against_racisms: "Raise_your_voice_against_racisms",
      Raise_your_voice_against_domestic_voilance:
        "Raise_your_voice_against_domestic_voilance",
      Raise_your_voice_against_problems_at_work:
        "Raise_your_voice_against_problems_at_work",
      share_local_news: "share_local_news",

      Poetry: "Poetry",
      Poems: "Poems",
      Short_Stories: "Short_Stories",
      Long_Stories: "Long_Stories",
      Articles: "Articles",
      Young_adult: "Young_adult",
      Novels: "Novels",

      SINGING: "SINGING",
      RAP_TALENT: "RAP_TALENT",

      FEMINIST: "FEMINIST",

      MENTAL_ILLNESS: "MENTAL_ILLNESS",
      Depression: "Depression",
      OCD: "OCD",
      BPD: "BPD",
      CPTSD: "CPTSD",
      OSFED: "OSFED",

      single_parents: "single_parents",
      Parents: "Parents",
      Teen: "Teen",
      Food: "Food",
      Fashion: "Fashion",
      Sports: "Sports",

      MOTIVATIONAL_SPEAKERS: "MOTIVATIONAL_SPEAKERS",

      COMEDY_MOTIVATIONAL_SPEAKERS: "COMEDY_MOTIVATIONAL_SPEAKERS",

      Ballet_Dance: "Ballet_Dance",
      Ballroom_Dance: "Ballroom_Dance",
      Contemporary_Dance: "Contemporary_Dance",
      Hip_Hop_Dance: "Hip_Hop_Dance",
      Jazz_Dance: "Jazz_Dance",
      Salsa_Dance: "Salsa_Dance",
      Belly_Dance: "Belly_Dance",
      Tap_Dance: "Tap_Dance",
      Modern_Dance: "Modern_Dance",
      Swing_Dance: "Swing_Dance",
    };
  }

  render() {
    return (
      <div>
        <div>
          <nav
            style={{ backgroundColor: "red", height: 80, fontSize: 13 }}
            class="navbar navbar-expand-md navbar-dark fixed-top"
            style={{
              backgroundColor: "red",
              height: 80,
              fontSize: 13,
              position: "relative",
            }}
            id="banner"
          >
            <div class="">
              {/* <a class="navbar-brand" href="#">
                <span>Logo</span> Here
              </a> */}
              <Row>
                <Col>
                  <button
                    style={{ paddingLeft: -20 }}
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapsibleNavbar"
                  >
                    <span class="navbar-toggler-icon">
                      <i
                        class="fa fa-navicon"
                        style={{ color: "#fff", fontSize: 28 }}
                      ></i>
                    </span>
                    <b>
                      <p style={{ fontSize: 12, color: "white" }}>Menu</p>
                    </b>
                  </button>
                </Col>
                <Col>
                  <button
                    style={{ marginTop: -5, marginLeft: -30 }}
                    class="navbar-toggler"
                    type="button"
                    // data-toggle="collapse"
                    // data-target="#collapsibleNavbar"
                  >
                    {/* <span class="navbar-toggler-icon"></span> */}
                    <i
                      class="fa fa-home"
                      style={{
                        fontSize: 29,
                        marginTop: 4,
                        color: "white",
                        marginLeft: 4,
                      }}
                      aria-hidden="true"
                    ></i>
                    <b>
                      <p style={{ fontSize: 13, color: "white", marginTop: 2 }}>
                        Home
                      </p>
                    </b>
                  </button>
                </Col>
                <Col>
                  <button
                    style={{ marginTop: -3, marginLeft: -30 }}
                    class="navbar-toggler"
                    type="button"
                    // data-toggle="collapse"
                    // data-target="#collapsibleNavbar"
                  >
                    {/* <span class="navbar-toggler-icon"></span> */}
                    <i
                      class="fa fa-user"
                      style={{
                        fontSize: 29,
                        marginTop: 3,
                        color: "white",
                        marginLeft: 6,
                      }}
                      aria-hidden="true"
                    ></i>
                    <b>
                      <p style={{ color: "white", fontSize: 13, marginTop: 2 }}>
                        Login
                      </p>
                    </b>
                  </button>
                </Col>
                <Row>
                  <p
                    class="navbar-toggler"
                    style={{
                      marginTop: 20,
                      fontSize: 13,
                      color: "white",
                      marginRight: 3,
                    }}
                  >
                    <b>
                      <Menu
                        menuButton={
                          <MenuButton
                            styles={{
                              backgroundColor: "red",
                              color: "white",
                              textTransform: "uppercase",
                              border: "none",
                              outline: "none",
                            }}
                          >
                            Post Article/Video
                          </MenuButton>
                        }
                      >
                        <MenuItem>
                          <Link
                            style={{ color: "black", textDecoration: "none" }}
                            to="/Articalupload"
                          >
                            Article Upload
                          </Link>
                        </MenuItem>
                        <MenuItem>
                          <Link
                            style={{ color: "black", textDecoration: "none" }}
                            to="/VideoUpload"
                          >
                            Video Upload{" "}
                          </Link>
                        </MenuItem>

                        {/* <SubMenu label="Open">
                    <MenuItem>index.html</MenuItem>
                    <MenuItem>example.js</MenuItem>
                    <MenuItem>about.css</MenuItem>
                  </SubMenu> */}
                      </Menu>
                    </b>
                  </p>
                </Row>
              </Row>
              <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav ml-auto">
                  {/* <li class="nav-item">
                    <a class="nav-link" href="#">
                      Link
                    </a>
                  </li> */}

                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbardrop"
                      data-toggle="dropdown"
                      style={{ color: "white" }}
                    >
                      <b> Have A Say</b>
                    </a>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">
                        Link 1
                      </a>
                      <a class="dropdown-item" href="#">
                        Link 2
                      </a>
                      <a class="dropdown-item" href="#">
                        Link 3
                      </a>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbardrop"
                      data-toggle="dropdown"
                      style={{ color: "white" }}
                    >
                      <b> ME TO</b>
                    </a>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">
                        Link 1
                      </a>
                      <a class="dropdown-item" href="#">
                        Link 2
                      </a>
                      <a class="dropdown-item" href="#">
                        Link 3
                      </a>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbardrop"
                      data-toggle="dropdown"
                      style={{ color: "white" }}
                    >
                      <b>Writers</b>
                    </a>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">
                        Link 1
                      </a>
                      <a class="dropdown-item" href="#">
                        Link 2
                      </a>
                      <a class="dropdown-item" href="#">
                        Link 3
                      </a>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbardrop"
                      data-toggle="dropdown"
                      style={{ color: "white" }}
                    >
                      <b>Feminst</b>
                    </a>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">
                        Link 1
                      </a>
                      <a class="dropdown-item" href="#">
                        Link 2
                      </a>
                      <a class="dropdown-item" href="#">
                        Link 3
                      </a>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbardrop"
                      data-toggle="dropdown"
                      style={{ color: "white" }}
                    >
                      <b> Open UP About</b>
                    </a>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">
                        Link 1
                      </a>
                      <a class="dropdown-item" href="#">
                        Link 2
                      </a>
                      <a class="dropdown-item" href="#">
                        Link 3
                      </a>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbardrop"
                      data-toggle="dropdown"
                      style={{ color: "white" }}
                    >
                      <b> Artical &Categories</b>
                    </a>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">
                        Link 1
                      </a>
                      <a class="dropdown-item" href="#">
                        Link 2
                      </a>
                      <a class="dropdown-item" href="#">
                        Link 3
                      </a>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbardrop"
                      data-toggle="dropdown"
                      style={{ color: "white" }}
                    >
                      <b>
                        {" "}
                        Acting&<br></br>Modeling
                      </b>
                    </a>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">
                        Link 1
                      </a>
                      <a class="dropdown-item" href="#">
                        Link 2
                      </a>
                      <a class="dropdown-item" href="#">
                        Link 3
                      </a>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" style={{ color: "white" }}>
                      <b>
                        {" "}
                        Singing<br></br>Talent
                      </b>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" style={{ color: "white" }}>
                      <b>
                        {" "}
                        Rape<br></br>Talent
                      </b>
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbardrop"
                      data-toggle="dropdown"
                      style={{ color: "white" }}
                    >
                      <b> Dance Talent</b>
                    </a>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">
                        Link 1
                      </a>
                      <a class="dropdown-item" href="#">
                        Link 2
                      </a>
                      <a class="dropdown-item" href="#">
                        Link 3
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <section id="about">
            <div class="container"></div>
          </section>
        </div>
      </div>
    );
  }
}
export default Header;
