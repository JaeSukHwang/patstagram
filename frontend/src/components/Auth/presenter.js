import React from "react";
import "./styles.scss"
import { LoginForm, SignupForm } from "../AuthForms";

const Auth = (props, context) => (
    <main className="auth">
        <div className="column">
            <img src={require("images/background.jpg")} alt="Checkout our app. Is cool" />
        </div>
        <div className="column">
            <div className="whiteBox formBox" >
                <img src={require("images/logo.png")} alt="Logo" />
                {props.action == "login" && <LoginForm />}
                {props.action == "signup" && <SignupForm/>}
            </div>    
            <div className="whiteBox">
                {props.action == "login" && (
                                <p >
                                    계정이 없으신가요?{" "}
                                    <span
                                        className="changeLink"
                                        onClick={props.changeAction}
                                    >
                                        가입하기
                                    </span>
                                </p>
                            )}
                {props.action == "signup" && (
                                <p>
                                    계정이 있으신가요?{" "}
                                    <span
                                        className="changeLink"
                                        onClick={props.changeAction}
                                    >
                                        로그인
                                    </span>
                                </p>
                            )}
            </div>
            <div className="appBox">
                <span className="todo">#todo: 시바스타그램 앱버전 구현하기!</span>
                <div className="appstores">
                    <img
                        src={require("images/ios.png")}
                        alt = "이 앱을 애플 스토어에서 다운로드 받으세요!"
                    />
                    <img
                        src={require("images/android.png")}
                        alt = "이 앱을 구글 스토어에서 다운로드 받으세요!"
                    />
                </div>
            </div>
        </div>
    </main>
);

export default Auth;