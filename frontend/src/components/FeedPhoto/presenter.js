import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import PhotoActions from "components/PhotoActions";
import PhotoComments from "components/PhotoComments";
import TimeStamp from "components/TimeStamp";
import CommentBox from "components/CommentBox";

const FeedPhoto = (props) => {
    return (
        <div className="feedPhoto">
            <header className="header">
                <img
                    src={props.creator.profile_image || require("images/noPhoto.jpg")}
                    alt={props.creator.username}
                    className="image"
                />
                <div className="headerColumn">
                    <span className="creator">{props.creator.username}</span>
                    <span className="location">{props.location}</span>
                </div>
            </header >
            <div className="photoContainer">
                <img className="mainPhoto" src={props.file} alt={props.caption} />
            </div>
            <div className="meta">
                <PhotoActions
                number={props.like_count}
                isLiked = {props.is_liked}
                photoId = {props.id}
                />
                <PhotoComments
                    caption = {props.caption}
                    creator = {props.creator.username}
                    comments={props.comments}
                />
                <TimeStamp time={props.natural_time} />
                <CommentBox photoId={props.id}/>
            </div>
        </div>
    );
};

FeedPhoto.propTypes = {
    creator: PropTypes.shape({
        profile_image: PropTypes.string,
    username: PropTypes.string.isRequired
    }).isRequired,
    location: PropTypes.string.isRequired,
    file: PropTypes.string.isRequired,
    like_count: PropTypes.number.isRequired,
    caption: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            message: PropTypes.string.isRequired,
            creator: PropTypes.shape({
                profile_image: PropTypes.string,
                username: PropTypes.string.isRequired
            }).isRequired 
        })
    ).isRequired,
    natural_time: PropTypes.string.isRequired,
    is_liked: PropTypes.bool.isRequired
};

export default FeedPhoto;