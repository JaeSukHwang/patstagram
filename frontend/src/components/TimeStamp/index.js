import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const TimeStamp = (props) => props.time;

TimeStamp.PropTypes = {
    time: PropTypes.string.isRequired
};

export default TimeStamp;