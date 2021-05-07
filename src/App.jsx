import Home from "./Home";
import { makeStyles } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";

const useStyles = makeStyles(() => ({
    root: { fontFamily: "Roboto, sans-serif", height: "100%" },
}));

function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/" component={Home} />
            </Switch>
        </div>
    );
}

export default App;
