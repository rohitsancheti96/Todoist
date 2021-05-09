import { taskReducer } from "./reducer/taskReducers";
import thunk from "redux-thunk";
import { userLoginReducer, userDetailsReducer } from "./reducer/userReducer";
const {
    createStore,
    combineReducers,
    compose,
    applyMiddleware,
} = require("redux");

//fetch from local storage
const taskList = JSON.parse(localStorage.getItem("taskList")) || [];
const userInfo = JSON.parse(localStorage.getItem("userInfo")) || null;

const initialState = {
    tasks: { taskList },
    userLogin: { userInfo },
};

const reducer = combineReducers({
    tasks: taskReducer,
    userLogin: userLoginReducer,
    userDetails: userDetailsReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;
