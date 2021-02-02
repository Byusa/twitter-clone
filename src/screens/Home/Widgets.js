import React from "react";
import "../../Styles/Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"858551177860055040"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="beat"
          option={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://www.facebook.com/bibo.serge/"}
          options={{ text: "Things are getting better", via: "sbyusa" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
