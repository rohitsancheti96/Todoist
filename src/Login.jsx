import React from "react";
import { Grid, makeStyles, Button, TextField } from "@material-ui/core";
import { Formik, Form } from "formik";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "./actions/loginActions";

const useStyles = makeStyles((theme) => ({
    root: { height: "100%" },
    banner: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#34AE60",
        color: "white",
        // height: "100%",
        [theme.breakpoints.down("sm")]: {
            height: "30%",
        },
    },
    main: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    form: {
        display: "flex",
        flexDirection: "column",
    },
}));

function Login() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    return (
        <div className={classes.root}>
            <Grid container style={{ height: "100%" }}>
                <Grid item md={6} xs={12} className={classes.banner}>
                    <h1>switchon Assignments</h1>
                </Grid>
                <Grid item md={6} xs={12} className={classes.main}>
                    <h1>TO-DO App</h1>
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        noValidate
                        autoComplete="off"
                        onSubmit={(values, { setSubmitting }) => {
                            console.log(values);
                            dispatch(login(values.email, values.password));
                            setSubmitting(false);
                            history.push("/");
                        }}
                    >
                        {({ isSubmitting, handleSubmit, handleChange }) => (
                            <Form
                                className={classes.form}
                                onSubmit={handleSubmit}
                            >
                                <TextField
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                />
                                <TextField
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                />
                                <Button type="submit" disabled={isSubmitting}>
                                    Login
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Grid>
            </Grid>
        </div>
    );
}

export default Login;
