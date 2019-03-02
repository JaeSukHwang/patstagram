import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const PhotoComments = props => (
    <div className="comments">
        <ul className="list">
            <Comment username={props.creator} comment={props.caption} />
            {props.comments.map(comment => (
                <Comment
                    username={comment.creator.username}
                    comment={comment.message}
                    key={comment.id}
                />
            ))}
        </ul>
    </div>
);

const Comment = props => (
    <li className="comment">
        <span className="username">{props.username}</span>{" "}
        <span className="message">{props.comment}</span>
    </li>
);

PhotoComments.propTypes = {
    caption: PropTypes.string.isRequired,
    creator: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            message: PropTypes.string.isRequired,
            creator: PropTypes.shape({
                profile_image: PropTypes.string,
                username: PropTypes.string.isRequired
            }).isRequired 
        })  
    ).isRequired
};

export default PhotoComments;