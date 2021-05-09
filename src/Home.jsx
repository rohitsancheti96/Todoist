import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import MainView from "./MainView";
import { makeStyles } from "@material-ui/core";
import { Switch, Route, useHistory } from "react-router-dom";
import CreateTask from "./MainView/CreateTask";
import { useSelector, useDispatch } from "react-redux";
import Analytics from "./MainView/Analytics";
import { detailsUser } from "./actions/userActions";

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
    const dispatch = useDispatch();

    useEffect(() => {
        if (userInfo === null) {
            history.push("/login");
        }
    }, [userInfo]);

    useEffect(() => {
        dispatch(detailsUser(2));
    }, []);

    return (
        <div className={classes.root}>
            <Sidebar />
            <div className={classes.main}>
                <Switch>
                    <Route path="/analytics" component={Analytics} />
                    <Route path="/newtask" component={CreateTask} />
                    <Route path="/" component={MainView} />
                </Switch>
            </div>
        </div>
    );
}

export default Home;
