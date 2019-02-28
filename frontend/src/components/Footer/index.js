import React from "react";
import "./styles.scss";

const Footer = (props, context) => (
    <footer className="footer">
        <div className="column">
            <nav className="nav">
                <ul className="list">
                    <li className="listItem">About us</li>
                    <li className="listItem">Support</li>
                    <li className="listItem">Github</li>
                    <li className="listItem">Privacy</li>
                    <li className="listItem">Terms</li>
                </ul>
            </nav>    
        </div>
        <div className="column">
            <span className="copyright">© 황재석의 Shibastagram</span>
        </div>
    </footer>
);

export default Footer;
