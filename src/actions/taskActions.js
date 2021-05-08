import * as uuid from "uuid";
const { ADD_TASK, UPDATE_TASK } = require("../constants/taskConstants");

const addTask = (task) => (dispatch, getState) => {
    dispatch({
        type: ADD_TASK,
        payload: {
            taskName: task.taskName,
            description: task.description,
            status: task.status,
            id: uuid.v4(),
        },
    });

    const {
        tasks: { taskList },
    } = getState();
    localStorage.setItem("taskList", JSON.stringify(taskList));
};

const updateTask = (id, status) => (dispatch, getState) => {
    dispatch({
        type: UPDATE_TASK,
        payload: { id, status },
    });
    const {
        tasks: { taskList },
    } = getState();
    localStorage.setItem("taskList", JSON.stringify(taskList));
};

export { addTask, updateTask };
