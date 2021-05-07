const { ADD_TASK } = require("../constants/taskConstants");

function taskReducer(state = { taskList: [] }, action) {
    switch (action.type) {
        case ADD_TASK:
            const task = action.payload;
            return { taskList: [...state.taskList, task] };
        default:
            return state;
    }
}

export { taskReducer };
