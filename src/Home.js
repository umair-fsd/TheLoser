import React from "react";
import Header from "./Header";
import { Markup } from "interweave";
import "./App.css";
import {
  Route,
  Redirect,
  BrowserRouter as Router,
  Switch,
  Link,
} from "react-router-dom";
import ReactPlayer from "react-player";
import axios from "axios";
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

class home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paragraph_id: "",
      title: "",
      article: "",
      video: "",
      cVideo1: "",
      cVideo2: "",
      cVideo3: "",
      cVideo4: "",
      pArticle1: "",
      pArticle2: "",
      pArticle3: "",
      pArticle4: "",
      pArticletext1: "",
      pArticletext2: "",
      pArticletext3: "",
      pArticletext4: "",
    };
  }
  componentDidMount() {
    $(document).ready(function () {
      $("html, body").animate({ scrollTop: 0 }, "fast");
    });
    // $(document).ready(function () {
    //   $(document).bind("contextmenu", function (e) {
    //     e.preventDefault();
    //   });
    //   $(document).keydown(function (e) {
    //     if (e.which === 123) {
    //       return false;
    //     }
    //   });
    // });

    this.fetchdata();
    this.fetchdataMainVideo();
    this.fetchdataCategoryVideo1();
    this.fetchdataCategoryVideo2();
    this.fetchdataCategoryVideo3();
    this.fetchdataCategoryVideo4();
    this.fetchdataArticle1();
    this.fetchdataArticle2();
    this.fetchdataArticle3();
    this.fetchdataArticle4();
  }
  fetchdata() {
    axios
      .post(window.$API_URL + "admin_main_articleHome")
      .then((res) => {
        console.log(res.data[0], "2-2-2");
        this.setState({
          article: res.data[0].pragraph_text,
          title: res.data[0].title,
          paragraph_id: res.data[0].paragraph_id,
        });
      })
      .catch((err) => {
        console.log("areeb", err);
      });
  }
  fetchdataMainVideo() {
    axios.post(window.$API_URL + "admin_main_videoHome").then((res) => {
      this.setState({ video: res.data[0].video_link });
    });
  }
  fetchdataCategoryVideo1() {
    axios.post(window.$API_URL + "admin_Category_video1").then((res) => {
      this.setState({ cVideo1: res.data[0] });
    });
  }
  fetchdataCategoryVideo2() {
    axios.post(window.$API_URL + "admin_Category_video2").then((res) => {
      this.setState({ cVideo2: res.data[0] });
    });
  }
  fetchdataCategoryVideo3() {
    axios.post(window.$API_URL + "admin_Category_video3").then((res) => {
      this.setState({ cVideo3: res.data[0] });
    });
  }
  fetchdataCategoryVideo4() {
    axios.post(window.$API_URL + "admin_Category_video4").then((res) => {
      this.setState({ cVideo4: res.data[0] });
    });
  }

  fetchdataArticle1() {
    axios.post(window.$API_URL + "admin_Article_p1").then((res) => {
      var d = $("<div>").html(res.data[0].pragraph_text);
      console.log(d[0].innerText, "res.data[0]");
      this.setState({
        pArticle1: res.data[0],
        pArticletext1: d[0].innerText,
      });
    });
  }

  fetchdataArticle2() {
    axios.post(window.$API_URL + "admin_Article_p2").then((res) => {
      var d = $("<div>").html(res.data[0].pragraph_text);
      this.setState({
        pArticle2: res.data[0],
        pArticletext2: d[0].innerText,
      });
    });
  }
  fetchdataArticle3() {
    axios.post(window.$API_URL + "admin_Article_p3").then((res) => {
      var d = $("<div>").html(res.data[0].pragraph_text);
      this.setState({
        pArticle3: res.data[0],
        pArticletext3: d[0].innerText,
      });
    });
  }
  fetchdataArticle4() {
    axios.post(window.$API_URL + "admin_Article_p4").then((res) => {
      var d = $("<div>").html(res.data[0].pragraph_text);
      this.setState({
        pArticle4: res.data[0],
        pArticletext4: d[0].innerText,
      });
    });
  }

  render() {
    return (
      <div className="">
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
        <div className="nnn">
          <Container>
            <Row>
              <Col md={6} sm={10} className="margintopmainarticle">
                <h2 className="mainarticletitle">{this.state.title}</h2>
                <div className="laka artigo_nome firstartical">
                  <Markup content={this.state.article} />
                </div>
                <div className="readmorediv">
                  <Link to={"/Artical/" + this.state.paragraph_id}>
                    <p className="readmore">Read more..</p>
                  </Link>
                </div>
              </Col>
              <Col md={6} className="margintopmainvideo">
                <div className="player-wrapper">
                  <ReactPlayer
                    className="react-player videohome"
                    controls={true}
                    url={window.$API_URLIMG + this.state.video}
                    width="100%"
                    height="120%"
                  />
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
            <div className="oooo">
              <Col style={{ textAlign: "justify" }}>
                <p className="ppp"> ARITCLES</p>{" "}
              </Col>
            </div>
            <div>
              <Row style={{ width: "99%" }}>
                <Col md={3}>
                  <div className="box articlelistmargins">
                    <div className="box1">
                      <h4 className="firstlineparagraph">
                        {this.state.pArticle1.category}
                      </h4>
                      <Link to={"/Profile/" + this.state.pArticle1.user_id}>
                        <h5 className="name cursor">
                          by {this.state.pArticle1.username}
                        </h5>
                      </Link>

                      <h5 className="name2" id="someDivname2">
                        <i>{this.state.pArticle1.title}</i>
                      </h5>
                      <p
                        className="name3"
                        id="someDiv"
                        style={{ textAlign: "justify" }}
                      >
                        {this.state.pArticletext1}
                      </p>
                      <Link
                        to={"/Artical/" + this.state.pArticle1.paragraph_id}
                      >
                        <p className="name4 cursor">
                          READ COMPLETE&nbsp;
                          <i class="fa fa-angle-right"></i>
                        </p>
                      </Link>
                    </div>
                  </div>
                </Col>

                <Col md={3}>
                  <div className="box articlelistmargins">
                    <div className="box1">
                      <h4 className="firstlineparagraph">
                        {this.state.pArticle2.category}
                      </h4>
                      <Link to={"/Profile/" + this.state.pArticle2.user_id}>
                        <h5 className="name cursor">
                          by {this.state.pArticle2.username}
                        </h5>
                      </Link>
                      <h5 className="name2" id="someDivname2">
                        <i>{this.state.pArticle2.title}</i>
                      </h5>
                      <p
                        className="name3"
                        id="someDiv"
                        style={{ textAlign: "justify" }}
                      >
                        {this.state.pArticletext2}
                      </p>
                      <Link
                        to={"/Artical/" + this.state.pArticle2.paragraph_id}
                      >
                        <p className="name4 cursor">
                          READ COMPLETE&nbsp;
                          <i class="fa fa-angle-right"></i>
                        </p>
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="box articlelistmargins">
                    <div className="box1">
                      <h4 className="firstlineparagraph">
                        {this.state.pArticle3.category}
                      </h4>
                      <Link to={"/Profile/" + this.state.pArticle3.user_id}>
                        <h5 className="name cursor">
                          by {this.state.pArticle3.username}
                        </h5>
                      </Link>

                      <h5 className="name2" id="someDivname2">
                        <i>{this.state.pArticle3.title}</i>
                      </h5>
                      <p
                        className="name3"
                        id="someDiv"
                        style={{ textAlign: "justify" }}
                      >
                        {this.state.pArticletext3}
                      </p>
                      <Link
                        to={"/Artical/" + this.state.pArticle3.paragraph_id}
                      >
                        <p className="name4 cursor">
                          READ COMPLETE&nbsp;
                          <i class="fa fa-angle-right"></i>
                        </p>
                      </Link>
                    </div>
                  </div>
                </Col>

                <Col md={3}>
                  <div className="box articlelistmargins">
                    <div className="box1">
                      <h4 className="firstlineparagraph">
                        {this.state.pArticle4.category}
                      </h4>
                      <Link to={"/Profile/" + this.state.pArticle4.user_id}>
                        <h5 className="name cursor">
                          by {this.state.pArticle4.username}
                        </h5>
                      </Link>
                      <h5 className="name2" id="someDivname2">
                        <i>{this.state.pArticle4.title}</i>
                      </h5>
                      <p
                        className="name3"
                        id="someDiv"
                        style={{ textAlign: "justify" }}
                      >
                        {this.state.pArticletext4}
                      </p>
                      <Link
                        to={"/Artical/" + this.state.pArticle4.paragraph_id}
                      >
                        <p className="name4 cursor">
                          READ COMPLETE&nbsp;
                          <i class="fa fa-angle-right"></i>
                        </p>
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>

              <div id="title_message" style={{}}>
                <br></br>
                <div className="oooo">
                  <Col style={{ textAlign: "justify", marginTop: -35 }}>
                    {" "}
                    <p className="ppp1" style={{ marginBottom: -35 }}>
                      VIDEOS
                    </p>{" "}
                  </Col>
                </div>
                <Row style={{ width: "99%" }}>
                  <Col md={3}>
                    <div>
                      <ReactPlayer
                        controls={true}
                        url={window.$API_URLIMG + this.state.cVideo1.video_link}
                        width="100%"
                        className="videohome"
                        height="200px"
                        // style={{ marginLeft: 30 }}
                      />
                      <p
                        className="largeline"
                        style={{
                          width: 220,
                          // marginLeft: 30,
                          textAlign: "left",
                        }}
                      >
                        {this.state.cVideo1.video_title}
                      </p>
                    </div>
                  </Col>

                  <Col md={3}>
                    <div>
                      <ReactPlayer
                        controls={true}
                        url={window.$API_URLIMG + this.state.cVideo2.video_link}
                        width="90%"
                        height="200px"
                        style={{ marginLeft: 30 }}
                      />
                      <p
                        className="largeline"
                        style={{
                          width: 220,
                          marginLeft: 30,
                        }}
                      >
                        {this.state.cVideo2.video_title}
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
                  <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
                  </script>
                  <Col md={3}>
                    <div>
                      <ReactPlayer
                        controls={true}
                        url={window.$API_URLIMG + this.state.cVideo3.video_link}
                        width="90%"
                        height="200px"
                        style={{ marginLeft: 30 }}
                      />
                      <p
                        className="largeline"
                        style={{
                          width: 220,
                          marginLeft: 30,
                        }}
                      >
                        {this.state.cVideo3.video_title}
                      </p>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div>
                      <ReactPlayer
                        controls={true}
                        url={window.$API_URLIMG + this.state.cVideo4.video_link}
                        width="90%"
                        height="200px"
                        style={{ marginLeft: 30 }}
                      />
                      <p
                        className="largeline"
                        style={{
                          width: 220,
                          marginLeft: 30,
                        }}
                      >
                        {this.state.cVideo4.video_title}
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
export default home;
