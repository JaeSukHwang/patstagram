import React from "react";
import PropTypes from "prop-types";
import "shared/formStyles.scss";
import FacebookLogin from "react-facebook-login"

const SignupForm = props => (
    <div className="formComponent">
        <h3 className="signupHeader">친구들의 시바 사진과 동영상을 보려면 가입하세요.</h3>
        <FacebookLogin
            appId="2247567672157027"
            autoLoad={false}
            fields="name,email,picture"
            callback={props.handleFacebookLogin}
            cssClass="button"
            icon="fa-facebook-official"
            textButton="Log in with Facebook"
        />
        <span className="divider">또는</span>
        <form className="form" onSubmit={props.handleSubmit}>
            <input type="email" placeholder="이메일" className="textInput"
            value={props.emailValue} onChange={props.handleInputChange} name="email"/>
            <input type="text" placeholder="성명" className="textInput"
            value={props.nameValue} onChange={props.handleInputChange} name="name"/>
            <input type="username" placeholder="사용자 이름" className="textInput"
            value={props.usernameValue} onChange={props.handleInputChange} name="username"/>
            <input type="password" placeholder="비밀번호" className="textInput"
            value={props.passwordValue} onChange={props.handleInputChange} name="password"/>
            <div className="error" id="signuperror"></div>
            <input type="submit" value="가입" className="button" />
        </form>
        <p className="terms">
            가입하면 시바스타그램의 <span>약관 및 정책</span>에 동의하게 됩니다
        </p>
    </div>
)

SignupForm.propTypes = {
    emailValue: PropTypes.string.isRequired,
    nameValue: PropTypes.string.isRequired,
    usernameValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleFacebookLogin: PropTypes.func.isRequired
};


export default SignupForm;