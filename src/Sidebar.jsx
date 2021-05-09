import React, { useState, useEffect } from "react";
import { Hidden, makeStyles, Button, Avatar, Box } from "@material-ui/core";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { logout } from "./actions/userActions";

const useStyles = makeStyles(() => ({
    root: {},
    drawer: { display: "flex", width: "250px" },
    logobar: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        height: "100%",
        backgroundColor: "#484C4F",
        width: "40px",
        color: "#fff",
    },
    button: {
        width: "80%",
        backgroundColor: "#34AE60",
        color: "white",
        "&:hover": {
            background: "#34AE60",
        },
        fontWeight: "300",
    },
    logout: {
        paddingBottom: "30px",
        cursor: "pointer",
    },
}));

function Sidebar() {
    const classes = useStyles();
    const userDetails = useSelector((state) => state.userDetails);

    const { user } = userDetails;
    const dispatch = useDispatch();

    return (
        <div className={classes.root}>
            <Hidden smDown>
                {user ? (
                    <>
                        <Box display="flex" height="100%">
                            <div
                                className={classes.logobar}
                                onClick={() => {
                                    dispatch(logout());
                                }}
                            >
                                <PowerSettingsNewIcon
                                    className={classes.logout}
                                />
                            </div>
                            <div className={classes.drawer}>
                                <Box width="100%">
                                    <Box display="flex">
                                        <Box p="30px 10px 40px 30px">
                                            <Avatar src={user.data.avatar} />
                                        </Box>
                                        <Box pt="28px">
                                            <p style={{ fontSize: "18px" }}>
                                                {user.data.first_name}{" "}
                                                {user.data.last_name}
                                            </p>
                                            <p style={{ fontSize: "14px" }}>
                                                {user.data.email}
                                            </p>
                                        </Box>
                                    </Box>
                                    <Box
                                        style={{
                                            backgroundColor: "#F2F2F2",
                                            height: "60px",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Button
                                            className={classes.button}
                                            variant="contained"
                                            component={Link}
                                            to={"/analytics"}
                                        >
                                            Analytics
                                        </Button>
                                    </Box>
                                </Box>
                            </div>
                        </Box>
                    </>
                ) : (
                    ""
                )}
            </Hidden>
        </div>
    );
}

export default Sidebar;
