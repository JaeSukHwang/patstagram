import React from "react";
import Textarea from "react-textarea-autosize";
import "./styles.scss";

const CommentBox = (props) => (
    <form className="commentBox">
        <Textarea className="input" placeholder="댓글을 추가하세요..." />
    </form>
);

export default CommentBox;