import React from "react";
import Ionicon from "react-ionicons";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import "./styles.scss";

const Navigation = (props) => (
    <div className="navigation">
        <div className="inner">
            <div className="column">
                <Link to="/">
                    <img
                        src={require("images/logo.png")}
                        className="logo"
                        alt="Logo"
                    />
                </Link>
            </div>
            <div className="column">
                <form onSubmit={props.onSubmit}>
                    <input type="text" placeholder="Search" className="searchInput" value={props.value} onChange={props.onInputChange}
                    />
                </form>    
            </div>
            <div className="column">
                <div className="navIcon">
                    <Link to = "/explore">
                        <Ionicon icon="ios-compass-outline" fontSize="28px" color="black" />
                    </Link>
                </div>
                <div className="navIcon">
                    <Ionicon icon="ios-heart-outline" fontSize="28px" color="black" />
                </div>
                <div className="navIcon">
                    <Link to = "/profile">
                        <Ionicon icon="ios-person-outline" fontSize="32px" color="black" />
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

export default Navigation;

Navigation.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onInputChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}