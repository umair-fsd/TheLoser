import React, { useState, useEffect } from "react";
import Header from "./Header";
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
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Bloggerslist(props) {
  const [responseData, setResponseData] = useState([]);
  const [bloggers_id, valuebloggers_id] = useState("");

  const fetchData = React.useCallback(() => {
    var obj = [];
    obj = {
      data: localStorage.getItem("myData"),
    };
    fetch(window.$API_URL + "bloggsintrestgallery", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ obj }),
    });
    fetch(window.$API_URL + "bloggsintrestgallery", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ obj }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("response.data", data);
        console.log("response.data");
        if (data === "Nothing in this Category") {
          setResponseData([]);
        } else {
          setResponseData([...data]);
        }
      });
  }, []);

  useEffect(() => {
    valuebloggers_id("");
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (bloggers_id !== "") {
      const { history } = props;
      history.push("/Bloggers/" + bloggers_id);
    }
  });
  return (
    <div className="nnn">
      <Header />
      <div className=" background1">
        {/* <Container>
          <Row>
            <Col>
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
        </Container> */}
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
        <div className="row container ">
          {responseData.map((value, index) => (
            <Col md={3}>
              <div className="box articlelistmargins">
                <div className="box1">
                  <Link to={"/Profile/" + value.user_id}>
                    <h5 className="name cursor">by {value.username}</h5>
                  </Link>
                  <h5 className="name5">Published at {value.date}</h5>
                  <h5 className="name2" id="someDivname2">
                    <i>{value.title}</i>
                  </h5>
                  <img
                    id="someimage"
                    height="150"
                    src={window.$API_URLIMG + value.image}
                    alt="non"
                  />
                  <p
                    onClick={
                      () => valuebloggers_id(value.bloggers_id)
                      // this.setState({
                      //   user_id: value.paragraph_id,
                      //   componentupdate: true,
                      // })
                    }
                    className="name4condition cursor"
                  >
                    READ COMPLETE
                    <i class="fa fa-angle-right"></i>
                  </p>
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
          style={{ display: "block", textAlign: "center" }}
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client="ca-pub-5497294500716598"
          data-ad-slot="3594647345"
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </Container>
    </div>
  );
}
Bloggerslist.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object,
  errors: PropTypes.object,
};
export default Bloggerslist;
