const { ADD_TASK, UPDATE_TASK } = require("../constants/taskConstants");

function taskReducer(state = { taskList: [] }, action) {
    switch (action.type) {
        case ADD_TASK:
            const task = action.payload;
            return { taskList: [...state.taskList, task] };
        case UPDATE_TASK:
            const id = action.payload.id;
            console.log(state.taskList);
            const updateItem = state.taskList.find((item) => item.id === id);
            updateItem.status = action.payload.status;
            console.log(updateItem);
            let newTaskList = [
                ...state.taskList.filter((item) => item.id !== id),
                updateItem,
            ];
            console.log(newTaskList);
            return { taskList: newTaskList };
        default:
            return state;
    }
}

export { taskReducer };
