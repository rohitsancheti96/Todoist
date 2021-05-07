import React from "react";
import { Card, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: { minHeight: "250px", width: "80%", margin: "10px", padding: "20px" },
}));

function CardBox({ item }) {
    const classes = useStyles();

    return (
        <>
            {item && (
                <Card className={classes.root}>
                    <h3>{item.taskName}</h3>
                    <p>{item.description}</p>
                </Card>
            )}
        </>
    );
}

export default CardBox;
