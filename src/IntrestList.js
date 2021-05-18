import React, { useState } from "react";
import axios from "axios";
// import image from "./photos/the loser folwing pic.jpg";
import "./App.css";
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

function IntrestList(props) {
  const [responseData, setResponseData] = useState([]);
  const fetchData = React.useCallback(() => {
    var obj = [];
    obj = {
      id: props.match.params.value,
    };
    fetch(window.$API_URL + "intrestlistfollowing", {
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

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div>
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
        <b className="Allfollwers">All Intrests</b>
        {responseData.map((item, key) => (
          <Link
            to="/Useeffecthook"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div className="row ">
              <p
                className="videolist "
                style={{ backgroundColor: "white", borderRadius: 30 }}
              >
                <Row>
                  <Col md={3}>
                    <img
                      className="folwingloserpic"
                      src={"http://localhost:3000/" + item.user_img}
                    />
                  </Col>
                  <Col md={4}>
                    <p className="usernamefolwing namelist">
                      <b>{item.username}</b>
                    </p>
                  </Col>
                  <Col md={4}>
                    <p className="namefollwing namelist">
                      {item.conatct_email}
                    </p>
                  </Col>
                </Row>
              </p>
            </div>
          </Link>
        ))}
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
export default IntrestList;
