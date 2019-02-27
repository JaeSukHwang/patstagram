import React from "react";
import styles from "./styles.scss";

const Footer = (props, context) => (
    <footer className="footer">
        <div className="column">
            <nav className="nav">
                <ul className="list">
                    <li className="listItem">About us</li>
                    <li className="listItem">Support</li>
                    <li className="listItem">Blog</li>
                    <li className="listItem">Press</li>
                    <li className="listItem">API</li>
                    <li className="listItem">Jobs</li>
                    <li className="listItem">Privacy</li>
                    <li className="listItem">Terms</li>
                    <li className="listItem">Directory</li>
                    <li className="listItem">Language</li>
                </ul>
            </nav>    
        </div>
        <div className="column">
            <span className="copyright">© 황재석의 Patstagram</span>
        </div>
    </footer>
);

export default Footer;
