import { Button, Avatar } from '@material-ui/core'
import React from 'react'
import './Styles/Tweetbox.css'
import Byusa from '/Users/sergebyusa/Library/Mobile Documents/com~apple~CloudDocs/Desktop/React/twitter-clone/src/Assets/Serge.png';

function Tweetbox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    {/* <img src={Byusa} alt="profile" /> */}
                    <Avatar src={Byusa} />
                    <input className="tweetBox__imageInput"
                        placeholder="What's happening?" />
                </div>
                <Button className="tweetBox__tweetButton"> Tweet </Button>
            </form>
        </div>
    )
}

export default Tweetbox
