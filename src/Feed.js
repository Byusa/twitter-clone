import React from 'react'
import './Styles/Feed.css'
import TweetBox from './Tweetbox'
import Post from './Post'

function Feed() {
    return (
        <div className="feed">
            <div className="feed__header">
                <h2> Home </h2>
            </div>
            <TweetBox />

            <Post />
            <Post />

        </div>
    )
}

export default Feed
