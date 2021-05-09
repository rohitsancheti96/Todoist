const { ADD_TASK, UPDATE_TASK } = require("../constants/taskConstants");

function taskReducer(state = { taskList: [] }, action) {
    switch (action.type) {
        case ADD_TASK:
            const task = action.payload;
            return { taskList: [...state.taskList, task] };
        case UPDATE_TASK:
            const id = action.payload.id;

            const updateItem = state.taskList.find((item) => item.id === id);
            updateItem.status = action.payload.status;

            let newTaskList = [
                ...state.taskList.filter((item) => item.id !== id),
                updateItem,
            ];

            return { taskList: newTaskList };
        default:
            return state;
    }
}

export { taskReducer };
