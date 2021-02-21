import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route, Redirect } from "react-router-dom";

import Bar from "./Bar/Bar";
import SceneList from "./components/SceneList";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Bar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/scenicSpot" />
        </Route>
        <Route exact path="/scenicSpot">
          <SceneList />
        </Route>
      </Switch>
    </div>
  );
}
