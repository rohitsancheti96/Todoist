import React, { useState, useEffect } from "react";
import { Hidden, makeStyles, Button, Avatar, Box } from "@material-ui/core";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
    root: {},
    drawer: { display: "flex", width: "250px" },
    logobar: { height: "100%", backgroundColor: "#484C4F", width: "40px" },
    button: {
        width: "100%",
        backgroundColor: "#34AE60",
        color: "white",
    },
}));

function Sidebar() {
    const classes = useStyles();
    const [user, setUser] = useState();
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        const fetch = async () => {
            try {
                const { data } = await Axios.get(
                    "https://reqres.in/api/users/2"
                );
                setUser(data);
                console.log(data);
            } catch (err) {
                console.log("Error fetch user data: ", err);
            }
        };
        fetch();
    }, []);

    return (
        <div className={classes.root}>
            <Hidden smDown>
                {user ? (
                    <>
                        <Box display="flex" height="100%">
                            <div
                                className={classes.logobar}
                                onClick={() => {
                                    localStorage.clear();
                                    history.push("/login");
                                }}
                            >
                                lg
                            </div>
                            <div className={classes.drawer}>
                                <Box width="100%" margin="10px">
                                    <Box display="flex">
                                        <Avatar src={user.data.avatar} />
                                        <Box>
                                            <p>
                                                {user.data.first_name}{" "}
                                                {user.data.last_name}
                                            </p>
                                            <p>{user.data.email}</p>
                                        </Box>
                                    </Box>
                                    <Button className={classes.button}>
                                        Analytics
                                    </Button>
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
