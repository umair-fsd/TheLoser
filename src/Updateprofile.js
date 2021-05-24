import React, { Component } from "react";
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
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import $ from "jquery";
import Header from "./Header";

class Updateprofile extends Component {
  componentDidMount() {
    // $(document).ready(function () {
    //   $('html, body').animate({ scrollTop: 0 }, 'fast');
    // });
    let data = localStorage.getItem("myData");
    if (data === null) {
      const { history } = this.props;
      return history.push("/sign");
    }
    this.setState({ id: this.props.match.params.id });
    this.forceUpdateHandler();
    // this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  }

  constructor(props) {
    super(props);
    this.state = {
      age: "",
      bodymeasurement: "",
      workexperience: "",
      workinterest: "",
      writemore: "",
      password: "",
      Email: "",
      Repeatpassword: "",
      haircolor: "",
      bust: "",
      height: "",
      Talent: "",
      hips: "",
      language: "",
      conatct_email: "",
      Profession: "",
      Contact: "",
      Eye_color: "",
      waist: "",
      username: "",
      time: "",
      id: "",
      COUNTRY: "",
      selectValue: "",
      user_img: "",
      Social_media_profile: "",
      Phone: "",
      compressedFile: null,
    };
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.portfolioImages = this.portfolioImages.bind(this);
    this.profileimg = this.profileimg.bind(this);
  }

  onChangeHandler(event) {
    this.setState({
      compressedFile: event.target.files[0],
    });
  }

  portfolioImages(event) {
    const files = event.target.files[0];
    const data = new FormData();
    data.append("file", files);
    data.append("id", this.state.id);
    axios
      .post(window.$API_URL + "updateprofileimages", data)
      .then((res) => {
        if (res.data === 1) {
          toast.success("Successfully Uploaded");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  profileimg(event) {
    const files = event.target.files[0];
    const data = new FormData();
    data.append("file", files);
    data.append("id", this.state.id);
    data.append("user_img", this.state.user_img);
    // data.append("user_img", this.state.user_img);
    console.log(data);
    axios
      .post(window.$API_URL + "profileimg", data)
      .then((res) => {
        if (res.data === 1) {
          toast.success("Successfully Uploaded");
        }
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  forceUpdateHandler() {
    let data = localStorage.getItem("myData");
    this.setState({ id: data });
    axios.post(window.$API_URL + "updateprofiledatafetch", data).then((res) => {
      this.setState({
        haircolor: res.data[0].haircolor,
        bust: res.data[0].bust,
        height: res.data[0].height,
        hips: res.data[0].hips,
        language: res.data[0].language,
        conatct_email: res.data[0].conatct_email,
        waist: res.data[0].waist,
        username: res.data[0].username,
        password: res.data[0].user_password,
        Email: res.data[0].user_email,
        COUNTRY: res.data[0].country,
        selectValue: res.data[0].gender,
        Phone: res.data[0].user_cellno,
        Profession: res.data[0].Profession,
        Talent: res.data[0].Talent,
        Contact: res.data[0].Contact,
        Eye_color: res.data[0].Eye_color,
        age: res.data[0].age,
        bodymeasurement: res.data[0].bodymeasurement,
        workexperience: res.data[0].workexperience,
        workinterest: res.data[0].workinterest,
        writemore: res.data[0].writemore,
        user_img: res.data[0].user_img,
      });
    });
  }

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit() {
    const data = new FormData();
    data.append("file", this.state.compressedFile);
    console.log(this.state.id);
    data.append("id", this.state.id);
    data.append("Email", this.state.Email);
    data.append("bust", this.state.bust);
    data.append("haircolor", this.state.haircolor);
    data.append("Eye_color", this.state.Eye_color);
    data.append("height", this.state.height);
    data.append("hips", this.state.hips);
    data.append("language", this.state.language);
    data.append("conatct_email", this.state.conatct_email);
    data.append("password", this.state.password);
    data.append("username", this.state.username);
    data.append("Profession", this.state.Profession);
    data.append("Contact", this.state.Contact);
    data.append("Talent", this.state.Talent);
    data.append("waist", this.state.waist);
    data.append("Country", this.state.COUNTRY);
    data.append("selectValue", this.state.selectValue);
    data.append("Phone", this.state.Phone);
    data.append("age", this.state.age);
    data.append("bodymeasurement", this.state.bodymeasurement);
    data.append("workexperience", this.state.workexperience);
    data.append("workinterest", this.state.workinterest);
    data.append("writemore", this.state.writemore);
    data.append("Social_media_profile", this.state.Social_media_profile);
    if (this.state.password !== this.state.Repeatpassword) {
      toast.error("Password and repassword not matched");
    } else {
      axios
        .post(window.$API_URL + "updateprofile", data)
        .then((res) => {
          if (res.data === 1) {
            toast.success("Successfully udated");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <div className="">
        <Header />

        <Container>
          <Toaster />
          <div className="nnn1" style={{ border: 1, solid: "#CCC" }}>
            <Container>
              <h1 style={{ marginTop: 10 }}>Profile</h1>
              <h1>{this.state.time}</h1>
              <p>Please fill in this form to Complete Profile.</p>
              <hr></hr>
              <label for="email">
                <b> Enter Your Name</b>
              </label>
              <input
                value={this.state.username}
                onChange={this.handleInputChange}
                type="text"
                placeholder="Enter USER NAME"
                name="username"
                required
              />

              <label for="email">
                <b> Social media profile (Optional)</b>
              </label>
              <input
                value={this.state.Social_media_profile}
                onChange={this.handleInputChange}
                type="text"
                placeholder="Paste your link"
                name="Social_media_profile"
              />
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
              <label for="email">
                <b> Enter Email (Optional)</b>
              </label>
              <input
                value={this.state.Email}
                onChange={this.handleInputChange}
                type="text"
                placeholder="Enter Email"
                name="Email"
                required
              />

              <label for="email">
                <b> Enter Phone no. (Optional)</b>
              </label>
              <input
                value={this.state.Phone}
                onChange={this.handleInputChange}
                type="text"
                placeholder="Enter Phone number"
                name="Phone"
                required
              />

              <label for="psw">
                <b> Enter Password</b>
              </label>
              <input
                value={this.state.password}
                onChange={this.handleInputChange}
                type="password"
                placeholder="Enter Password"
                name="password"
                required
              />

              <label for="psw-repeat">
                <b> Enter Repeat Password</b>
              </label>
              <input
                value={this.state.Repeatpassword}
                onChange={this.handleInputChange}
                type="password"
                placeholder="Repeat Password"
                name="Repeatpassword"
                required
              />
              <label for="psw">
                <b> Enter Contact Email (Optional)</b>
              </label>
              <input
                value={this.state.conatct_email}
                onChange={this.handleInputChange}
                type="text"
                placeholder="Enter conatct_email"
                name="conatct_email"
                required
              />
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
              <label for="psw">
                <b> Enter Profession (Optional)</b>
              </label>
              <input
                value={this.state.Profession}
                onChange={this.handleInputChange}
                type="text"
                placeholder="Enter Profession"
                name="Profession"
                required
              />

              <label for="psw">
                <b> Enter Talent (Optional) </b>
              </label>
              <input
                value={this.state.Talent}
                onChange={this.handleInputChange}
                type="text"
                placeholder="Enter Talent"
                name="Talent"
                required
              />

              <label for="psw">
                <b> Enter Age (Optional) </b>
              </label>
              <input
                value={this.state.age}
                onChange={this.handleInputChange}
                type="text"
                placeholder="Enter age digits"
                name="age"
                required
              />

              <label for="psw">
                <b> Enter Work experience (Optional) </b>
              </label>
              <input
                value={this.state.workexperience}
                onChange={this.handleInputChange}
                type="text"
                placeholder="Enter Work experience"
                name="workexperience"
                required
              />

              <label for="psw">
                <b> My work interest (Optional) </b>
              </label>
              <input
                value={this.state.workinterest}
                onChange={this.handleInputChange}
                type="text"
                placeholder="Enter work interest"
                name="workinterest"
                required
              />
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
              <label for="psw">
                <b> Enter HEIGHT (Optional)</b>
              </label>
              <input
                value={this.state.height}
                onChange={this.handleInputChange}
                type="text"
                placeholder="Enter HEIGHT"
                name="height"
                required
              />

              <label for="psw">
                <b> Enter HAIR COLOR (Optional)</b>
              </label>
              <input
                value={this.state.haircolor}
                onChange={this.handleInputChange}
                type="text"
                placeholder="Enter HAIR COLOR"
                name="haircolor"
                required
              />

              <label for="psw">
                <b> Enter EYE COLOR (Optional)</b>
              </label>
              <input
                value={this.state.Eye_color}
                onChange={this.handleInputChange}
                type="text"
                placeholder="Enter HAIR COLOR"
                name="Eye_color"
                required
              />
              <label for="psw">
                <b> Enter LANGUAGE (Optional) </b>
              </label>
              <input
                value={this.state.language}
                onChange={this.handleInputChange}
                type="text"
                placeholder="Enter LANGUAGE"
                name="language"
                required
              />
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
              <label for="psw">
                <b> Enter YOUR COUNTRY (Optional) </b>
              </label>
              <input
                value={this.state.COUNTRY}
                onChange={this.handleInputChange}
                type="text"
                placeholder="Enter COUNTRY"
                name="COUNTRY"
                required
              />

              <label for="psw">
                <b> To write more </b>
              </label>
              <input
                value={this.state.writemore}
                onChange={this.handleInputChange}
                type="text"
                placeholder="To write more"
                name="writemore"
                required
              />

              <label for="psw">
                <b> Select GENDER (Optional) </b>
              </label>
              <select
                className="selectinput2"
                defaultValue={this.state.selectValue}
                onChange={this.handleInputChange}
                name="selectValue"
              >
                <option selected hidden>
                  Choose here
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Prefer Not to Say">Prefer Not to Say</option>
              </select>
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
              <Row>
                <Col md={3}>
                  <label class="poius">
                    {" "}
                    Choose Profile Image
                    <input
                      type="file"
                      accept="image/*"
                      name="imagename"
                      size="40"
                      class="poiu"
                      onChange={this.onChangeHandler}
                    />
                  </label>
                </Col>
                <Col md={3}>
                  <label class="poius">
                    {" "}
                    Choose Portfolio Images
                    <input
                      type="file"
                      accept="image/*"
                      name="imagename"
                      size="40"
                      class="poiu"
                      onChange={this.portfolioImages}
                    />
                  </label>
                </Col>
                <Col md={6}>
                  <Col sm="9"></Col>
                </Col>
                <Col md={3}></Col>
              </Row>

              <div class="clearfix">
                <button type="button" class="cancelbtn">
                  Cancel
                </button>
                <button
                  onClick={() => this.handleSubmit()}
                  style={{
                    backgroundColor: "white",
                    bordercolor: "black",
                    color: "red",
                    border: 20,
                  }}
                  class="signupbtn"
                >
                  Update
                </button>
              </div>
            </Container>
          </div>
        </Container>
      </div>
    );
  }
}
export default Updateprofile;
