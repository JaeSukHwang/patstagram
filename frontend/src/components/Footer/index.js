import React from "react";
import "./styles.scss";
import PropTypes from "prop-types";

const Footer = (props, context) => (
    <footer className="footer">
        <div className="column">
            <nav className="nav">
                <ul className="list">
                    <li className="listItem">{context.t("About Me")}</li>
                    <li className="listItem">{context.t("Support")}</li>
                    <li className="listItem">{context.t("Github")}</li>
                    <li className="listItem">{context.t("Privacy")}</li>
                    <li className="listItem">{context.t("Terms")}</li>
                </ul>
            </nav>    
        </div>
        <div className="column">
            <span className="copyright">© 황재석의 Shibastagram</span>
        </div>
    </footer>
);

Footer.contextTypes = {
    t : PropTypes.func.isRequired
};

export default Footer;
