import React from "react";
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
import { Link } from "react-router-dom";
// import logo2 from './photo/hay.png';
import ReactPlayer from "react-player";
import axios from "axios";
import Header from "./Header";
import $ from "jquery";

var user_id = "1";
class Articallist extends React.Component {
  componentWillMount() {
    this.setState({ articlelist: this.props.match.params.value }, () => {});
  }

  componentDidMount() {
    $(document).ready(function () {
      $("html, body").animate({ scrollTop: 0 }, "fast");
    });
    this.fetchdata();
  }

  constructor(props) {
    super(props);
    this.state = {
      count: [],
      user_id: "",
      views: "",
      componentupdate: false,
      articlelist: "",
      nothing: "Nothing in this Category",
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.match.params.value != state.articlelist) {
      return {
        articlelist: props.match.params.value,
        nothing: "Nothing in this Category",
      };
    }
  }
  componentDidUpdate(props) {
    if (props.match.params.value != this.state.articlelist) {
      this.fetchdata();
    }
    const { history } = props;
    if (this.state.componentupdate === true && this.state.user_id != "") {
      this.viewsadd();
    }
  }
  Mostviewed() {
    axios
      .post(window.$API_URL + "galleryMostviewed", this.state.articlelist)
      .then((res) => {
        this.setState({
          articlelist: this.props.match.params.value,
        });
        var grid = [];
        for (let i = 0; i < res.data.length; i++) {
          if (res.data === "Nothing in this Category") {
            this.setState({
              count: [],
              nothing: "Nothing in this Category",
            });
          } else {
            console.log(res.data);
            var d = $("<div>").html(res.data[i].pragraph_text);
            var obj = {};
            obj["text"] = d[0].outerText;
            obj["title"] = res.data[i].title;
            obj["paragraph_id"] = res.data[i].paragraph_id;
            obj["imagename"] = res.data[i].imagename;
            obj["category"] = res.data[i].category;
            obj["username"] = res.data[i].username;
            obj["views"] = res.data[i].views;
            obj["date"] = res.data[i].date;
            obj["user_id"] = res.data[i].user_id;
            obj["imagename"] = res.data[i].imagename;
            grid.push(obj);
          }
        }
        this.setState({
          count: grid,
          nothing: "",
        });
      });
  }
  fetchdata() {
    axios
      .post(window.$API_URL + "gallery", this.state.articlelist)
      .then((res) => {
        this.setState({
          articlelist: this.props.match.params.value,
        });
        console.log(res.data);
        var grid = [];
        for (let i = 0; i < res.data.length; i++) {
          if (res.data === "Nothing in this Category") {
            this.setState({
              count: [],
              nothing: "Nothing in this Category",
            });
          } else {
            var d = $("<div>").html(res.data[i].pragraph_text);
            var obj = {};
            obj["text"] = d[0].outerText;
            obj["title"] = res.data[i].title;
            obj["paragraph_id"] = res.data[i].paragraph_id;
            obj["imagename"] = res.data[i].imagename;
            obj["category"] = res.data[i].category;
            obj["views"] = res.data[i].views;
            obj["username"] = res.data[i].username;
            obj["user_id"] = res.data[i].user_id;
            obj["date"] = res.data[i].date;
            obj["imagename"] = res.data[i].imagename;

            grid.push(obj);
          }
        }
        this.setState({
          count: grid,
          nothing: "",
        });
      });
  }

  viewsadd() {
    const { history } = this.props;
    this.setState({
      componentupdate: false,
    });
    var obj = [];
    obj = {
      view: this.state.views + 1,
      user_id: this.state.user_id,
    };
    // axios.post(window.$API_URL + "viewinsertparagraph", obj).then((res) => { });
    return history.push("/Artical/" + this.state.user_id);
  }

  Recentuploaded() {
    axios
      .post(window.$API_URL + "galleryRecentuploaded", this.state.articlelist)
      .then((res) => {
        this.setState({
          articlelist: this.props.match.params.value,
        });
        var grid = [];
        for (let i = 0; i < res.data.length; i++) {
          if (res.data === "Nothing in this Category") {
            this.setState({
              count: [],
              nothing: "Nothing in this Category",
            });
          } else {
            var d = $("<div>").html(res.data[i].pragraph_text);
            var obj = {};
            obj["text"] = d[0].outerText;
            obj["title"] = res.data[i].title;
            obj["paragraph_id"] = res.data[i].paragraph_id;
            obj["imagename"] = res.data[i].imagename;
            obj["category"] = res.data[i].category;
            obj["username"] = res.data[i].username;
            obj["views"] = res.data[i].views;
            obj["date"] = res.data[i].date;
            obj["user_id"] = res.data[i].user_id;
            obj["imagename"] = res.data[i].imagename;
            grid.push(obj);
          }
        }
        this.setState({
          count: grid,
          nothing: "",
        });
      });
  }

  render() {
    return (
      <div className="nnn">
        <Header />
        <Container>
          <div className=" background1">
            <Container id="title_message">
              <Row style={{ marginTop: 20 }}>
                <Col md={3}>
                  <button
                    onClick={() => this.Recentuploaded()}
                    className="qw buttonsize"
                  >
                    <p className="btnP2">Recent uploaded</p>
                  </button>
                </Col>
                <Col md={3}>
                  <button
                    onClick={() => this.Mostviewed()}
                    className="wq buttonsize"
                  >
                    <p className="btnP2">Most viewed</p>
                  </button>
                </Col>
                <Col md={3}>
                  <button className="ew buttonsize">
                    <p className="btnP2">My Interest</p>
                  </button>
                </Col>
                <Col md={3}>
                  <button
                    onClick={() => this.Mostviewed()}
                    className="re buttonsize"
                  >
                    Top 99
                  </button>
                </Col>
              </Row>
            </Container>
          </div>
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
            <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
            <Row>
              <p>{this.state.nothing}</p>
              <div className="row container ">
                {this.state.count.map((value, index) => (
                  <Col md={3}>
                    <div className="box articlelistmargins">
                      <div className="box1">
                        <h4 className="firstlineparagraph">{value.category}</h4>
                        <Link to={"/Profile/" + value.user_id}>
                          <h5 className="name cursor">by {value.username}</h5>
                        </Link>
                        <h5 className="name5">Published at {value.date}</h5>
                        <h5 className="name2" id="someDivname2">
                          <i>{value.title}</i>
                        </h5>
                        {value.imagename ? (
                          <div>
                            <img
                              id="someimage"
                              width="220"
                              height="150"
                              src={window.$API_URLIMG + value.imagename}
                              alt="non"
                            />
                            <p
                              onClick={() =>
                                this.setState({
                                  views: value.views,
                                  user_id: value.paragraph_id,
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
                              {value.text}
                            </p>

                            <p
                              onClick={() =>
                                this.setState({
                                  views: value.views,
                                  user_id: value.paragraph_id,
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
                ))}
              </div>
            </Row>
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
          </Container>
        </Container>
      </div>
    );
  }
}
export default Articallist;
