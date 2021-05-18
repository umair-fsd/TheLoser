import React from "react";
import logo7 from "./photo/llll.png";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  Image,
  Text,
  Form,
  FormGroup,
  Label,
  Input,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import toast, { Toaster } from "react-hot-toast";
import Header from "./Header";
import $ from "jquery";
import moment from "moment";

class VideoUpload extends React.Component {
  componentDidMount() {
    $(document).ready(function () {
      $("html, body").animate({ scrollTop: 0 }, "fast");
    });

    let data = localStorage.getItem("myData");
    if (data === null) {
      const { history } = this.props;
      return history.push("/sign");
    }
    this.sub_categor();
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      componentupdate: false,
      selectValue: "SHARE_NEWS",
      selectValue2: "",
      categoryOptions: "",
      videoname: null,
      title: "",
      percent: "0",
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentDidUpdate() {
    if (this.state.componentupdate === true) {
      this.sub_categor();
    }
  }

  sub_categor() {
    let options = "";
    axios
      .post(window.$API_URL + "tbl_header", this.state.selectValue)
      .then((res) => {
        this.setState({
          selectValue2: res.data[0].sub_category,
          componentupdate: false,
        });
        for (let i = 0; i < res.data.length; i++) {
          options +=
            "<option value='" +
            res.data[i].sub_category +
            "'>" +
            res.data[i].sub_category +
            "</option>";
        }
        this.setState({
          categoryOptions: options,
          componentupdate: false,
        });
      });
  }

  onChangeHandler = (data) => {
    var video = document.createElement("video");
    video.preload = "metadata";
    var thiss = this;
    video.onloadedmetadata = function () {
      window.URL.revokeObjectURL(video.src);
      console.log(video.duration);
      if (video.duration > 60) {
        toast.error("Invalid Video! video is more than 1 minute");
        return;
      } else {
        // this.methodtocall();
        thiss.setState({
          [data.target.name]: data.target.files[0],
          selectedFile: data.target.files[0],
          loaded: 0,
        });
      }
    };
    video.src = URL.createObjectURL(data.target.files[0]);
  };

  onClickHandler = () => {
    if (this.state.title === "" && this.state.selectedFile != null) {
      toast.error("Title is empty");
    } else if (this.state.title != "" && this.state.selectedFile === null) {
      toast.error("Video is empty");
    } else if (this.state.title === "" && this.state.selectedFile === null) {
      toast.error("Title and video is empty");
    } else {
      var responseDate = moment().format("DD MMM YY");
      let id = localStorage.getItem("myData");
      const data = new FormData();
      data.append("file", this.state.selectedFile);
      data.append("title", this.state.title);
      data.append("selectValue", this.state.selectValue);
      data.append("date", responseDate);
      data.append("id", id);
      data.append("selectValue2", this.state.selectValue2);
      const options = {
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          let percent = Math.floor((loaded * 100) / total);
          console.log(`${loaded} kb of ${total}kb of | ${percent}%`);
          this.setState({
            percent: `${percent}`,
          });
        },
      };
      const { history } = this.props;

      axios.post(window.$API_URL + "upload", data, options, {}).then((res) => {
        if (res.data === 1) {
          this.setState({
            title: "",
            selectedFile: null,
          });
          toast.success("Successfully uploaded!");
          if (this.state.selectValue2) {
            return history.push("/Videolist/" + this.state.selectValue2);
          } else {
            return history.push("/Videoslist/" + this.state.selectValue);
          }
        }
      });
    }
  };

  render() {
    return (
      <div className="nnn">
        <Header />
        <Toaster />
        <div className="ere">
          <div className="qwe">
            <Container>
              <Row>
                <Col md={3}></Col>
                <Col md={6}>
                  <Form.Group as={Row} controlId="formProductCategory">
                    <Form.Label style={{ color: "black" }} column sm="3">
                      Category:
                    </Form.Label>
                    <Col sm="9">
                      <select
                        className="selectinput"
                        defaultValue={this.state.selectValue}
                        onChange={(e) =>
                          this.setState({
                            selectValue: e.target.value,
                            componentupdate: true,
                          })
                        }
                      >
                        <option value="SHARE_NEWS">SHARE NEWS</option>
                        <option value="SINGING">SINGING</option>
                        <option value="RAP_TALENT">RAP_TALENT</option>
                        <option value="DANCE_TALENT">DANCE TALENT</option>
                        <option value="MOTIVATIONAL_SPEAKERS">
                          MOTIVATIONAL SPEAKERS
                        </option>
                      </select>
                    </Col>
                  </Form.Group>
                </Col>
                <Col md={3}></Col>
              </Row>

              <Row>
                <Col md={3}></Col>
                <Col md={6}>
                  <Form.Group as={Row} controlId="formProductCategory">
                    <Form.Label style={{ color: "black" }} column sm="3">
                      SubCategory:
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control
                        as="select"
                        type="select"
                        ref="templateSelect"
                        defaultValue={this.state.selectValue2}
                        dangerouslySetInnerHTML={{
                          __html: this.state.categoryOptions,
                        }}
                        onChange={(e) =>
                          this.setState({ selectValue2: e.target.value })
                        }
                      ></Form.Control>
                    </Col>
                  </Form.Group>
                </Col>
                <Col md={3}></Col>
              </Row>

              <Row>
                <Col md={3}></Col>
                <Col md={6}>
                  <Form.Group as={Row} controlId="formProductCategory">
                    <Form.Label style={{ color: "black" }} column sm="3">
                      Title:
                    </Form.Label>
                    <Col sm="9">
                      <input
                        className="EnterTitle"
                        value={this.state.title}
                        onChange={(e) =>
                          this.setState({ title: e.target.value })
                        }
                        type="text"
                        placeholder="Enter Title"
                        name="Email"
                        required
                      />
                    </Col>
                  </Form.Group>
                </Col>
                <Col md={3}></Col>
              </Row>
              <Container>
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
                <script>
                  (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
                <p class="ridge " style={{ backgroundColor: "white" }}>
                  <Row>
                    <Col>
                      <h3 style={{ marginLeft: 100 }}>{this.state.percent}%</h3>
                    </Col>
                    <Col>
                      {" "}
                      <img
                        onClick={this.onClickHandler}
                        className="kk"
                        height="36px"
                        src={logo7}
                      ></img>{" "}
                      <p className="fontfamily">post</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <label class="poius">
                        {" "}
                        Choose Your Video
                        <input
                          type="file"
                          accept="video/*"
                          name="videoname"
                          size="40"
                          class="poiu"
                          onChange={this.onChangeHandler}
                        />
                      </label>
                    </Col>
                  </Row>
                </p>
              </Container>
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
            </Container>
          </div>
        </div>
      </div>
    );
  }
}
VideoUpload.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object,
  errors: PropTypes.object,
};
export default VideoUpload;
