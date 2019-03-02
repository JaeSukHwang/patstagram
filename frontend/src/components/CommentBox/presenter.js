import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const CommentBox = (props) => (
    <form>
        <textarea className="input" placeholder="댓글을 추가하세요..." />
    </form>
);

export default CommentBox;