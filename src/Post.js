import React from 'react'
import { Avatar } from "@material-ui/core"
import Past from './Assets/Byusa.jpg';
import { VerifiedUser, ChatBubbleOutline, Repeat, FavoriteBorder, Publish } from '@material-ui/icons';
import './Styles/Post.css'

function Post({ displayName, userName, verified, text, image, avatar }) {
    return (
        <div className="post">

            <div className="post__avatar">
                <Avatar src="https://pbs.twimg.com/profile_images/2152647573/IT_20Defence_1_400x400.jpg"> </Avatar>
            </div>

            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Babatunde Onadipe  {""}
                            <span className="post__headerSpecial">
                                <VerifiedUser className="post__badge" /> @Dipopoarmani
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p> I am billionaire now, let me know if you need some money!</p>
                    </div>
                </div>

                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPRT8lobXdz83suD6zBIaaOQMpcxy2skxLnQ&usqp=CAU"
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
