//import

//actions

const SAVE_TOKEN = "SAVE_TOKEN";
const LOGOUT = "LOGOUT";

//action creators

function saveToken(token) {
    return {
        type: SAVE_TOKEN,
        token
    };
}

function logout() {
    return {
        type: LOGOUT
    }
}
//API actions

function facebookLogin(access_token) {
    return function(dispatch) {
        fetch("/users/login/facebook/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                access_token
            })
        })
            .then(response => response.json())
            .then(json => {
                if (json.token) {
                    dispatch(saveToken(json.token));
                }
            })
            .catch(err => console.log(err));
    };
}

function usernameLogin(username, password) {
    return function(dispatch){
        fetch("/rest-auth/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                username,
                password
            })
        })
        .then(response => response.json())
        .then(json => {
            if(json.token){
            dispatch(saveToken(json.token))
            }
        })
        .catch(err => console.log(err));
    }
}


function createAccount(email, name, password, username) {
    return function(dispatch) {
        fetch("/rest-auth/registration/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password1: password,
                password2: password,
                email,
                name
            })
        })
            .then(response => response.json())
            .then(json => {
                if(json.token) {
                    dispatch(saveToken(json.token));
                }
                else{
                    document.getElementById('error').innerHTML ="비밀번호는 여덟자리 이상이여야 되고 숫자로만 이루어지면 안됩니다";
                }
            })
    }
}

//initial state

const initialState = {
    isLoggedIn: localStorage.getItem("jwt") ? true : false,
    token: localStorage.getItem("jwt")
};

//reducer

function reducer(state= initialState, action) {
    switch (action.type) {
        case SAVE_TOKEN:
            return applySetToken(state, action);
        case LOGOUT:
            return applyLogout(state, action);
        default:
            return state;
    }
}

//reducer functions

function applySetToken(state, action) {
    const {token} = action;
    localStorage.setItem("jwt", token);
    return {
        ...state,
        isLoggedIn: true,
        token : token
    }
}

function applyLogout(state, action) {
    localStorage.removeItem("jwt");
    return {
        isLoggedIn: false
    }
}

//exports

const actionCreators = {
    facebookLogin,
    usernameLogin,
    createAccount,
    logout
};

export { actionCreators };
//reducer export

export default reducer;