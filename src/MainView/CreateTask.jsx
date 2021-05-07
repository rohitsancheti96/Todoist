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

const useStyles = makeStyles(() => ({
    root: {
        width: "100%",
    },
    head: {
        display: "flex",
        fontSize: "20px",
        borderBottom: "1px solid green",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        width: "400px",
    },
}));

function CreateTask() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <div className={classes.root}>
            <div className={classes.head}>
                <Button component={Link} to="/">
                    Back
                </Button>
                <p>Create Task</p>
            </div>
            <Formik
                className={classes.form}
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
                {({ isSubmitting, handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <input type="text" name="taskName" />
                        <input type="text" name="description" />
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
