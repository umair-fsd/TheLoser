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

class Videolist extends React.Component {
  componentWillMount() {
    this.setState({ articlelist: this.props.match.params.value }, () => {
      console.log("1this.state.componentWillMount", this.state.articlelist);
    });
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
      componentupdate: false,
      articlelist: "",
      views: "",
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
    if (this.state.componentupdate === true && this.state.user_id != "") {
      this.viewsadd();
    }
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
    // axios.post(window.$API_URL + "viewinsert", obj).then((res) => { });

    return history.push("/Videoscreen/" + this.state.user_id);
  }
  fetchdata() {
    axios
      .post(window.$API_URL + "videogallery", this.state.articlelist)
      .then((res) => {
        this.setState({
          articlelist: this.props.match.params.value,
        });
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

  Mostviewed() {
    axios
      .post(window.$API_URL + "videogalleryMostviewed", this.state.articlelist)
      .then((res) => {
        this.setState({
          articlelist: this.props.match.params.value,
        });
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

  Recentlyuploaded() {
    axios
      .post(
        window.$API_URL + "videogalleryRecentlyupload",
        this.state.articlelist
      )
      .then((res) => {
        this.setState({
          articlelist: this.props.match.params.value,
        });
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
        <div className=" profilemargintop">
          <Container id="title_message">
            <Row>
              <Col>
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
                <button
                  onClick={() => this.Recentlyuploaded()}
                  className="qw buttonsize"
                >
                  <p className="btnP2">Recent uploaded</p>
                </button>
              </Col>
              <Col>
                <button
                  onClick={() => this.Mostviewed()}
                  className="wq buttonsize"
                >
                  <p className="btnP2">Most viewed</p>
                </button>
              </Col>
              <Col>
                <button className="ew buttonsize">
                  <p className="btnP2">My Interest</p>
                </button>
              </Col>
              <Col>
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
          <div className="row ">
            {this.state.count.map((value, index) => (
              <Col md={3}>
                <p
                  class="videolist "
                  onClick={() =>
                    this.setState({
                      views: value.views,
                      user_id: value.video_id,
                      componentupdate: true,
                    })
                  }
                  style={{ backgroundColor: "white" }}
                >
                  <div className="cursor">
                    <video
                      className="video"
                      src={window.$API_URLIMG + value.video_link}
                    />
                    <p className="largeline">{value.video_title}</p>
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
export default Videolist;
