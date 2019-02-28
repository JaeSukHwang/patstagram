import React from "react";
import Ionicon from "react-ionicons";
import "shared/formStyles.scss";

const SignupForm = props => (
    <div className="formComponent">
        <h3 className="signupHeader">친구들의 시바 사진과 동영상을 보려면 가입하세요.</h3>
        <button className="button">
            <Ionicon icon="logo-facebook" fontSize="20px" color="white" /> Facebook으로 로그인
        </button>
        <span className="divider">또는</span>
        <form className="form">
            <input type="email" placeholder="이메일" className="textInput"/>
            <input type="text" placeholder="성명" className="textInput"/>
            <input type="username" placeholder="사용자 이름" className="textInput"/>
            <input type="password" placeholder="비밀번호" className="textInput"/>
            <input type="submit" value="가입" className="button"/>
        </form>
        <p className="terms">
            가입하면 시바스타그램의 <span>약관 및 정책</span>에 동의하게 됩니다
        </p>
    </div>
)

export default SignupForm;