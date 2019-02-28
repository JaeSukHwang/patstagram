import React from "react";
import Ionicon from "react-ionicons"
import "./styles.scss";

export const LoginForm = props => (
<div>
    <form>
        <input type="text" placeholder="사용자 이름" />
        <input type="password" placeholder="비밀번호" />
        <input type="submit" value="Log in" />
    </form>
    <span>또는</span>
    <span>
        <Ionicon icon="logo-facebook" fontSize="20px" color="#385185" /> Facebook으로 로그인
    </span>
    <span>비밀번호를 잊으셨나요?</span>
</div>
);

export const SignupForm = props => (
    <div>
        <h3>친구들의 시바 사진과 동영상을 보려면 가입하세요.</h3>
        <button>
            <Ionicon icon="logo-facebook" fontSize="20px" color="#385185" /> Facebook으로 로그인
        </button>
        <span>또는</span>
        <form>
            <input type="email" placeholder="이메일" />
            <input type="text" placeholder="성명" />
            <input type="username" value="사용자 이름" />
            <input type="password" placeholder="비밀번호" />
            <input type="submit" placeholder="가입" />
        </form>
        <p>
            가입하면 시바스타그램의 <span>약관 및 정책</span>에 동의하게 됩니다
        </p>
    </div>
)