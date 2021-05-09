import React from "react";
import { makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    card: {
        backgroundColor: "white",
        minHeight: "250px",
        width: "80%",
        margin: "10px",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "1px 1px 5px lightgrey",
    },
}));

function CardBox({ item }) {
    const classes = useStyles();

    const handleDragStart = (e, id) => {
        console.log("drag start");
        e.dataTransfer.setData("id", id);
    };

    return (
        <>
            {item && (
                <div
                    draggable
                    className={classes.card}
                    onDragStart={(e) => handleDragStart(e, item.id)}
                >
                    <p>{item.taskName}</p>
                    <Box pt="10px" fontSize="14px" fontWeight="200">
                        {item.description}
                    </Box>
                </div>
            )}
        </>
    );
}

export default CardBox;
