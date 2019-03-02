import React from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";
import "./styles.scss"

const PhotoActions = (props) => (
    <div className="actions">
        <div className="icons">
            <span className="icon">
                <Ionicon icon="ios-heart-outline" fontSize="28px" color="black" />
            </span>
            <span className="icon">
                <Ionicon icon="ios-text-outline" fontSize="28px" color="black" />
            </span>
        </div>
        <span className="likes">
            좋아요 {props.number}개
        </span>
    </div>
);

PhotoActions.propTypes = {
    number: PropTypes.number.isRequired
};

export default PhotoActions;