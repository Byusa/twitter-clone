import { Button, Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "../Styles/Tweetbox.css";
import Byusa from "../Assets/Serge.png";
import db from "../config/firebase";

function Tweetbox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Serge Byusa",
      userName: "sbyusa",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://media-exp1.licdn.com/dms/image/C5603AQF_CkA9g0MgQw/profile-displayphoto-shrink_800_800/0/1595825282216?e=1617840000&v=beta&t=l9VuALqOWhoVTVPkg5aYau3vDvC523e_Kqq7pAVRj70",
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          {/* <img src={Byusa} alt="profile" /> */}
          <Avatar src={Byusa} />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
          />
          <input
            className="tweetBox__imageInput"
            onChange={(e) => setTweetImage(e.target.value)}
            value={tweetImage}
            placeholder="Optional: Enter image URL"
            type="text"
          />
        </div>
        <Button className="tweetBox__tweetButton" onClick={sendTweet}>
          {" "}
          Tweet{" "}
        </Button>
      </form>
    </div>
  );
}

export default Tweetbox;
