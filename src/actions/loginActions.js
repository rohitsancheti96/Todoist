import Axios from "axios";

const {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
} = require("../constants/loginConstants");

const login = (email, password) => async (dispatch) => {
    dispatch({ type: USER_LOGIN_REQUEST, payload: { email, password } });
    try {
        const { data } = await Axios.post("https://reqres.in/api/login", {
            email,
            password,
        });

        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        dispatch({ type: USER_LOGIN_FAILURE, payload: error.messasge });
    }
};

export { login };
