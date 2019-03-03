import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const UserRow = props => (
    <div className="container">
        <div className="column">
            <img
                src={props.user.profile_image || require("images/noPhoto.jpg")}
                alt={props.user.username}
                className= {props.big? "bigAvatar" : "avatar"} />
            <div className="user">
                <span className="username">{props.user.username}</span>
                <span className="name">{props.user.name}</span>
            </div>
        </div>
        <span className="column">
            <button className="button">팔로우</button>
        </span>
    </div>
);


UserRow.propTypes = {
    user: PropTypes.shape({
        id:PropTypes.number.isRequired,
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired,
        name:PropTypes.string,
        following: PropTypes.bool.isRequired
    }).isRequired,
    big: PropTypes.bool
};


UserRow.defaultProps = {
    big: false
};

export default UserRow;