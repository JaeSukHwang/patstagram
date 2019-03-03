import React from "react";
import Textarea from "react-textarea-autosize";
import PropTypes from "prop-types";
import "./styles.scss";

const CommentBox = (props) => (
    <form className="commentBox" onSubmit={props.handleSubmit}>
        <Textarea
            className="input" placeholder="댓글을 추가하세요..."
            onChange={props.handleInputChange} value={props.comment} onKeyPress={props.handleKeyPress}
            />
    </form>
);

CommentBox.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    comment: PropTypes.string.isRequired,
    handleKeyPress: PropTypes.func.isRequired
};

export default CommentBox;