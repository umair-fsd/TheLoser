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
import PropTypes from "prop-types";
import toast, { Toaster } from "react-hot-toast";
import GoogleLogin from "react-google-login";
import $ from "jquery";

global.id = "";

window.$API_URL = "http://localhost:3000/";
// window.$API_URLIMG = "http://localhost:3000/";

// window.$API_URL = "https://preettheloserapis.theloser.live/";
window.$API_URLIMG = "https://preettheloserapis.theloser.live/";

class Sign extends Component {
  componentDidMount() {
    $(document).ready(function () {
      $("html, body").animate({ scrollTop: 0 }, "fast");
    });
    let data = localStorage.getItem("myData");
  }
  constructor(props) {
    super(props);
    this.state = {
      Emailaddressorphonenumber: "",
      username: "areeb",
      password: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };
  responseGoogle = (response) => {
    const { history } = this.props;
    var obj = [];
    obj = {
      email: response.profileObj.email,
    };
    axios
      .post(window.$API_URL + "authemail", obj)
      .then((res) => {
        // global.id = res.data[0].user_id;
        if (res.data === "Please enter Username and Password!") {
          toast.error("Error");
        } else if (res.data === "Please signup first") {
          toast.error("Please Signup First");
        } else if (res.data === "User blocked Please contact Us") {
          toast.error("User blocked Please contact Us");
        } else {
          localStorage.setItem("myData", res.data[0].user_id);
          localStorage.setItem("userImage", res.data[0].user_img);
          localStorage.setItem("userName", res.data[0].username);

          toast.success("Login successfully");
          let data = localStorage.getItem("myData");
          if (data !== null) {
            return history.push("/");
            window.location.reload(false);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  forgotpass() {
    toast.error("Please contact admin contactus.theloser@gmail.com");
  }
  login = async (event) => {
    // e.preventDefault();
    const { history } = this.props;
    event.preventDefault();
    const obj = this.state;
    axios
      .post(window.$API_URL + "auth", obj)
      .then((res) => {
        // global.id = res.data[0].user_id;
        if (res.data === "Please enter Username and Password!") {
          toast.error("Please enter Username and Password!");
        } else if (res.data === "Incorrect Username and/or Password!") {
          toast.error("Incorrect Username or Password!");
        } else if (res.data === "User blocked Please contact Us") {
          toast.error("User blocked Please contact Us");
        } else {
          localStorage.setItem("myData", res.data[0].user_id);
          localStorage.setItem("userImage", res.data[0].user_img);
          localStorage.setItem("userName", res.data[0].username);
          toast.success("Login successfully");
          let data = localStorage.getItem("myData");
          if (data !== null) {
            return history.push("/");
            window.location.reload(false);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // setData() {
  //   localStorage.setItem("myData", this.state.username);
  // }
  // removeData() {
  //   localStorage.removeItem("myData");
  // }
  // getData() {
  //   let data = localStorage.getItem("myData");
  //   console.log(data);
  // }

  render() {
    return (
      <div className="nnn">
        <Toaster />
        <div className="backgroundsignup">
          <Container>
            <br></br> <br></br> <br></br> <br></br> <br></br>
            <Row className="zx">
              <Col>
                <p className="text">
                  <h1 style={{ color: "red" }}>
                    <b>The Loser</b>
                  </h1>
                </p>
                <p className="llp">
                  The Loser helps you to raise your voice for social issues and
                  show your talent.
                </p>
              </Col>
              <div className="mnmn">
                <Col>
                  <input
                    value={this.state.Emailaddressorphonenumber}
                    onChange={this.handleInputChange}
                    className="po"
                    type="text"
                    placeholder="Email address"
                    name="Emailaddressorphonenumber"
                  />

                  <input
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    className="po"
                    type="Password"
                    placeholder="Password"
                    name="password"
                  />

                  <Link to="/">
                    {" "}
                    <button className="cv" onClick={this.login}>
                      <h4 style={{ color: "white" }}> Log in</h4>
                    </button>
                  </Link>

                  <p style={{ marginTop: 10, color: "red" }}>
                    {/* <Link to="/Artical"  >Forgotten password?</Link> */}
                  </p>
                  <hr></hr>
                  <Link to="/Creatnewaccount">
                    {" "}
                    <button className="vc">Create New Account</button>
                  </Link>
                  {/* <GoogleLogin
                    style={{ backgroundColor: "red" }}
                    clientId="966918416549-k4j6sno1onp0p0vi3j7kjd4e3nu581eo.apps.googleusercontent.com"
                    render={(renderProps) => (
                      <button
                        onClick={renderProps.onClick}
                        style={{ backgroundColor: "red" }}
                      >
                        <i
                          class="fa fa-google fa-lg"
                          style={{ marginRight: 10 }}
                          aria-hidden="true"
                        ></i>
                        Login With Google
                      </button>
                    )}
                    buttonText="Register With Google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={"single_host_origin"}
                  ></GoogleLogin> */}

                  <button onClick={() => this.forgotpass()} className="vc">
                    Forgot password
                  </button>
                </Col>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

Sign.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object,
  errors: PropTypes.object,
};
export default Sign;
