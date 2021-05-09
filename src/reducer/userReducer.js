const {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_LOGOUT,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAILURE,
    USER_DETAILS_RESET,
} = require("../constants/userConstants");

function userLoginReducer(state = {}, action) {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true };
        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_LOGIN_FAILURE:
            return { loading: false, error: action.payload };
        case USER_LOGOUT:
            return {};
        default:
            return state;
    }
}

const userDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
        case USER_DETAILS_REQUEST:
            return { loading: true };
        case USER_DETAILS_SUCCESS:
            return { loading: false, user: action.payload };
        case USER_DETAILS_FAILURE:
            return { loading: false, error: action.payload };
        case USER_DETAILS_RESET:
            return { loading: true };
        default:
            return state;
    }
};

export { userLoginReducer, userDetailsReducer };
