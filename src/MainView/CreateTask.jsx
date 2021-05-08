import React from "react";
import {
    Button,
    TextField,
    makeStyles,
    RadioGroup,
    FormControlLabel,
    Radio,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { addTask } from "../actions/taskActions";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles(() => ({
    root: {
        width: "100%",
    },
    head: {
        display: "flex",
        fontSize: "20px",
        borderBottom: "1px solid green",
        height: "80px",
        alignItems: "center",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        width: "400px",
        marginTop: "40px",
        marginLeft: "64px",
    },
    icon: {
        margin: "4px 10px 0px 30px",
        color: "#000",
    },
    input: {
        height: "20px",
        backgroundColor: "#F2F2F2",
        borderColor: "transparent",
        borderRadius: "5px",
    },
    label: {
        color: "grey",
    },
}));

function CreateTask() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <div className={classes.root}>
            <div className={classes.head}>
                <Link to="/" className={classes.icon}>
                    <ArrowBackIcon />
                </Link>

                <p>Create Task</p>
            </div>
            <Formik
                initialValues={{ taskName: "", description: "", status: "" }}
                noValidate
                autoComplete="off"
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values);
                    //submit
                    dispatch(addTask(values));
                    history.push("/");
                }}
            >
                {({ isSubmitting, handleSubmit, handleChange }) => (
                    <Form onSubmit={handleSubmit} className={classes.form}>
                        <p className={classes.label}>Enter Task Name</p>
                        <input
                            text="text"
                            name="taskName"
                            onChange={handleChange}
                            className={classes.input}
                        />
                        <p className={classes.label}>Enter Description</p>
                        <textarea
                            text="text"
                            name="description"
                            onChange={handleChange}
                            className={classes.input}
                            style={{ height: "100px" }}
                        />
                        <div role="group">
                            <label>
                                <Field
                                    type="radio"
                                    name="status"
                                    value="todo"
                                />
                                Todo
                            </label>
                            <label>
                                <Field
                                    type="radio"
                                    name="status"
                                    value="inprogress"
                                />
                                In-progress
                            </label>
                            <label>
                                <Field
                                    type="radio"
                                    name="status"
                                    value="done"
                                />
                                Done
                            </label>
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default CreateTask;
