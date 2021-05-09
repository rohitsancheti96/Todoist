import axios from "axios";

const {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_LOGOUT,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAILURE,
} = require("../constants/userConstants");

const login = (email, password) => async (dispatch) => {
    dispatch({ type: USER_LOGIN_REQUEST, payload: { email, password } });
    try {
        const { data } = await axios.post("https://reqres.in/api/login", {
            email,
            password,
        });

        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        dispatch({ type: USER_LOGIN_FAILURE, payload: error.messasge });
    }
};

const logout = () => (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: USER_LOGOUT });
    document.location.href = "/login";
};

const detailsUser = (userId) => async (dispatch, getState) => {
    dispatch({ type: USER_DETAILS_REQUEST, payload: userId });
    try {
        const { data } = await axios.get(
            `https://reqres.in/api/users/${userId}`
        );
        dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({ type: USER_DETAILS_FAILURE, payload: message });
    }
};

export { login, logout, detailsUser };
