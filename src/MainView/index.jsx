import React from "react";
import Inprogress from "./Inprogress";
import Done from "./Done";
import Todo from "./Todo";
import { makeStyles, Grid } from "@material-ui/core";
import NewTask from "./NewTask";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addTask } from "../actions/taskActions";
import { useState } from "react";

const useStyles = makeStyles(() => ({
    root: {
        width: "100%",
        height: "calc(100% - 100px)",
    },
    main: { height: "100%", paddingRight: "20px" },
    gridItem: { height: "100%" },
}));

function MainView() {
    const classes = useStyles();
    const taskList = useSelector((state) => state.tasks);
    const [todo, setTodo] = useState([]);
    const [inprogress, setInprogress] = useState([]);
    const [done, setDone] = useState([]);
    console.log(taskList);

    useEffect(() => {
        let temp_todo = [];
        let temp_inprogress = [];
        let temp_done = [];
        taskList.taskList &&
            taskList.taskList.forEach((item) => {
                switch (item.status) {
                    case "todo":
                        return temp_todo.push(item);
                    case "inprogress":
                        return temp_inprogress.push(item);
                    case "done":
                        return temp_done.push(item);
                    default:
                        return;
                }
            });
        setTodo(temp_todo);
        setInprogress(temp_inprogress);
        setDone(temp_done);
    }, [taskList]);

    return (
        <div className={classes.root}>
            <NewTask />
            <Grid container className={classes.main} spacing={1}>
                <Grid item md={4} sm={12} className={classes.gridItem}>
                    <Todo list={todo} />
                </Grid>
                <Grid item md={4} sm={12} className={classes.gridItem}>
                    <Inprogress list={inprogress} />
                </Grid>
                <Grid item md={4} sm={12} className={classes.gridItem}>
                    <Done list={done} />
                </Grid>
            </Grid>
        </div>
    );
}

export default MainView;
