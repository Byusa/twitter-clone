import React from 'react'
import { Avatar } from "@material-ui/core"
import Past from './Assets/Byusa.jpg';
import { VerifiedUser, ChatBubbleOutline, Repeat, FavoriteBorder, Publish } from '@material-ui/icons';
import './Styles/Post.css'

function Post({ displayName, userName, verified, text, image, avatar }) {
    return (
        <div className="post">

            <div className="post__avatar">
                <Avatar src="https://pbs.twimg.com/profile_images/707481107919474689/H80Nqlup_400x400.jpg"> </Avatar>
            </div>

            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Ayinkamiye Beatrice  {""}
                            <span className="post__headerSpecial">
                                <VerifiedUser className="post__badge" /> @ayibet01
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>I am officially the Minister of Finance and Economic Planning in Rwanda </p>
                    </div>
                </div>

                <img
                    src="https://pbs.twimg.com/profile_images/1120744397505740800/HUgIjAJA_400x400.png"
                    alt=""
                />
                <div className="post__footer">
                    <ChatBubbleOutline fontSize="small" />
                    <Repeat fontSize="small" />
                    <FavoriteBorder fontSize="small" />
                    <Publish fontSize="small" />
                </div>
            </div>
        </div>
    )
}

export default Post
