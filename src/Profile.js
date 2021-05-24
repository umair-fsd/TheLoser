import React from "react";
// import logo1 from './photo/rana.png';
import "./App.css";
// import { Slider, Direction } from 'react-player-controls'
// import ReactPlayer from 'react-player'
import axios from "axios";
import {
  Button,
  Container,
  Col,
  Row,
  Accordion,
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
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import toast, { Toaster } from "react-hot-toast";
import Header from "./Header";
import { withRouter } from "react-router-dom";
import $ from "jquery";
import "./css/Profile.css";

var thistext = "";

class Profile extends React.Component {
  state = {};

  componentDidMount() {
    $(document).ready(function () {
      $("html, body").animate({ scrollTop: 0 }, "fast");
    });
    let data = localStorage.getItem("myData");
    if (data === this.props.match.params.value) {
      this.setState({
        followbutton: "",
      });
    } else {
      this.setState({
        followbutton: data,
      });
    }

    if (data === null) {
      this.setState({
        data: data,
      });
    } else {
      this.setState({
        data: "",
      });
    }

    if (data === null) {
      const { history } = this.props;
      return history.push("/sign");
    }
    this.setState({
      follow_id: this.props.match.params.value,
      // follow_id: this.props.match.params.value,
      componentupdate: true,
    });
  }
  Videos() {
    const { history } = this.props;
    this.setState({
      componentupdate: false,
    });
    return history.push("/Uservideos/" + this.state.follow_id);
  }
  Articles() {
    const { history } = this.props;
    this.setState({
      componentupdate: false,
    });
    return history.push("/UserAritcles/" + this.state.follow_id);
  }
  fetchdatafollow_id() {
    var obj = [];
    obj = {
      follow_id: this.state.follow_id,
    };
    axios.post(window.$API_URL + "fetchdatafollow_id", obj).then((res) => {
      console.log(res.data[0].namesCount1);
      this.setState({
        intrests: res.data[0].namesCount1,
      });
    });
  }

  fetchdatauserid() {
    var obj = [];
    obj = {
      follow_id: this.state.follow_id,
    };
    axios.post(window.$API_URL + "fetchdatauserid", obj).then((res) => {
      console.log(res.data[0].namesCount2);
      this.setState({
        fans: res.data[0].namesCount2,
      });
    });
  }
  deleteprofileimg() {
    var obj = [];
    obj = {
      tbl_portfolioImgs_id: this.state.tbl_portfolioImgs_id,
      tbl_portfolioImgs_img_name: this.state.tbl_portfolioImgs_img_name,
    };
    axios.post(window.$API_URL + "deleteprofileimg", obj).then((res) => {
      if (res.data === 1) {
        window.location.reload(false);
      }
    });
  }
  componentDidUpdate() {
    if (this.state.follow_id !== "" && this.state.componentupdate === true) {
      this.forceUpdateHandler();
      this.fetchdata();
      this.fetchdatafollow_id();
      this.fetchdatauserid();
      this.setState({
        componentupdate: false,
      });
    }
    if (
      this.state.tbl_portfolioImgs_id !== "" &&
      this.state.deletecomponentupdate === true
    ) {
      this.deleteprofileimg();
    }
  }

  fetchdata() {
    var obj = [];
    obj = {
      idimages: this.props.match.params.value,
    };
    axios.post(window.$API_URL + "profileimages", obj).then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        this.setState({ count: res.data });
      }
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      tbl_portfolioImgs_id: "",
      deletecomponentupdate: "",
      componentupdate: true,
      intrests: "",
      fans: "",
      count: [],
      haircolor: "",
      bust: "",
      height: "",
      hips: "",
      language: "",
      data: "",
      followbutton: "",
      modlengcategories: "",
      waist: "",
      anything: "",
      country: "",
      username: "",
      gender: "",
      user_cellno: "",
      user_email: "",
      tbl_portfolioImgs_img_name: "",
      Eye_color: "",
      Profession: "",
      age: "",
      Talent: "",
      blockuser: "",
      title: "",
      user_img: "",
      Social_media_profile: "",
      id: "",
      floowing_check: "Follow",
    };
    this.handleChange = this.handleChange.bind(this);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  }
  handleChange(value) {
    thistext = value;
  }
  login_logout() {
    localStorage.removeItem("myData");
  }
  forceUpdateHandler() {
    let data = localStorage.getItem("myData");
    var obj = [];
    obj = {
      my_id: data,
      follow_id: this.state.follow_id,
    };

    axios.post(window.$API_URL + "profiledata", obj).then((res) => {
      if (res.data[0].floowing_check) {
        this.setState({
          blockuser: res.data[0].block_list,
          user_img: res.data[0].user_img,
          haircolor: res.data[0].haircolor,
          height: res.data[0].height,
          language: res.data[0].language,
          Talent: res.data[0].Talent,
          modlengcategories: res.data[0].modlengcategories,
          country: res.data[0].country,
          username: res.data[0].username,
          Profession: res.data[0].Profession,
          user_cellno: res.data[0].user_cellno,
          user_email: res.data[0].user_email,
          Eye_color: res.data[0].Eye_color,
          gender: res.data[0].gender,
          floowing_check: res.data[0].floowing_check,
          title: res.data[0].conatct_email,
          age: res.data[0].age,
          workexperience: res.data[0].workexperience,
          workinterest: res.data[0].workinterest,
          writemore: res.data[0].writemore,
          Social_media_profile: res.data[0].Social_media_profile,
        });
      } else {
        this.setState({
          blockuser: res.data[0].block_list,
          user_img: res.data[0].user_img,
          title: res.data[0].conatct_email,
          haircolor: res.data[0].haircolor,
          height: res.data[0].height,
          Profession: res.data[0].Profession,
          Talent: res.data[0].Talent,
          language: res.data[0].language,
          modlengcategories: res.data[0].modlengcategories,
          country: res.data[0].country,
          gender: res.data[0].gender,
          user_email: res.data[0].user_email,
          username: res.data[0].username,
          Eye_color: res.data[0].Eye_color,
          user_cellno: res.data[0].user_cellno,
          age: res.data[0].age,
          workexperience: res.data[0].workexperience,
          workinterest: res.data[0].workinterest,
          writemore: res.data[0].writemore,
          Social_media_profile: res.data[0].Social_media_profile,
          floowing_check: "Follow",
        });
      }
    });
  }

  follow() {
    let data = localStorage.getItem("myData");
    var obj = [];
    obj = {
      my_id: data,
      follow_id: this.state.follow_id,
    };
    axios.post(window.$API_URL + "follow", obj).then((res) => {
      if (res.data === "this is your Profile") {
        toast.error("This is your Profile!");
      } else {
        toast.success(res.data);
        window.location.reload(false);
      }
      this.setState({});
    });
  }
  render() {
    const data = this.state.data;
    const followbutton = this.state.followbutton;
    if (this.state.blockuser === "blocked") {
      return (
        <div>
          <Header />
          <Toaster />
          <p style={{ textAlign: "center", marginTop: 30 }}>User blocked</p>
        </div>
      );
    } else {
      return (
        <div>
          <Header />
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
          <ins
            class="adsbygoogle"
            style={{ display: "block", textAlign: "center" }}
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-5497294500716598"
            data-ad-slot="3594647345"
          ></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
          <div style={{}} className="nnn profilemargintop ">
            <Toaster />
            <Container>
              <Row>
                <Col>
                  <button className="qw buttonsize">
                    <p className="btnP2">Profile</p>
                  </button>
                </Col>
                <Col>
                  <button
                    onClick={() => this.Videos()}
                    className="wq buttonsize"
                  >
                    <p className="btnP2">Videos</p>
                  </button>
                </Col>
                <Col>
                  <button
                    onClick={() => this.Articles()}
                    className="ew buttonsize"
                  >
                    <p className="btnP2">Articles & Poetry</p>
                  </button>
                </Col>
              </Row>
            </Container>
            <Container>
              <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
              ></script>
              <ins
                class="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-5497294500716598"
                data-ad-slot="1225480781"
                data-ad-format="auto"
                data-full-width-responsive="true"
              ></ins>
              <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
              </script>
              <Row>
                <Col md={3}>
                  <img
                    width="220"
                    height="210"
                    style={{ borderRadius: 5 }}
                    src={window.$API_URLIMG + this.state.user_img}
                  />
                  <h4>{this.state.username}</h4>{" "}
                  {/* {data ? (
                  <p>areeb1</p>
                ) : (
                    <button
                      onClick={() => this.follow()}
                      style={{ backgroundColor: "red", fontSize: 15, width: 200 }}
                    >
                      Edit profile
                    </button>
                  )
                } */}
                  {followbutton ? (
                    <button
                      onClick={() => this.follow()}
                      style={{
                        backgroundColor: "red",
                        fontSize: 15,
                        width: 200,
                      }}
                    >
                      {this.state.floowing_check}
                    </button>
                  ) : (
                    <Link to={"/Updateprofile"}>
                      <button
                        style={{
                          backgroundColor: "red",
                          fontSize: 15,
                          width: 200,
                        }}
                      >
                        Edit profile
                      </button>
                    </Link>
                  )}
                  <Row
                    style={{ marginLeft: 10, marginTop: 10, marginBottom: -15 }}
                  >
                    <div className="follower-container">
                      <Link
                        className="fan-container"
                        to={"/Followerslist/" + this.state.follow_id}
                      >
                        <h2> {this.state.intrests}</h2>
                        <h5>Fans</h5>
                      </Link>
                      <Link
                        className="interest-container"
                        to={"/IntrestList/" + this.state.follow_id}
                      >
                        <h2>{this.state.fans}</h2>
                        <h5>Intrests</h5>
                      </Link>
                    </div>
                  </Row>
                  <p>............................................</p>
                  <Accordion>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle
                          as={Button}
                          style={{ color: "red", fontSize: 15, width: 200 }}
                          variant="link"
                          eventKey="0"
                        >
                          Portfolio
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <h6>Country</h6>{" "}
                          <p style={{ fontSize: 12 }}>{this.state.country}</p>
                          <h6>Age</h6>{" "}
                          <p style={{ fontSize: 12 }}>{this.state.age}</p>
                          <h6>Height</h6>
                          <p style={{ fontSize: 12 }}>
                            {this.state.height}
                          </p>{" "}
                          <h6>Eye color</h6>{" "}
                          <p style={{ fontSize: 12 }}>{this.state.Eye_color}</p>{" "}
                          <h6>Hair Color</h6>{" "}
                          <p style={{ fontSize: 12 }}>{this.state.haircolor}</p>{" "}
                          <h6>work experience</h6>
                          <p style={{ fontSize: 12 }}>
                            {this.state.workexperience}
                          </p>{" "}
                          <h6>work Interest</h6>
                          <p style={{ fontSize: 12 }}>
                            {this.state.workinterest}
                          </p>{" "}
                          <h6>Language</h6>{" "}
                          <p style={{ fontSize: 12 }}>{this.state.language}</p>
                          <h6>Gender</h6>
                          <p style={{ fontSize: 12 }}>{this.state.gender}</p>
                          {/* <h6 >write more</h6> */}
                          <p style={{ fontSize: 12 }}>{this.state.writemore}</p>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                  <h6 style={{ marginTop: 12 }}>Social media profile</h6>
                  <a href={this.state.Social_media_profile} target="_blank">
                    {this.state.Social_media_profile}
                  </a>
                  <h6 style={{ marginTop: 12 }}>Contact Email</h6>
                  <p style={{ fontSize: 12 }}>{this.state.title}</p>
                  <h6>Phone no.</h6>
                  <p style={{ fontSize: 12 }}>{this.state.user_cellno}</p>
                  <h6>Talent</h6>
                  <p style={{ fontSize: 12 }}>{this.state.Talent}</p>
                  <h6>Profession</h6>
                  <p style={{ fontSize: 12 }}>{this.state.Profession}</p>
                  {followbutton ? (
                    <p></p>
                  ) : (
                    <div onClick={() => this.login_logout()}>
                      <Link to="/Sign">
                        <button
                          style={{
                            backgroundColor: "red",
                            fontSize: 15,
                            width: 200,
                          }}
                        >
                          Logout
                        </button>
                      </Link>
                    </div>
                  )}
                </Col>

                <Col md={9}>
                  <Row>
                    <Container>
                      <div className="row container ">
                        {this.state.count.map((value, index) => (
                          <Col md={4}>
                            <div>
                              <div className=" row" style={{ margin: "auto" }}>
                                <div style={{ margin: 20 }}>
                                  <img
                                    width="220"
                                    height="auto"
                                    src={window.$API_URLIMG + value.img_name}
                                  />
                                  {followbutton ? (
                                    <p></p>
                                  ) : (
                                    <i
                                      onClick={() =>
                                        this.setState({
                                          tbl_portfolioImgs_img_name:
                                            value.img_name,
                                          tbl_portfolioImgs_id:
                                            value.tbl_portfolioImgs_id,
                                          deletecomponentupdate: true,
                                        })
                                      }
                                      class="fa fa-trash header-iconarticleprofilimg cursor"
                                      aria-hidden="true"
                                    ></i>
                                  )}
                                </div>
                              </div>
                            </div>
                          </Col>
                        ))}
                      </div>
                    </Container>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      );
    }
  }
}
export default withRouter(Profile);
