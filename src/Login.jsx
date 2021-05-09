import React, { useEffect } from "react";
import { Grid, makeStyles, Button, Box } from "@material-ui/core";
import { Formik, Form } from "formik";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./actions/userActions";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockIcon from "@material-ui/icons/Lock";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
    },
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
        width: "100%",
    },
    input: {
        height: "30px",
        width: "100%",
        backgroundColor: "#F2F2F2",
        borderColor: "transparent",
    },
    button: {
        backgroundColor: "#34AE60",
        color: "#fff",
        margin: "50px 10% 0px",
        "&:hover": {
            background: "#34AE60",
        },
        fontWeight: "300",
    },
    inputContainer: {
        backgroundColor: "#F2F2F2",
        display: "flex",
        alignItems: "center",
        margin: "10px 10%",
        borderRadius: "5px",
    },
}));

function Login() {
    const classes = useStyles();
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (userInfo) {
            history.push("/");
        }
    }, [userInfo]);

    return (
        <div className={classes.root}>
            <Grid container style={{ height: "100%" }}>
                <Grid item md={6} xs={12} className={classes.banner}>
                    <h1>Switchon Assignments</h1>
                </Grid>
                <Grid item md={6} xs={12} className={classes.main}>
                    <Box fontSize="50px" mb="100px">
                        TO - DO App
                    </Box>
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        noValidate
                        autoComplete="off"
                        onSubmit={(values, { setSubmitting }) => {
                            console.log(values);
                            dispatch(login(values.email, values.password));
                            setSubmitting(false);
                        }}
                    >
                        {({ isSubmitting, handleSubmit, handleChange }) => (
                            <Form
                                className={classes.form}
                                onSubmit={handleSubmit}
                            >
                                <div className={classes.inputContainer}>
                                    <Box p="10px 10px 5px 10px">
                                        <MailOutlineIcon />
                                    </Box>
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        className={classes.input}
                                        placeholder="Email"
                                    />
                                </div>

                                <div className={classes.inputContainer}>
                                    <Box p="10px 10px 5px 10px">
                                        <LockIcon />
                                    </Box>
                                    <input
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        className={classes.input}
                                        placeholder="Password"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className={classes.button}
                                    disabled={isSubmitting}
                                >
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
