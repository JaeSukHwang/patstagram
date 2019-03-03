import {connect} from "react-redux";
import Container from "./container";
import {actionCreators as photoActions} from "redux/modules/photos";

const mapDisaptchToProps = (dispatch, ownProps) => {
    return {
        submitComment: message => {
            dispatch(photoActions.commentPhoto(ownProps.photoId, message));
        }
    };
};

export default connect(null, mapDisaptchToProps)(Container);
