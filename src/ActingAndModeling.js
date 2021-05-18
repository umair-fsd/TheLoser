import React from "react";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
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
import Header from "./Header";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import $ from "jquery";

class ActingAndModeling extends React.Component {
  componentDidMount() {
    $(document).ready(function () {
      $("html, body").animate({ scrollTop: 0 }, "fast");
    });

    let data = localStorage.getItem("myData");
    if (data === null) {
      this.setState({
        my_id: "",
      });
    } else {
      this.setState({
        my_id: data,
      });
    }
    this.fetchdata();
  }

  fetchdata() {
    axios.post(window.$API_URL + "actingandmodelingimages").then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        this.setState({ count: res.data });
      }
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      count: [],
      my_id: "",
    };
  }

  tostlogin() {
    toast.error("Please Signup First");
  }
  render() {
    const isLoggedIn = this.state.my_id;

    return (
      <div className="footertop">
        <Header />
        <Toaster />
        <div className="nnn background1">
          <Container>
            <Row>
              <Col md={12}>
                <Row>
                  <Container>
                    <div className="row container ">
                      {this.state.count.map((value, index) => (
                        <Col md={3}>
                          <div>
                            <div className=" row" style={{ margin: "auto" }}>
                              <div style={{ margin: 15 }}>
                                {isLoggedIn ? (
                                  <Link to={"/Profile/" + value.user_id}>
                                    <p className="actingmodelingP">
                                      {value.username}
                                    </p>
                                  </Link>
                                ) : (
                                  <div onClick={() => this.tostlogin()}>
                                    <p className="actingmodelingP">
                                      {value.username}
                                    </p>
                                  </div>
                                )}
                                <img
                                  width="240"
                                  height="auto"
                                  src={window.$API_URLIMG + value.img_name}
                                />
                                {/* <p style={{}}>{value.image_link}</p> */}
                              </div>
                            </div>
                          </div>
                        </Col>
                      ))}
                    </div>
                  </Container>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
export default ActingAndModeling;
