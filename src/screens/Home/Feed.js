import React, { useState, useEffect } from "react";
import "../../Styles/Feed.css";
import TweetBox from "../../components/Tweetbox";
import Post from "../../components/Post";
import db from "../../config/firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot(
      (snapshot) =>
        //keep everything in posts using setPosts
        setPosts(snapshot.docs.map((doc) => doc.data()))
      //setId(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2> Home </h2>
      </div>
      <TweetBox />
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            userName={post.userName}
            verified={post.verified}
            text={post.text}
            image={post.image}
            avatar={post.avatar}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
