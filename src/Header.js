import React, { useState, useEffect } from "react";
import Headerlogo from "./Headerlogo";
import "./App.css";
import {
  Route,
  Redirect,
  BrowserRouter as Router,
  Switch,
  Link,
} from "react-router-dom";
import { useHistory } from "react-router";

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
// import $ from "jquery";
import PropTypes from "prop-types";

import "@szhsin/react-menu/dist/index.css";
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
function Header(props) {
  const [globalID, setglobalID] = useState([""]);
  const [users, setUsers] = useState(["areeb"]);
  const [articlesinterests, setarticlesinterests] = useState([false]);
  const [id, setid] = useState([""]);
  const [username, setusername] = useState([""]);
  const [gender, setgender] = useState([""]);
  const [haircolor, sethaircolor] = useState([""]);
  const [bust, setbust] = useState([""]);
  const [country, setcountry] = useState([""]);
  const [height, setheight] = useState([""]);
  const [hips, sethips] = useState([""]);
  const [language, setlanguage] = useState([""]);
  const [Title, setTitle] = useState([""]);
  const [waist, setwaist] = useState([""]);
  const [anything, setanything] = useState([""]);
  const [Raise_your_voice, setRaise_your_voice] = useState([
    "Raise_your_voice_for_equal_rights",
  ]);
  const [Raise_your_voice_for_feminist, setRaise_your_voice_for_feminist] =
    useState(["Raise_your_voice_for_feminist"]);
  const [
    Raise_your_voice_against_racisms,
    setRaise_your_voice_against_racisms,
  ] = useState(["Raise_your_voice_against_racisms"]);
  const [
    Raise_your_voice_against_domestic_voilance,
    setRaise_your_voice_against_domestic_voilance,
  ] = useState(["Raise_your_voice_against_domestic_voilance"]);
  const [
    Raise_your_voice_against_problems_at_work,
    setRaise_your_voice_against_problems_at_work,
  ] = useState(["Raise_your_voice_against_problems_at_work"]);
  const [share_local_news, setshare_local_news] = useState([
    "share_local_news",
  ]);
  const [Poetry, setPoetry] = useState(["Poetry"]);
  const [Poems, setPoems] = useState(["Poems"]);
  const [Short_Stories, setShort_Stories] = useState(["Short_Stories"]);
  const [Long_Stories, setLong_Stories] = useState(["Long_Stories"]);
  const [Articles, setArticles] = useState(["Articles"]);
  const [Novels, setNovels] = useState(["Novels"]);
  const [SINGING, setSINGING] = useState(["SINGING"]);
  const [RAP_TALENT, setRAP_TALENT] = useState(["RAP_TALENT"]);
  const [DANCE_TALENT, setDANCE_TALENT] = useState(["DANCE_TALENT"]);
  const [FEMINIST, setFEMINIST] = useState(["Feminism"]);
  const [MENTAL_ILLNESS, setMENTAL_ILLNESS] = useState(["MENTAL_ILLNESS"]);
  const [Anxiety, setAnxiety] = useState(["Anxiety"]);
  const [Depression, setDepression] = useState(["Depression"]);
  const [OCD, setOCD] = useState(["OCD"]);
  const [BPD, setBPD] = useState(["BPD"]);
  const [CPTSD, setCPTSD] = useState(["CPTSD"]);
  const [OSFED, setOSFED] = useState(["OSFED"]);
  const [Parents, setParents] = useState(["Parents"]);
  const [Teen, setTeen] = useState(["Teen"]);
  const [Food, setFood] = useState(["Food"]);
  const [Fashion, setFashion] = useState(["Fashion"]);
  const [Sports, setSports] = useState(["Sports"]);
  const [MOTIVATIONAL_SPEAKERS, setMOTIVATIONAL_SPEAKERS] = useState([
    "MOTIVATIONAL_SPEAKERS",
  ]);
  const [COMEDY_MOTIVATIONAL_SPEAKERS, setCOMEDY_MOTIVATIONAL_SPEAKERS] =
    useState(["COMEDY_MOTIVATIONAL_SPEAKERS"]);
  const [Ballet_Dance, setBallet_Dance] = useState(["Ballet_Dance"]);
  const [Ballroom_Dance, setBallroom_Dance] = useState(["Ballroom_Dance"]);
  const [Contemporary_Dance, seContemporary_Dancet] = useState([
    "Contemporary_Dance",
  ]);

  const [Hip_Hop_Dance, setHip_Hop_Dance] = useState(["Hip_Hop_Dance"]);
  const [login_logout, setlogin_logout] = useState(["Hip_Hop_Dance"]);
  const [Jazz_Dance, setJazz_Dance] = useState(["Jazz_Dance"]);
  const [Salsa_Dance, setSalsa_Dance] = useState(["Salsa_Dance"]);
  const [Belly_Dance, setBelly_Dance] = useState(["Belly_Dance"]);
  const [Tap_Dance, setTap_Dance] = useState(["Tap_Dance"]);
  const [Modern_Dance, setModern_Dance] = useState(["Modern_Dance"]);
  const [Swing_Dance, setSwing_Dance] = useState(["Swing_Dance"]);
  const [loginlogout, setloginlogout] = useState([""]);
  const [videos, setvideos] = useState([""]);
  const [blogersintrestlist, setblogersintrestlist] = useState([""]);
  const [quotesintrestlist, setquotesintrestlist] = useState([""]);
  const [data, setdata] = useState([""]);
  const history = useHistory();
  const loginlogoutasd = React.useCallback(() => {
    let data = localStorage.getItem("myData");
    if (data === null) {
      setloginlogout("Login");
    } else {
      setloginlogout("logout");
    }
    setid(data);
  }, []);

  useEffect(() => {
    let data = localStorage.getItem("myData");
    if (data === null) {
      setlogin_logout("Login");
    } else {
      setlogin_logout("logout");
    }
    setdata(data);
    loginlogoutasd();
  }, [loginlogoutasd]);

  useEffect(() => {
    if (data !== "") {
      if (articlesinterests === true) {
        setarticlesinterests(false);
        articlesintrestpage();
      }
      if (videos === true) {
        setvideos(false);
        videointrestpage();
      }
      if (blogersintrestlist === true) {
        setblogersintrestlist(false);
        bloggersintrestpage();
      }
      if (quotesintrestlist === true) {
        setquotesintrestlist(false);
        quotesintrestpage();
      }
    }
  });

  const articlesintrestpage = () => {
    history.push("/ArticalIntrestlist");
  };
  const videointrestpage = () => {
    history.push("/VideoIntrestlist");
  };

  const bloggersintrestpage = () => {
    history.push("/BloggersIntrestlist");
  };

  const quotesintrestpage = () => {
    history.push("/QuotesIntrestlist");
  };

  const loginORlogout = () => {
    localStorage.removeItem("myData");
  };

  return (
    <div>
      <div>
        <nav
          // style={{ backgroundColor: "red", height: 80, fontSize: 7 }}
          class="navbar navbar-expand-md navbar-dark fixed-top"
          style={{
            backgroundColor: "red",
            height: 80,
            fontSize: 9.2,
            position: "relative",
            textTransform: "uppercase",
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
                  style={{ marginTop: -2, marginLeft: -30 }}
                  class="navbar-toggler"
                  type="button"
                  // data-toggle="collapse"
                  // data-target="#collapsibleNavbar"
                >
                  {/* <span class="navbar-toggler-icon"></span> */}
                  <Link to="/">
                    <i
                      class="fa fa-home"
                      style={{
                        fontSize: 29,
                        marginTop: 8,
                        color: "white",
                        marginLeft: 4,
                      }}
                      aria-hidden="true"
                    ></i>
                    <b>
                      <Link to="/">
                        <p
                          style={{
                            fontSize: 13,
                            color: "white",
                            marginTop: 2,
                          }}
                        >
                          Home
                        </p>
                      </Link>
                    </b>
                  </Link>
                </button>
              </Col>
              <Col>
                <button
                  style={{ marginLeft: -30 }}
                  class="navbar-toggler"
                  type="button"
                  // data-toggle="collapse"
                  // data-target="#collapsibleNavbar"
                >
                  {/* <span class="navbar-toggler-icon"></span> */}
                  <Link to="/Sign">
                    <i
                      class="fa fa-user"
                      style={{
                        fontSize: 29,
                        marginTop: 1,
                        color: "white",
                        marginLeft: 8,
                      }}
                      aria-hidden="true"
                    ></i>
                    <div onClick={() => loginORlogout()}>
                      <Link to="/Sign">
                        <b>
                          <p
                            style={{
                              color: "white",
                              fontSize: 13,
                              marginTop: 1,
                            }}
                          >
                            {login_logout}
                          </p>
                        </b>
                      </Link>
                    </div>
                  </Link>
                </button>
              </Col>
              <Row>
                <p
                  class="navbar-toggler"
                  style={{
                    marginTop: 20,
                    color: "white",
                    marginRight: 2,
                  }}
                >
                  <b>
                    <Menu
                      menuButton={
                        <MenuButton
                          styles={{
                            backgroundColor: "red",
                            color: "white",
                            fontSize: 10.5,
                            textTransform: "uppercase",
                            border: "none",
                            outline: "none",
                          }}
                        >
                          <b>Post Article/Video</b>
                        </MenuButton>
                      }
                    >
                      <MenuItem>
                        <Link
                          style={{
                            color: "red",
                            textDecoration: "none",
                            fontSize: 11,
                          }}
                          to="/Articalupload"
                        >
                          Articles & Poetry
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          style={{
                            color: "red",
                            textDecoration: "none",
                            fontSize: 11,
                          }}
                          to="/VideoUpload"
                        >
                          Video Upload
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          style={{
                            color: "red",
                            textDecoration: "none",
                            fontSize: 11,
                          }}
                          to="/Uploadbloggers"
                        >
                          Blogs
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          style={{
                            color: "red",
                            textDecoration: "none",
                            fontSize: 11,
                          }}
                          to="/Uploadquotes"
                        >
                          Quotes
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          style={{
                            color: "red",
                            textDecoration: "none",
                            fontSize: 11,
                          }}
                          to={"/UploadModelingimages"}
                        >
                          Modeling Images
                        </Link>
                      </MenuItem>
                    </Menu>
                  </b>
                </p>
              </Row>
            </Row>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <Link
                    class="nav-link"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                    to="/"
                    style={{ color: "white" }}
                  >
                    <b>HOME</b>
                  </Link>
                </li>
                {/* <li class="nav-item">
                    <Link to={"/Profile/" + this.state.id}
                      class="nav-link"
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                      style={{ color: "white" }}
                    >
                      <b>PROFILE</b>
                    </Link>
                  </li> */}

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    style={{ color: "white" }}
                  >
                    <b>Post</b>
                  </a>
                  <div class="dropdown-menu">
                    <Link
                      to={"/Articalupload"}
                      style={{ color: "red" }}
                      class="dropdown-item"
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      Articles & Poetry
                    </Link>
                    <Link
                      to={"/VideoUpload"}
                      style={{ color: "red" }}
                      class="dropdown-item"
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      Post Video
                    </Link>
                    <Link
                      to={"/Uploadbloggers"}
                      style={{ color: "red" }}
                      class="dropdown-item"
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      Post Blogs
                    </Link>
                    <Link
                      to={"/Uploadquotes"}
                      style={{ color: "red" }}
                      class="dropdown-item"
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      Post Quotes
                    </Link>
                    <Link
                      to={"/UploadModelingimages"}
                      style={{ color: "red" }}
                      class="dropdown-item"
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      Post Modelling Images
                    </Link>
                  </div>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    style={{ color: "white" }}
                  >
                    <b>Profile</b>
                  </a>
                  <div class="dropdown-menu">
                    <Link
                      style={{ color: "red" }}
                      to={"/Updateprofile"}
                      class="dropdown-item"
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      Update profile
                    </Link>
                    <Link
                      style={{ color: "red" }}
                      to={"/Profile/" + id}
                      class="dropdown-item"
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      See profile
                    </Link>
                    <div onClick={() => loginORlogout()}>
                      <Link
                        style={{ color: "red" }}
                        to="/Sign"
                        class="dropdown-item"
                        data-toggle="collapse"
                        data-target=".navbar-collapse.show"
                      >
                        {login_logout}
                      </Link>
                    </div>
                  </div>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                    style={{ color: "white" }}
                  >
                    <b>MY INTEREST</b>
                  </a>
                  <div class="dropdown-menu">
                    <Link
                      onClick={() => setarticlesinterests(true)}
                      style={{ color: "red" }}
                      class="dropdown-item"
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      ARTICLES
                    </Link>
                    <Link
                      onClick={() => setvideos(true)}
                      class="dropdown-item"
                      style={{ color: "red" }}
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      VIDEOS
                    </Link>
                    <Link
                      onClick={() => setblogersintrestlist(true)}
                      style={{ color: "red" }}
                      class="dropdown-item"
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      BLOGS
                    </Link>
                    <Link
                      onClick={() => setquotesintrestlist(true)}
                      style={{ color: "red" }}
                      class="dropdown-item"
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      QUOTES
                    </Link>
                  </div>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                    style={{ color: "white" }}
                  >
                    <b>
                      SHARE NEWS<br></br>with people
                    </b>
                  </a>
                  <div class="dropdown-menu">
                    <Link
                      class="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      style={{ color: "white" }}
                    >
                      <b style={{ color: "red", fontSize: 10 }}>
                        Share local news
                      </b>
                    </Link>
                    <div class="dropdown-menu">
                      <Link
                        to={"/Articallist/" + share_local_news}
                        style={{ color: "red" }}
                        class="dropdown-item"
                        data-toggle="collapse"
                        data-target=".navbar-collapse.show"
                      >
                        article
                      </Link>
                      <Link
                        to={"/Videolist/" + share_local_news}
                        style={{ color: "red" }}
                        class="dropdown-item"
                        data-toggle="collapse"
                        data-target=".navbar-collapse.show"
                      >
                        video
                      </Link>
                    </div>
                  </div>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                    style={{ color: "white" }}
                  >
                    <b>
                      Writers &<br></br>poetry
                    </b>
                  </a>
                  <div class="dropdown-menu">
                    <Link
                      to={"/Articallist/" + Poetry}
                      class="dropdown-item"
                      style={{ color: "red" }}
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      Poetry
                    </Link>
                    <Link
                      to={"/Articallist/" + Poems}
                      class="dropdown-item"
                      style={{ color: "red" }}
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      Poems
                    </Link>
                    <Link
                      to={"/Articallist/" + Short_Stories}
                      class="dropdown-item"
                      style={{ color: "red" }}
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      Short Stories
                    </Link>
                    <Link
                      to={"/Articallist/" + Long_Stories}
                      class="dropdown-item"
                      style={{ color: "red" }}
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      Long Stories
                    </Link>
                    <Link
                      to={"/Articallist/" + Articles}
                      class="dropdown-item"
                      style={{ color: "red" }}
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      Articles
                    </Link>
                    {/* <Link
                        to={"/Articallist/" + this.state.Young_adult}
                        class="dropdown-item"
                        data-toggle="collapse"
                        data-target=".navbar-collapse.show"
                      >
                        Young & adult
                      </Link> */}
                    <Link
                      to={"/Articallist/" + Novels}
                      class="dropdown-item"
                      style={{ color: "red" }}
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      Novels
                    </Link>
                  </div>
                </li>
                <li class="nav-item">
                  <Link
                    to="/Bloggerslist"
                    class="nav-link"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                    style={{ color: "white" }}
                  >
                    <b>COVID-19</b>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to="/Quoteslist"
                    class="nav-link"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                    style={{ color: "white" }}
                  >
                    <b>Quotes</b>
                  </Link>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                    style={{ color: "white" }}
                  >
                    <b>
                      ME TOO for<br></br>
                      women& men
                    </b>
                  </a>
                  <div class="dropdown-menu">
                    <Link
                      to={"/Articallist/" + Raise_your_voice}
                      style={{ color: "red" }}
                      class="dropdown-item"
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      Raise your voice for equal rights
                    </Link>
                    <Link
                      to={"/Articallist/" + Raise_your_voice_for_feminist}
                      class="dropdown-item"
                      style={{ color: "red" }}
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      Raise your voice for Feminism
                    </Link>
                    <Link
                      to={"/Articallist/" + Raise_your_voice_against_racisms}
                      style={{ color: "red" }}
                      class="dropdown-item"
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      Raise your voice against racism
                    </Link>
                    <Link
                      to={
                        "/Articallist/" +
                        Raise_your_voice_against_domestic_voilance
                      }
                      class="dropdown-item"
                      style={{ color: "red" }}
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      Raise your voice against domestic violence
                    </Link>
                    <Link
                      to={
                        "/Articallist/" +
                        Raise_your_voice_against_problems_at_work
                      }
                      class="dropdown-item"
                      style={{ color: "red" }}
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      Raise your voice against Problems at work
                    </Link>
                  </div>
                </li>

                <li class="nav-item">
                  <Link
                    to={"/Articalslist/" + FEMINIST}
                    class="nav-link"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                    style={{ color: "white" }}
                  >
                    <b>Feminism</b>
                  </Link>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                    style={{ color: "white" }}
                  >
                    <b>
                      Open UP About<br></br> MENTAL health
                    </b>
                  </a>
                  <div class="dropdown-menu">
                    <Link
                      to={"/Articallist/" + Depression}
                      class="dropdown-item"
                      style={{ color: "red" }}
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      Depression
                    </Link>
                    <Link
                      to={"/Articallist/" + Anxiety}
                      class="dropdown-item"
                      style={{ color: "red" }}
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      Anxiety
                    </Link>
                    <Link
                      to={"/Articallist/" + OCD}
                      class="dropdown-item"
                      style={{ color: "red" }}
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      OCD
                    </Link>
                    <Link
                      to={"/Articallist/" + BPD}
                      class="dropdown-item"
                      style={{ color: "red" }}
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      BPD
                    </Link>
                    <Link
                      to={"/Articallist/" + CPTSD}
                      style={{ color: "red" }}
                      class="dropdown-item"
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      CPTSD
                    </Link>
                    <Link
                      to={"/Articallist/" + OSFED}
                      class="dropdown-item"
                      style={{ color: "red" }}
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      OSFED
                    </Link>
                  </div>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                    style={{ color: "white" }}
                  >
                    <b>
                      Articles &<br></br>Categories
                    </b>
                  </a>
                  <div class="dropdown-menu">
                    <Link
                      to={"/Articallist/" + "single_parents"}
                      style={{ color: "red" }}
                      class="dropdown-item"
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      single parents
                    </Link>
                    <Link
                      to={"/Articallist/" + Parents}
                      class="dropdown-item"
                      style={{ color: "red" }}
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      Parents
                    </Link>
                    {/* <Link
                      to={"/Articallist/" + Anxiety}
                      class="dropdown-item"
                      style={{ color: "red" }}
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      Anxiety
                    </Link> */}
                    <Link
                      to={"/Articallist/" + Teen}
                      class="dropdown-item"
                      style={{ color: "red" }}
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      Teen life
                    </Link>
                    <Link
                      to={"/Articallist/" + Food}
                      class="dropdown-item"
                      style={{ color: "red" }}
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      Food
                    </Link>
                    <Link
                      to={"/Articallist/" + Fashion}
                      class="dropdown-item"
                      style={{ color: "red" }}
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      Fashion
                    </Link>
                    <Link
                      to={"/Articallist/" + Sports}
                      class="dropdown-item"
                      style={{ color: "red" }}
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      Sports
                    </Link>
                  </div>
                </li>
                <li class="nav-item">
                  <Link
                    to={"/ActingAndModeling/" + id}
                    class="nav-link"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                    style={{ color: "white" }}
                  >
                    <b>
                      ACTING&<br></br>MODELLING
                    </b>
                  </Link>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    style={{ color: "white" }}
                  >
                    <b>Vidoes</b>
                  </a>
                  <div class="dropdown-menu">
                    <Link
                      to={"/Videoslist/" + SINGING}
                      class="dropdown-item"
                      style={{ color: "red" }}
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      <b>
                        Singing<br></br>Talent
                      </b>
                    </Link>
                    <Link
                      to={"/Videoslist/" + RAP_TALENT}
                      class="dropdown-item"
                      style={{ color: "red" }}
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      <b>
                        Rap<br></br>Talent
                      </b>
                    </Link>
                    <Link
                      to={"/Videoslist/" + DANCE_TALENT}
                      class="dropdown-item"
                      style={{ color: "red" }}
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      <b>
                        Dance<br></br>Talent
                      </b>
                    </Link>
                    <Link
                      to={"/Videoslist/" + MOTIVATIONAL_SPEAKERS}
                      class="dropdown-item"
                      style={{ color: "red" }}
                      data-toggle="collapse"
                      data-target=".navbar-collapse.show"
                    >
                      <b>
                        MOTIVATIONAL<br></br>SPEAKERS
                      </b>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="Headerlogoheader">
          <Headerlogo />
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object,
  errors: PropTypes.object,
};
export default Header;
