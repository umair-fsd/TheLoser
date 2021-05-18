import React from "react";
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
// import ReactQuill from "react-quill"; // ES6
import "react-quill/dist/quill.snow.css"; // ES6

import "medium-editor/dist/css/medium-editor.css";
import "medium-editor/dist/css/themes/default.css";

import advancedFormat from "dayjs/plugin/advancedFormat"; // load on demand

// ES module
import Editor from "react-medium-editor";

import moment from "moment";
import imageCompression from "browser-image-compression";
import PropTypes from "prop-types";
import toast, { Toaster } from "react-hot-toast";
import Header from "./Header";
import $ from "jquery";

import axios from "axios";
let thistext = "please enter article";
class Articalupload extends React.Component {
  componentDidMount() {
    // var responseDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
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
        console.log(res.data);
        console.log(res.data.length);
        if (res.data.length > 0) {
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
        } else {
          this.setState({
            categoryOptions: "",
            selectValue2: "",
            componentupdate: false,
          });
        }
      });
  }

  constructor(props) {
    super(props);
    this.state = {
      anything: "please enter your artical",
      categoryOptions: "",
      componentupdate: false,
      selectValue: "SHARE_NEWS",
      selectValue2: "",
      message: "Enter is blocked",
      imagename: null,
      title: "",
      compressedFile: null,
      text: "Fusce dapibus, tellus ac cursus commodo",
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  // getInitialState() {
  //   return { text: 'Fusce dapibus, tellus ac cursus commodo' };
  // }

  handleChange(text, medium) {
    console.log(text);
    var mystring = thistext;
    var newchar = "<br>";
    mystring = mystring.split("</p><p>").join(newchar);

    thistext = text;
    this.setState({ text: mystring });
    console.log(this.state.text);
  }

  // handleChange(value) {
  //   thistext = value;
  // }

  articleupload() {
    var mystring = thistext;
    var newchar = "<br>";
    mystring = mystring.split("</p><p>").join(newchar);

    console.log(mystring); // "this-is-a-test"

    if (thistext === "please enter article") {
      toast.error("Article is empty");
    } else {
      // var formatDate= 1399919400000;

      let id = localStorage.getItem("myData");
      var responseDate = moment().format("DD MMM YY");
      const data = new FormData();
      data.append("file", this.state.compressedFile);
      data.append("id", id);
      data.append("thistext", mystring);
      data.append("date", responseDate);
      data.append("title", this.state.title);
      data.append("selectValue", this.state.selectValue);
      data.append("selectValue2", this.state.selectValue2);

      const { history } = this.props;

      axios.post(window.$API_URL + "articleupload", data, {}).then((res) => {
        if (res.data === 1) {
          this.setState({
            thistext: "please enter article",
          });
          toast.success("Successfully uploaded");
          if (this.state.selectValue2) {
            return history.push("/Articallist/" + this.state.selectValue2);
          } else {
            return history.push("/Articalslist/" + this.state.selectValue);
          }
        }
      });
    }
  }
  onChangeHandler(event) {
    this.setState({
      compressedFile: event.target.files[0],
    });
  }

  render() {
    return (
      <div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js"></script>
        <Header />
        <Toaster />
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
          <Row className="articleuploadmargin">
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
                    <option value="me_too">me too</option>
                    <option value="Writers">Writers</option>
                    <option value="Feminism">Feminism</option>
                    <option value="OPEN_UP_ABOUT">
                      OPEN UP ABOUT MENTAL HEALTH
                    </option>
                    <option value="ARTICLES_CATEGORIES">
                      ARTICLES CATEGORIES
                    </option>
                  </select>
                </Col>
              </Form.Group>
            </Col>
            <Col md={3}></Col>
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
                    onChange={(e) => this.setState({ title: e.target.value })}
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
          <Row>
            <Col md={3}></Col>
            <Col>
              <label class="poius">
                {" "}
                Choose artical image
                <input
                  type="file"
                  accept="image/*"
                  name="videoname"
                  size="40"
                  class="poiu"
                  onChange={this.onChangeHandler}
                />
              </label>
            </Col>
            <Col md={3}></Col>
          </Row>
          <Editor
            // text={this.state.text}
            allowMultiParagraphSelection={true}
            singleEnterBlockElement={true}
            options={{
              toolbar: {
                buttons: [
                  "bold",
                  "italic",
                  "underline",
                  "anchor",
                  "h1",
                  "h2",
                  "h3",
                  "h4",
                  "h5",
                  "h6",
                  "h7",
                ],
              },
            }}
            // buttons= ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote']
            diffLeft={"30"}
            style={{
              lineHeight: 0.9,
              borderColor: "transparent",
              outline: "none",
            }}
            // firstButtonClass='medium-editor-button-first'
            // onKeyDown={this.onKeyPress}
            // evt.{true}
            lastButtonClass="medium-editor-button-last"
            relativeContainer={null}
            standardizeSelectionStart={false}
            static={true}
            sticky={true}
            updateOnEmptySelection={false}
            onChange={this.handleChange}
          />

          <Row>
            <Button
              style={{
                width: 300,
                marginTop: 70,
                marginBottom: 20,
                marginLeft: 10,
                backgroundColor: "red",
                borderColor: "transparent",
              }}
              onClick={() => this.articleupload()}
              block
            >
              Post Artical
            </Button>
          </Row>
        </Container>
      </div>
    );
  }
}
Articalupload.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object,
  errors: PropTypes.object,
};
export default Articalupload;
