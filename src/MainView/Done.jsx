import React from "react";
import CardBox from "../component/CardBox";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: "#F7F7F8",
        width: "100%",
        borderRadius: "5px",
        margin: "10px",
    },
    head: {
        backgroundColor: "#2F80ED",
        textAlign: "center",
        marginBottom: "10px",
    },
    cards: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
}));

function Done({ list }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h3 className={classes.head}>Done</h3>
            <div className={classes.cards}>
                {list.length > 0 &&
                    list.map((item) => {
                        return <CardBox key={item.id} item={item} />;
                    })}
            </div>
        </div>
    );
}

export default Done;