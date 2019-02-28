import React from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";
import "shared/formStyles.scss";

const LoginForm = props => (
    <div className="formComponent">
        <form className="form" onSubmit={props.handleSubmit}>
            <input type="text" placeholder="사용자 이름" className="textInput"
            onChange={props.handleInputChange} name="username" value={props.usernameValue}/>
            <input type="password" placeholder="비밀번호" className="textInput" 
            onChange={props.handleInputChange} name="password" value={props.passwordValue}/>
            <input type="submit" value="로그인" className="button"/>
        </form>
        <span className="divider">또는</span>
        <span className="facebookLink">
            <Ionicon icon="logo-facebook" fontSize="20px" color="#385185" /> Facebook으로 로그인
        </span>
        <span className="forgotLink">비밀번호를 잊으셨나요?</span>
    </div>
);

LoginForm.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    usernameValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

export default LoginForm;