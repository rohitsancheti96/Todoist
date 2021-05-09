import React, { useState, useEffect } from "react";
import Inprogress from "./Inprogress";
import Done from "./Done";
import Todo from "./Todo";
import { makeStyles, Grid, Hidden, Box, Avatar } from "@material-ui/core";
import NewTask from "./NewTask";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { logout } from "../actions/userActions";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
    root: {
        width: "100%",
        height: "calc(100% - 100px)",
    },
    main: { height: "100%", paddingRight: "20px" },
    gridItem: { height: "100%", padding: "10px 15px" },
    topbar: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#484C4F",
        height: "70px",
        marginBottom: "25px",
    },
    ".MuiAvatar-root": {
        border: "1px solid green",
    },
    icon: {
        paddingRight: "20px",
        color: "#fff",
    },
}));

function MainView() {
    const classes = useStyles();
    const tasks = useSelector((state) => state.tasks);
    const userDetails = useSelector((state) => state.userDetails);
    const dispatch = useDispatch();
    const { user } = userDetails;

    const [todo, setTodo] = useState([]);
    const [inprogress, setInprogress] = useState([]);
    const [done, setDone] = useState([]);
    console.log(tasks);
    const { taskList } = tasks;

    useEffect(() => {
        let temp_todo = [];
        let temp_inprogress = [];
        let temp_done = [];
        taskList &&
            taskList.forEach((item) => {
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
            <Hidden smDown>
                <NewTask />
            </Hidden>
            <Hidden mdUp>
                {user ? (
                    <Box className={classes.topbar}>
                        <Box p="0px 20px">
                            <Avatar src={user.data.avatar} />
                        </Box>
                        <Box flexGrow={1} />
                        <Link to="/newtask">
                            <AddIcon className={classes.icon} />
                        </Link>
                        <Link to="/analytics">
                            <ShowChartIcon className={classes.icon} />
                        </Link>
                        <PowerSettingsNewIcon
                            className={classes.icon}
                            onClick={() => dispatch(logout())}
                        />
                    </Box>
                ) : (
                    ""
                )}
            </Hidden>
            <Grid container className={classes.main}>
                <Grid item md={4} xs={12} className={classes.gridItem}>
                    <Todo list={todo} />
                </Grid>
                <Grid item md={4} xs={12} className={classes.gridItem}>
                    <Inprogress list={inprogress} />
                </Grid>
                <Grid item md={4} xs={12} className={classes.gridItem}>
                    <Done list={done} />
                </Grid>
            </Grid>
        </div>
    );
}

export default MainView;
