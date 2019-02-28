import React from "react";
import "./styles.scss"

const Auth = (props, context) => (
    <main className="auth">
        <div className="column">
            <img src={require("images/background.jpg")} alt="Checkout our app. Is cool" />
        </div>
        <div className="column">
            <div className="whiteBox">
                {(() => {
                    switch (props.action) {
                        case "login":
                            return (
                                <p>
                                    계정이 없으신가요?{" "}
                                    <span
                                        className="changeLink"
                                        onClick={props.changeAction}
                                    >
                                        가입하기
                                    </span>
                                </p>
                            );
                        case "signup":
                            return (
                                <p>
                                    계정이 있으신가요?{" "}
                                    <span
                                        className="changeLink"
                                        onClick={props.changeAction}
                                    >
                                        로그인
                                    </span>
                                </p>
                            );
                        default:
                            return null;
                    }
                })()}
            </div>
            <div className="appBox">
                <span>Get the app</span>
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