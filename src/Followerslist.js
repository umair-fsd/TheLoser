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
import "./css/Interest.css";

function Followerslist(props) {
  const [responseData, setResponseData] = useState([]);
  const fetchData = React.useCallback(() => {
    var obj = [];
    obj = {
      id: props.match.params.value,
    };
    fetch(window.$API_URL + "listfollowwers", {
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
        <b className="Allfollwers">All Followers</b>
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
        {responseData.map((item, key) => (
          <Link
            to={"/Profile/" + item.user_id}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div>
              <div
                style={{
                  maxWidth: "600px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
                className="interested-container"
              >
                <div className="right-container">
                  <img
                    className="image"
                    src={
                      "https://preettheloserapis.theloser.live/" + item.user_img
                    }
                    alt="pic"
                  />
                  <h3 className="usernamefolwing namelist">{item.username}</h3>
                </div>
                <div className="left-container">View Profile</div>
              </div>
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
export default Followerslist;
