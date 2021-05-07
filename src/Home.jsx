import React, { useState } from "react";
import Sidebar from "./Sidebar";
import MainView from "./MainView";
import { makeStyles } from "@material-ui/core";
import { Switch, Route, useHistory } from "react-router-dom";
import CreateTask from "./MainView/CreateTask";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        height: "100%",
    },
    main: {
        borderLeft: "1px solid green",
        width: "100%",
    },
}));

function Home() {
    const classes = useStyles();
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const history = useHistory();

    useEffect(() => {
        if (userInfo === null) {
            history.push("/login");
        }
    }, [userInfo]);

    return (
        <div className={classes.root}>
            <Sidebar />
            <div className={classes.main}>
                <Switch>
                    <Route path="/newtask" component={CreateTask} />
                    <Route path="/" component={MainView} />
                </Switch>
            </div>
        </div>
    );
}

export default Home;
