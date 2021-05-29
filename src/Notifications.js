import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import { Link } from "react-router-dom";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    const fetchNotifications = () => {
      const ownerId = localStorage.getItem("myData");
      axios
        .post(window.$API_URL + `/getnotifications`, { ownerId: ownerId })
        .then((res) => {
          if (res.data === "No Data Found") {
            setNotifications([]);
          } else {
            setNotifications(res.data);
          }
        })
        .catch((err) => {
          console.log("error", err);
        });
    };

    fetchNotifications();
  }, []);

  const handleDelete = () => {
    const ownerId = localStorage.getItem("myData");
    axios
      .post(window.$API_URL + "/deletenotifications", { ownerId: ownerId })
      .then((res) => {
        if (res.data === "1") {
          setNotifications([]);
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  console.log(!notifications.length);

  return (
    <div>
      <Header />
      <div style={{ margin: "30px auto", maxWidth: "500px" }}>
        {!notifications.length ? (
          <h3>No Notifications</h3>
        ) : (
          <>
            {notifications?.map((notification) => {
              return (
                <Link to={"/Artical/" + notification.post_id}>
                  <li
                    style={{ listStyle: "none" }}
                  >{`${notification.username} commented on your post`}</li>
                </Link>
              );
            })}
            <button style={{ margin: "30px" }} onClick={handleDelete}>
              Clear All NOtifications
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Notifications;
