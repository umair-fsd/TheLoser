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

class Uservideos extends React.Component {
  componentWillMount() {
    let data = localStorage.getItem("myData");
    if (data === null) {
      const { history } = this.props;
      return history.push("/sign");
    }
    this.setState({ articlelist: this.props.match.params.value }, () => {});
  }

  componentDidMount() {
    $(document).ready(function () {
      $("html, body").animate({ scrollTop: 0 }, "fast");
    });
    this.fetchdata();
    // this.setState({articlelist:this.props.match.params.value,
    // },
    // () => {
    //   console.log('1this.state.componentDidMount', this.state.articlelist);
    // })
  }

  constructor(props) {
    super(props);
    this.state = {
      count: [],
      user_id: "",
      video_link: "",
      componentupdate: false,
      componentupdate1: false,
      articlelist: "",
      thisisme: "",
      follow_id: "",
      views: "",
      nothing: "Nothing in this Category",
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.match.params.value != state.follow_id) {
      return {
        follow_id: props.match.params.value,
        nothing: "Nothing in this Category",
      };
    }
  }
  deletevideo() {
    var obj = [];
    obj = {
      video_id: this.state.user_id,
      video_link: this.state.video_link,
    };
    axios.post(window.$API_URL + "deletevideo", obj).then((res) => {
      if (res.data) {
        window.location.reload(false);
      }
    });
  }
  componentDidUpdate(props) {
    if (props.match.params.value != this.state.follow_id) {
      this.fetchdata();
    }
    if (this.state.componentupdate === true && this.state.user_id != "") {
      this.viewsadd();
    }
    if (this.state.componentupdate1 === true && this.state.user_id != "") {
      this.deletevideo();
    }
  }

  Profile() {
    const { history } = this.props;
    this.setState({
      componentupdate: false,
    });
    return history.push("/Profile/" + this.state.follow_id);
  }

  Articles() {
    const { history } = this.props;
    this.setState({
      componentupdate: false,
    });
    return history.push("/UserAritcles/" + this.state.follow_id);
  }

  viewsadd() {
    const { history } = this.props;
    this.setState({
      componentupdate: false,
    });
    return history.push("/Videoscreen/" + this.state.user_id);
  }
  fetchdata() {
    let data = localStorage.getItem("myData");

    axios
      .post(window.$API_URL + "videogalleryUservideos", this.state.follow_id)
      .then((res) => {
        console.log(res.data, "2-3");
        if (this.props.match.params.value === data) {
          this.setState({
            thisisme: "me",
          });
        }
        for (let i = 0; i < res.data.length; i++) {
          if (res.data === "Nothing in this Category") {
            this.setState({
              count: [],
              nothing: "Nothing in this Category",
            });
          } else {
            this.setState({
              count: res.data,
              nothing: "",
            });
          }
        }
      });
  }

  render() {
    return (
      <div className="nnn">
        <Header />
        <div className="profilemargintop">
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
            <Row>
              <Col>
                <button
                  onClick={() => this.Profile()}
                  className="qw buttonsize"
                >
                  <p className="btnP2">Profile</p>
                </button>
              </Col>
              <Col>
                <button className="wq buttonsize">
                  <p className="btnP2">Videos</p>
                </button>
              </Col>
              <Col>
                <button
                  onClick={() => this.Articles()}
                  className="ew buttonsize"
                >
                  <p className="btnP2">Articles</p>
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
            style={{ display: "block", textAlign: "center" }}
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-5497294500716598"
            data-ad-slot="3594647345"
          ></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
          <div className="row container ">
            {this.state.count.map((value, index) => (
              <Col md={3}>
                <p class="videolist " style={{ backgroundColor: "white" }}>
                  <div className="articlelistmargins">
                    <video
                      onClick={() =>
                        this.setState({
                          views: value.views,
                          user_id: value.video_id,
                          componentupdate: true,
                        })
                      }
                      className="cursor uservideos"
                      height="210"
                      style={{ borderRadius: 5 }}
                      src={window.$API_URLIMG + value.video_link}
                    />
                    <Row>
                      <p className="largeline" style={{ width: 220 }}>
                        {value.video_title}
                      </p>
                      {this.state.thisisme ? (
                        <i
                          onClick={() =>
                            this.setState({
                              user_id: value.video_id,
                              video_link: value.video_link,
                              componentupdate1: true,
                            })
                          }
                          class="fa fa-trash header-icon cursor"
                          aria-hidden="true"
                        ></i>
                      ) : null}
                    </Row>
                  </div>
                </p>
              </Col>
            ))}
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
        </Container>
      </div>
    );
  }
}
export default Uservideos;
