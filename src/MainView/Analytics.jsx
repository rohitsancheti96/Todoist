import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { makeStyles, Box } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%%",
        height: "100%",
        overflow: "scroll",
    },
    head: {
        display: "flex",
        fontSize: "20px",
        borderBottom: "1px solid green",
        height: "80px",
        alignItems: "center",
    },
    icon: {
        margin: "4px 10px 0px 30px",
        color: "#000",
    },
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    chart: {
        width: "300px",
        [theme.breakpoints.up("sm")]: {
            width: "400px",
        },
    },
}));

function Analytics() {
    const classes = useStyles();
    const tasks = useSelector((state) => state.tasks);
    const [data, setData] = useState();
    const { taskList } = tasks;
    useEffect(() => {
        if (taskList.length > 0) {
            const todo = taskList.filter((task) => task.status === "todo")
                .length;
            const inprogress = taskList.filter(
                (task) => task.status === "inprogress"
            ).length;
            const done = taskList.filter((task) => task.status === "done")
                .length;
            setData({
                labels: ["Todo", "InProgress", "Done"],
                datasets: [
                    {
                        label: "My First Dataset",
                        data: [todo, inprogress, done],
                        backgroundColor: ["#F2C94B", "#34AE60", "#2F80ED"],
                        hoverOffset: 4,
                    },
                ],
            });
        }
    }, [tasks]);

    useEffect(() => {
        console.log(data);
    }, [data]);

    const pieOptions = {
        legend: {
            display: true,
            position: "right",
        },
        datalabels: {
            display: true,
            color: "white",
        },
    };

    return (
        <div className={classes.root}>
            <div className={classes.head}>
                <Link to="/" className={classes.icon}>
                    <ArrowBackIcon />
                </Link>

                <p>Analytics</p>
            </div>
            <div className={classes.container}>
                <Box fontSize="20px" fontWright="300" p="30px">
                    Your Task Trend this Week
                </Box>
                <div className={classes.chart}>
                    <Pie data={data} options={pieOptions} />
                </div>
            </div>
        </div>
    );
}

export default Analytics;
