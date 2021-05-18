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
import deleteimg from "./photo/delete.png";
import ReactPlayer from "react-player";
import axios from "axios";
import Header from "./Header";
import $ from "jquery";

var user_id = "1";
class UserAritcles extends React.Component {
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
  }

  constructor(props) {
    super(props);
    this.state = {
      count: [],
      thisisme: "",
      user_id: "",
      views: "",
      componentupdate: false,
      deletecomponentupdate: false,
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
    if (this.state.deletecomponentupdate === true && this.state.user_id != "") {
      this.deletearticle();
    }
  }

  deletearticle() {
    var obj = [];
    obj = {
      paragraph_id: this.state.user_id,
    };
    axios.post(window.$API_URL + "deletearticle", obj).then((res) => {
      if (res.data === 1) {
        window.location.reload(false);
      }
    });
  }

  fetchdata() {
    let data = localStorage.getItem("myData");
    axios
      .post(window.$API_URL + "galleryuserarticles", this.state.articlelist)
      .then((res) => {
        var grid = [];
        for (let i = 0; i < res.data.length; i++) {
          if (this.props.match.params.value === data) {
            this.setState({
              thisisme: "me",
            });
          }
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
            obj["category"] = res.data[i].category;
            obj["imagename"] = res.data[i].imagename;
            grid.push(obj);
          }

          // console.log(this.state.count.title)
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
    return history.push("/Artical/" + this.state.user_id);
  }

  Profile() {
    const { history } = this.props;
    this.setState({
      componentupdate: false,
    });
    return history.push("/Profile/" + this.state.articlelist);
  }
  Videos() {
    const { history } = this.props;
    this.setState({
      componentupdate: false,
    });
    return history.push("/Uservideos/" + this.state.articlelist);
  }
  render() {
    return (
      <div className="nnn ">
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
        <div className="profilemargintop">
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
                <button onClick={() => this.Videos()} className="wq buttonsize">
                  <p className="btnP2">Videos</p>
                </button>
              </Col>
              <Col>
                <button className="ew buttonsize">
                  <p className="btnP2">Articles</p>
                </button>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <p>{this.state.nothing}</p>
          <div className="row container ">
            {this.state.count.map((value, index) => (
              <Col md={3}>
                <div
                  className="box articlelistmargins"
                  // onClick={() =>
                  //   this.setState({
                  //     views: value.views,
                  //     user_id: value.paragraph_id,
                  //     componentupdate: true,
                  //   })
                  // }
                >
                  <div className="box1">
                    <h4 className="firstlineparagraph">{value.category}</h4>
                    <h5 className="name2" id="someDivname2">
                      <i>{value.title}</i>
                    </h5>
                    <p
                      className="name3"
                      id="someDiv"
                      style={{ textAlign: "justify" }}
                    >
                      {value.text}
                    </p>
                    <Row>
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
                      {this.state.thisisme ? (
                        <i
                          onClick={() =>
                            this.setState({
                              user_id: value.paragraph_id,
                              deletecomponentupdate: true,
                            })
                          }
                          class="fa fa-trash header-iconarticle cursor"
                          aria-hidden="true"
                        ></i>
                      ) : null}
                    </Row>
                  </div>
                </div>
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
export default UserAritcles;
