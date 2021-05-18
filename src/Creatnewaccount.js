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
import GoogleLogin from 'react-google-login'
import $ from "jquery";

class creatnewaccount extends Component {
  state = {};
  responseGoogle = (response) => {
    var obj = []
    obj = {
      email: response.profileObj.email,
      username: response.profileObj.givenName,
    }
    axios
      .post(window.$API_URL + "insertIntoUserEmail", obj)
      .then((res) => {
        if (res.data != "Email already available please login") {
          localStorage.setItem("myData", res.data);
          toast.success("Successfully created!");
          this.confirm();
        } else {
          toast.error("Email already available please login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      Email: "",
      Repeatpassword: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    $(document).ready(function () {
      $('html, body').animate({ scrollTop: 0 }, 'fast');
    });
    //   let data = localStorage.getItem("myData");
    //   if (data === null) {
    //     const { history } = this.props;
    //     return history.push("/sign");
    //   }
  }

  confirm(props) {
    const { history } = this.props;
    return history.push("/Updateprofile");
  }
  handleSubmit = (props) => {
    // const isValid = this.validate();

    const obj = this.state;
    // if (isValid) {
    if (this.state.Email === "" || this.state.password === "") {
      toast.error("Please enter Email or password");
    } else {
      if (this.state.password === this.state.Repeatpassword) {
        axios
          .post(window.$API_URL + "insertIntoUser", obj)
          .then((res) => {
            if (res.data != "Email already available") {
              localStorage.setItem("myData", res.data);
              toast.success("Successfully created!");
              this.confirm();
            } else {
              toast.error("Email already available");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        toast.error("Password & Repassord not matched");
      }
    }
  };

  render() {
    return (
      <div className="nnn app-container">
        <Toaster />
        <div style={{ border: 1, solid: "#CCC" }}>
          <div class="container">
            <h1>Creat New Account</h1>
            <p>Please fill in this form to create an account.</p>
            <hr></hr>
            <label for="email">
              <b> Enter Email</b>
            </label>
            <input
              value={this.state.Email}
              onChange={this.handleInputChange}
              type="text"
              placeholder="Enter Email"
              name="Email"
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

            <label></label>
            {/* <input  type="checkbox" checked="checked" name="remember" style={{marginbottom:15}}/> Remember me */}
            <p>
              By creating an account you agree to our{" "}
              <a href="/TermsandConditions" style={{ color: "dodgerblue" }}>
                Terms & Privacy
              </a>
              .
            </p>

            <div class="clearfix">
              <div type="button" class="cancelbtn">
                <GoogleLogin
                  style={{ backgroundColor: "red" }}
                  clientId='966918416549-k4j6sno1onp0p0vi3j7kjd4e3nu581eo.apps.googleusercontent.com'
                  render={renderProps => (
                    <button onClick={renderProps.onClick} style={{ backgroundColor: "red" }}>
                      <i class="fa fa-google fa-lg" style={{ marginRight: 10 }} aria-hidden="true"></i>
                      Register With Google
                    </button>
                  )}
                  buttonText='Register With Google'
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseGoogle}
                  cookiePolicy={'single_host_origin'}
                >
                </GoogleLogin>
              </div>

              <button
                onClick={this.handleSubmit}
                style={{
                  backgroundColor: "white",
                  bordercolor: "black",
                  color: "red",
                  border: 20,
                }}
                class="signupbtn"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

creatnewaccount.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object,
  errors: PropTypes.object,
};
export default creatnewaccount;
