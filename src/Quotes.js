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
import { ButtonGroup, ButtonMenu, MenuItem } from "react-rainbow-components";
import $ from "jquery";

class Artical extends Component {
  state = {
    count: "",
  };

  constructor(props) {
    super(props);
    this.state = {
      id: "",
      anything: "",
      componentupdate: false,
      username: "",
      imagename: "",
      show: false,
      Report: "",
      views: "",
      video_id: "",
      user_img: "",
      user_id: "",
      category: "",
      sub_category: "",
      title: "",
      article1: "",
      article2: "",
      article3: "",
      article4: "",
      categorybutton: "",
      sub_categorybutton: "",
    };
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  }

  forceUpdateHandlerUSERlikes() {
    let data = localStorage.getItem("myData");
    var obj = [];
    obj = {
      video_id: this.state.video_id,
      user_id: data,
    };
    axios.post(window.$API_URL + "quoteslikes", obj).then((res) => {
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
    axios.post(window.$API_URL + "quotesalllikes", obj).then((res) => {
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
    $(document).ready(function () {
      $("html, body").animate({ scrollTop: 0 }, "fast");
    });
    axios
      .post(window.$API_URL + "quotesfulscreen", this.state.id)
      .then((res) => {
        this.setState({
          count: res.data[0].quotes_description,
          componentupdate: false,
          username: res.data[0].username,
          imagename: res.data[0].quotes_image,
          // category: res.data[0].category,
          title: res.data[0].title,
          // sub_category: res.data[0].sub_category,
          user_img: res.data[0].user_img,
          video_id: res.data[0].quotes_id,
          user_id: res.data[0].user_id,
        });
        const formatCash = (n) => {
          if (n < 1e3) return n;
          if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
          if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
          if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
          if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
        };
        this.setState({
          views: formatCash(res.data[0].views),
        });
        this.forceUpdateHandleralllikes();
        this.forceUpdateHandlerUSERlikes();
        this.forceUpdateHandlerVideos();
        this.props.match.params.link = "Johnny";
      });
  }

  forceUpdateHandlerVideos() {
    // var obj = []
    //   this.setState({
    //     sub_categorybutton: "asdf",
    //     categorybutton: ""
    //   })
    //   obj = {
    //     sub_category: this.state.sub_category,
    //   }
    axios.post(window.$API_URL + "forceUpdateHandlerquotes").then((res) => {
      var grid = [];
      console.log(res.data, "11111111");
      for (let i = 0; i < res.data.length; i++) {
        var d = $("<div>").html(res.data[i].description);
        var obj = {};
        obj["text"] = d[0].outerText;
        obj["paragraph_id"] = res.data[i].quotes_id;
        obj["username"] = res.data[i].username;
        obj["views"] = res.data[i].views;
        obj["image"] = res.data[i].quotes_image;
        obj["user_id"] = res.data[i].user_id;
        obj["date"] = res.data[i].quotes_date;
        grid.push(obj);
      }
      this.setState({
        article1: grid[0],
        article2: grid[1],
        article3: grid[2],
        article4: grid[3],
      });
    });
  }

  Report() {
    var obj = [];
    obj = {
      id: this.state.id,
    };
    axios
      .post(window.$API_URL + "insertreportarticle", obj)
      .then((res) => {
        if (res.data === "1") {
          toast.success("Reported successfully");
        }
      })
      .catch((error) => {});
  }

  componentDidMount() {
    $(document).ready(function () {
      $("html, body").animate({ scrollTop: 0 }, "fast");
    });
    this.setState({
      id: this.props.match.params.link,
      componentupdate: true,
    });
    // this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  }

  componentDidUpdate() {
    if (this.state.id !== "" && this.state.componentupdate === true) {
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
      axios.post(window.$API_URL + "quoteslike", obj).then((res) => {
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
      axios.post(window.$API_URL + "quotesUnlike", obj).then((res) => {
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

  render() {
    const isLoggedIn = this.state.like;
    return (
      <div className="nnn">
        <Header />
        <Toaster />
        <Container>
          <Row className="usernamemargintop">
            <Col md={7}>
              <Row>
                <Link
                  style={{ cursor: "pointer", color: "inherit" }}
                  to={"/Profile/" + this.state.user_id}
                >
                  <Row>
                    <img
                      className="kl2 "
                      src={window.$API_URLIMG + this.state.user_img}
                    />
                    <p className="kl2p ">{this.state.username}</p>
                  </Row>
                </Link>
              </Row>
            </Col>

            <Col md={5}>
              <div className="articleheartline">
                <Row>
                  <div className="bettry">
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
                    <p className="sen ">{this.state.alllike}</p>
                  </div>
                  <div className="eyee">
                    <i class="fa fa-eye fa-2x" aria-hidden="true"></i>
                    <p className="send ">{this.state.views}</p>
                  </div>
                  <div className="dot">
                    <ButtonGroup className="">
                      <ButtonMenu
                        menuAlignment="right"
                        buttonVariant="base"
                        icon={
                          <i
                            class="fa fa-ellipsis-v fa-2x"
                            aria-hidden="true"
                          ></i>
                        }
                      >
                        <MenuItem
                          onClick={() => this.Report()}
                          label="Report this post"
                        />
                      </ButtonMenu>
                    </ButtonGroup>
                  </div>
                </Row>
              </div>
            </Col>
          </Row>
          {/* <button
                className="buttonreport"
                onClick={() => this.Report()}
                // onClick={this.show.bind(this)}
              >
                Reoprt Article
              </button> */}
          <div className="articlewidth ">
            <h1 style={{ color: "red" }}>{this.state.title}</h1>
            {this.state.imagename ? (
              <img
                className="fullarticlesimage"
                src={window.$API_URLIMG + this.state.imagename}
                alt=""
              />
            ) : (
              <p></p>
            )}

            <div className="dangerouslySetInnerHTML">
              <Markup content={this.state.count} />
            </div>
          </div>
        </Container>
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

        <Container>
          <div>
            <Row style={{ width: "99%" }}>
              <Col md={3}>
                <div className="boxquotes articlelistmargins">
                  <div className="box1">
                    <Link to={"/Profile/" + this.state.article1.user_id}>
                      <h5 className="namequotes cursor">
                        by {this.state.article1.username}
                      </h5>
                    </Link>
                    <h5 className="name5">
                      Published at {this.state.article1.date}
                    </h5>

                    {this.state.article1.image ? (
                      <div>
                        <img
                          id="someimage"
                          width="220"
                          height="150"
                          src={window.$API_URLIMG + this.state.article1.image}
                          alt="non"
                        />
                        <p
                          onClick={() =>
                            this.setState({
                              id: this.state.article1.paragraph_id,
                              componentupdate: true,
                            })
                          }
                          className="name4condition cursor"
                        >
                          READ COMPLETE
                          <i class="fa fa-angle-right"></i>
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p
                          className="name3"
                          id="someDiv"
                          style={{ textAlign: "justify" }}
                        >
                          {this.state.article1.text}
                        </p>
                        <p
                          onClick={() =>
                            this.setState({
                              id: this.state.article1.paragraph_id,
                              componentupdate: true,
                            })
                          }
                          className="name4 cursor"
                        >
                          READ COMPLETE
                          <i class="fa fa-angle-right"></i>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </Col>

              <Col md={3}>
                <div className="boxquotes articlelistmargins">
                  <div className="box1">
                    <Link to={"/Profile/" + this.state.article2.user_id}>
                      <h5 className="namequotes cursor">
                        by {this.state.article2.username}
                      </h5>
                    </Link>
                    <h5 className="name5">
                      Published at {this.state.article2.date}
                    </h5>

                    {this.state.article2.image ? (
                      <div>
                        <img
                          id="someimage"
                          width="220"
                          height="150"
                          src={window.$API_URLIMG + this.state.article2.image}
                          alt="non"
                        />
                        <p
                          onClick={() =>
                            this.setState({
                              id: this.state.article2.paragraph_id,
                              componentupdate: true,
                            })
                          }
                          className="name4condition cursor"
                        >
                          READ COMPLETE
                          <i class="fa fa-angle-right"></i>
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p
                          className="name3"
                          id="someDiv"
                          style={{ textAlign: "justify" }}
                        >
                          {this.state.article2.text}
                        </p>
                        <p
                          onClick={() =>
                            this.setState({
                              id: this.state.article2.paragraph_id,
                              componentupdate: true,
                            })
                          }
                          className="name4 cursor"
                        >
                          READ COMPLETE
                          <i class="fa fa-angle-right"></i>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="boxquotes articlelistmargins">
                  <div className="box1">
                    <Link to={"/Profile/" + this.state.article3.user_id}>
                      <h5 className="namequotes cursor">
                        by {this.state.article3.username}
                      </h5>
                    </Link>
                    <h5 className="name5">
                      Published at {this.state.article3.date}
                    </h5>

                    {this.state.article3.image ? (
                      <div>
                        <img
                          id="someimage"
                          width="220"
                          height="150"
                          src={window.$API_URLIMG + this.state.article3.image}
                          alt="non"
                        />
                        <p
                          onClick={() =>
                            this.setState({
                              id: this.state.article3.paragraph_id,
                              componentupdate: true,
                            })
                          }
                          className="name4condition cursor"
                        >
                          READ COMPLETE
                          <i class="fa fa-angle-right"></i>
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p
                          className="name3"
                          id="someDiv"
                          style={{ textAlign: "justify" }}
                        >
                          {this.state.article3.text}
                        </p>
                        <p
                          onClick={() =>
                            this.setState({
                              id: this.state.article3.paragraph_id,
                              componentupdate: true,
                            })
                          }
                          className="name4 cursor"
                        >
                          READ COMPLETE
                          <i class="fa fa-angle-right"></i>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </Col>

              <Col md={3}>
                <div className="boxquotes articlelistmargins">
                  <div className="box1">
                    <Link to={"/Profile/" + this.state.article4.user_id}>
                      <h5 className="namequotes cursor">
                        by {this.state.article4.username}
                      </h5>
                    </Link>
                    <h5 className="name5">
                      Published at {this.state.article4.date}
                    </h5>

                    {this.state.article4.image ? (
                      <div>
                        <img
                          id="someimage"
                          width="220"
                          height="150"
                          src={window.$API_URLIMG + this.state.article4.image}
                          alt="non"
                        />
                        <p
                          onClick={() =>
                            this.setState({
                              id: this.state.article4.paragraph_id,
                              componentupdate: true,
                            })
                          }
                          className="name4condition cursor"
                        >
                          READ COMPLETE
                          <i class="fa fa-angle-right"></i>
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p
                          className="name3"
                          id="someDiv"
                          style={{ textAlign: "justify" }}
                        >
                          {this.state.article4.text}
                        </p>
                        <p
                          onClick={() =>
                            this.setState({
                              id: this.state.article4.paragraph_id,
                              componentupdate: true,
                            })
                          }
                          className="name4 cursor"
                        >
                          READ COMPLETE
                          <i class="fa fa-angle-right"></i>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
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
          <Link to="/Quoteslist">
            <button style={{ backgroundColor: "#FF0000", marginBottom: 20 }}>
              Load more
            </button>
          </Link>
        </Container>
      </div>
    );
  }
}

export default Artical;
