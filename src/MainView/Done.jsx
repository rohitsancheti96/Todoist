import React from "react";
import CardBox from "../component/CardBox";
import { makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { updateTask } from "../actions/taskActions";
import { handleDragOver, handleDragLeave, handleDragEnter } from "../dragdrop";

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: "#F7F7F8",
        width: "100%",
        margin: "0px 10px",

        height: "100%",
        border: "1px solid lightgrey",
        borderRadius: "10px",
    },
    head: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2F80ED",
        color: "#fff",
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
        height: "calc(100% - 40px)",
        overflow: "scroll",
        minHeight: "300px",
    },
}));

function Done({ list }) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleDrop = (e, status) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("drop");
        const id = e.dataTransfer.getData("id");
        dispatch(updateTask(id, status));
    };

    return (
        <div
            onDrop={(e) => handleDrop(e, "done")}
            onDragOver={(e) => handleDragOver(e)}
            onDragEnter={(e) => handleDragEnter(e)}
            onDragLeave={(e) => handleDragLeave(e)}
            className={classes.root}
        >
            <p className={classes.head}>Done</p>
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
