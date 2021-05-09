import React from "react";
import { makeStyles, Button, Box } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { addTask } from "../actions/taskActions";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
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
    formContainer: {
        padding: "0px 20px",
        [theme.breakpoints.up("sm")]: {
            padding: "30px 60px",
        },
    },
    form: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: "400px",
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
        padding: "5px",
    },
    label: {
        color: "grey",
        fontWeight: "200",
        margin: "40px 0px 10px 0px",
    },
    button: {
        backgroundColor: "#34AE60",
        fontWeight: "300",
        height: "36px",
        color: "white",
        marginRight: "20px",
        "&:hover": {
            background: "#34AE60",
        },
        width: "80px",
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
            <Box className={classes.formContainer}>
                <Formik
                    initialValues={{
                        taskName: "",
                        description: "",
                        status: "",
                    }}
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
                                type="text"
                                name="taskName"
                                onChange={handleChange}
                                className={classes.input}
                                placeholder="Task Name"
                            />
                            <p className={classes.label}>Enter Description</p>
                            <textarea
                                type="text"
                                name="description"
                                onChange={handleChange}
                                className={classes.input}
                                style={{ height: "100px" }}
                                placeholder="Description"
                            />
                            <p className={classes.label}>Branch to</p>
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
                            <Box display="flex" mt="20px">
                                <Button
                                    className={classes.button}
                                    variant="contained"
                                    component={Link}
                                    to={"/"}
                                    style={{
                                        backgroundColor: "lightgrey",
                                        color: "#000",
                                    }}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    disabled={isSubmitting}
                                    className={classes.button}
                                >
                                    Create
                                </Button>
                            </Box>
                        </Form>
                    )}
                </Formik>
            </Box>
        </div>
    );
}

export default CreateTask;
