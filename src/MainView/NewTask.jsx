import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
    root: {
        height: "64px",
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "#F2F2F2",
        marginBottom: "20px",
    },
    button: {
        backgroundColor: "#34AE60",
        height: "36px",
        color: "white",
        marginRight: "20px",
        "&:hover": {
            background: "#34AE60",
        },
        fontWeight: "300",
    },
}));

function NewTask() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Button
                className={classes.button}
                variant="contained"
                component={Link}
                to={"/newtask"}
            >
                New Task
            </Button>
        </div>
    );
}

export default NewTask;
