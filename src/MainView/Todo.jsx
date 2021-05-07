import React from "react";
import CardBox from "../component/CardBox";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: "#F7F7F8",
        width: "100%",
        margin: "10px",
    },
    head: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F2C94B",
        marginBottom: "10px",
        height: "30px",
        borderRadius: "7px",
        borderBottomLeftRadius: "0px",
        borderBottomRightRadius: "0px",
    },
    cards: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "500px",
        overflow: "scroll",
    },
}));

function Todo({ list }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h3 className={classes.head}>To-do</h3>
            <div className={classes.cards}>
                {list.length > 0 &&
                    list.map((item) => {
                        return <CardBox key={item.id} item={item} />;
                    })}
            </div>
        </div>
    );
}

export default Todo;
