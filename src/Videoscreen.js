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
import ReactPlayer from "react-player";
import axios from "axios";
import { Markup } from "interweave";
import Modal, { closeStyle } from "simple-react-modal";
import toast, { Toaster } from "react-hot-toast";
import Header from "./Header";
import $ from "jquery";
import { ButtonGroup, ButtonMenu, MenuItem } from "react-rainbow-components";

class Videoscreen extends Component {
  forceUpdateHandlerUSERlikes() {
    let data = localStorage.getItem("myData");
    var obj = [];
    obj = {
      video_id: this.state.video_id,
      user_id: data,
    };
    axios.post(window.$API_URL + "videoUSERlikes", obj).then((res) => {
      if (res.data.length === 0) {
        this.setState({
          like: "",
        });
      } else {
        this.setState({
          like: res.data.length,
        });
      }
    });
  }

  forceUpdateHandleralllikes() {
    var obj = [];
    obj = {
      video_id: this.state.video_id,
    };
    axios.post(window.$API_URL + "videoalllikes", obj).then((res) => {
      const formatCash = (n) => {
        if (n < 1e3) return n;
        if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
        if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
        if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
        if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
      };
      this.setState({
        alllike: formatCash(res.data.length),
      });
    });
  }

  forceUpdateHandler() {
    axios.post(window.$API_URL + "fullvideo", this.state.id).then((res) => {
      $(document).ready(function () {
        $("html, body").animate({ scrollTop: 0 }, "fast");
      });
      this.setState({
        video_link: res.data[0].video_link,
        componentupdate: false,
        username: res.data[0].username,
        sub_category: res.data[0].sub_category,
        category: res.data[0].category,
        imagename: res.data[0].imagename,
        video_title: res.data[0].video_title,
        date: res.data[0].date,
        user_img: res.data[0].user_img,
        video_id: res.data[0].video_id,
        user_id: res.data[0].user_id,
      });
      const formatCash = (n) => {
        if (n < 1e3) return n;
        if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
        if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
        if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
        if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
      };
      console.log(res.data[0].views);
      console.log(res.data, "fullvideo");

      this.setState({
        views: formatCash(res.data[0].views),
      });
      this.forceUpdateHandleralllikes();
      this.forceUpdateHandlerUSERlikes();
      this.forceUpdateHandlerVideos();
    });
  }

  forceUpdateHandlerVideos() {
    console.log(this.state.sub_category);
    console.log("this.state.sub_category");
    var obj = [];
    if (this.state.sub_category != "") {
      obj = {
        sub_category: this.state.sub_category,
      };
      axios
        .post(window.$API_URL + "forceUpdateHandlerVideos", obj)
        .then((res) => {
          this.setState({
            cVideo1: res.data[0],
            cVideo2: res.data[1],
            cVideo3: res.data[2],
            cVideo4: res.data[3],
          });
        });
    } else {
      obj = {
        category: this.state.category,
      };
      axios
        .post(window.$API_URL + "forceUpdateHandlerVideoscategory", obj)
        .then((res) => {
          this.setState({
            cVideo1: res.data[0],
            cVideo2: res.data[1],
            cVideo3: res.data[2],
            cVideo4: res.data[3],
          });
        });
    }
  }

  nFormatter(num) {
    return this.state.views;
  }
  Reportvidoe() {
    var obj = [];
    obj = {
      id: this.state.id,
    };
    axios
      .post(window.$API_URL + "insertreportvideo", obj)
      .then((res) => {
        if (res.data === "1") {
          toast.success("Reported successfully");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    $(function () {
      $(".heart").on("click", function () {
        $(this).toggleClass("is-active");
      });
    });

    this.setState({
      id: this.props.match.params.link,
      componentupdate: true,
    });

    // this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  }

  componentDidUpdate() {
    if (this.state.id != "" && this.state.componentupdate === true) {
      this.forceUpdateHandler();
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  like() {
    let data = localStorage.getItem("myData");
    if (data === null) {
      toast.error("Please Login/Signup First");
    } else {
      var obj = [];
      obj = {
        user_id: data,
        video_id: this.state.video_id,
      };
      axios.post(window.$API_URL + "videolike", obj).then((res) => {
        if (res.data === 1) {
          this.setState({
            like: "1",
          });
          this.forceUpdateHandleralllikes();
        }
      });
    }
  }

  unlike() {
    let data = localStorage.getItem("myData");
    if (data === null) {
      toast.error("Please Login/Signup First");
    } else {
      var obj = [];
      obj = {
        // like: this.state.like + 1,
        user_id: data,
        video_id: this.state.video_id,
      };
      axios.post(window.$API_URL + "videoUnlike", obj).then((res) => {
        if (res.data === 1) {
          this.setState({
            like: "",
          });
          this.forceUpdateHandleralllikes();
        }
      });
    }
  }
  show() {
    this.setState({ show: true });
  }

  close() {
    this.setState({ show: false });
  }

  constructor(props) {
    super(props);
    this.state = {
      id: "",
      date: "",
      video_title: "",
      componentupdate: false,
      username: "",
      imagename: "",
      show: false,
      alllike: "",
      like: "",
      Report: "",
      video_link: "",
      user_img: "",
      video_id: "",
      previouslike: "",
      componentupdatelike: false,
      user_id: "",
      views: "",
      cVideo1: "",
      cVideo2: "",
      blockuser: "blocked",
      category: "",
      cVideo3: "",
      cVideo4: "",
      sub_category: "",
      videoidnew: "",
    };
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  }

  render() {
    const isLoggedIn = this.state.like;

    return (
      <div>
        <Header />
        <Toaster />
        <div className="containervideoscreen">
          <Row className="aftervideoscreenrow">
            <div className="aftervideoscreen1">
              <div className="aftervideoscreenuser">
                <Link
                  className="linkaftervideo"
                  style={{
                    cursor: "pointer",
                    color: "inherit",
                  }}
                  to={"/Profile/" + this.state.user_id}
                >
                  <Row>
                    <img
                      className="kl2 "
                      src={window.$API_URLIMG + this.state.user_img}
                    />
                    <Col>
                      <p className="kl2p ">{this.state.username}</p>
                      <p className="kl4p ">{this.state.date}</p>
                    </Col>
                  </Row>
                </Link>
              </div>
            </div>
            <ButtonGroup className="aftervideoscreen">
              <ButtonMenu
                menuAlignment="right"
                // menuSize="x-small"
                buttonVariant="base"
                icon={<i class="fa fa-ellipsis-v fa-lg" aria-hidden="true"></i>}
              >
                <MenuItem
                  onClick={() => this.Reportvidoe()}
                  label="Report Video"
                />
              </ButtonMenu>
            </ButtonGroup>
          </Row>
          <Row style={{}}>
            <div className="videodiv">
              <ReactPlayer
                className="bigReactPlayercenter"
                playing={true}
                controls={true}
                url={window.$API_URLIMG + this.state.video_link}
                width="100%"
              />
            </div>
          </Row>
          <Row className="afterReactPlayercenter">
            <div className="stagetop">
              {this.state.alllike}
              {isLoggedIn ? (
                <i
                  onClick={() => this.unlike()}
                  style={{ color: "#E2264D" }}
                  class="fa fa-heart fa-2x"
                  aria-hidden="true"
                ></i>
              ) : (
                <i
                  onClick={() => this.like()}
                  style={{ color: "black" }}
                  class="fa fa-heart fa-2x"
                  aria-hidden="true"
                ></i>
              )}
            </div>

            <div className="stageeye">
              {this.state.views}
              <i class="fa fa-eye fa-2x" aria-hidden="true"></i>
            </div>
          </Row>
        </div>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        <ins
          class="adsbygoogle"
          style={{ display: "block" }}
          data-ad-format="fluid"
          data-ad-layout-key="-6t+ed+2i-1n-4w"
          data-ad-client="ca-pub-5497294500716598"
          data-ad-slot="5288848875"
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        <Container>
          <div className="oooo">
            <Col style={{ textAlign: "justify", marginTop: -35 }}>
              {" "}
              <p className="ppp1" style={{ marginBottom: -35 }}>
                VIDEOS
              </p>{" "}
            </Col>
          </div>
          <Row>
            <Col md={3}>
              <div
                onClick={() =>
                  this.setState({
                    id: this.state.cVideo1.video_id,
                    sub_category: "",
                    category: "",
                    componentupdate: true,
                  })
                }
              >
                <video
                  className="videolistpage"
                  src={window.$API_URLIMG + this.state.cVideo1.video_link}
                />
                <p
                  className="largeline"
                  style={{
                    width: 220,
                    textAlign: "left",
                  }}
                >
                  {this.state.cVideo1.video_title}
                </p>
              </div>
            </Col>
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
            <Col md={3}>
              <div
                onClick={() =>
                  this.setState({
                    id: this.state.cVideo2.video_id,
                    category: "",
                    sub_category: "",
                    componentupdate: true,
                  })
                }
              >
                <video
                  className="videolistpage"
                  src={window.$API_URLIMG + this.state.cVideo2.video_link}
                />
                <p
                  className="largeline"
                  style={{
                    width: 220,
                  }}
                >
                  {this.state.cVideo2.video_title}
                </p>
              </div>
            </Col>

            <Col md={3} sm={12}>
              <div
                onClick={() =>
                  this.setState({
                    id: this.state.cVideo3.video_id,
                    category: "",
                    sub_category: "",
                    componentupdate: true,
                  })
                }
              >
                <video
                  className="videolistpage"
                  src={window.$API_URLIMG + this.state.cVideo3.video_link}
                />
                <p
                  className="largeline"
                  style={{
                    width: 220,
                  }}
                >
                  {this.state.cVideo3.video_title}
                </p>
              </div>
            </Col>

            <Col md={3}>
              <div
                onClick={() =>
                  this.setState({
                    id: this.state.cVideo4.video_id,
                    category: "",
                    sub_category: "",
                    componentupdate: true,
                  })
                }
              >
                <video
                  className="videolistpage"
                  src={window.$API_URLIMG + this.state.cVideo4.video_link}
                />
                <p
                  className="largeline"
                  style={{
                    width: 220,
                  }}
                >
                  {this.state.cVideo4.video_title}
                </p>
              </div>
            </Col>
          </Row>
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
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </Container>
      </div>
    );
  }
}

export default Videoscreen;
