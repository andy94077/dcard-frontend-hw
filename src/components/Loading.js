import React from "react";
import { CircularProgress, LinearProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  loading: { marginTop: "10px" },
  linear: { width: "100%" },
}));

export default function Loading(props) {
  const { mode = "circular" } = props;
  const classes = useStyles();

  if (mode === "linear")
    return <LinearProgress color="secondary" className={classes.linear} />;
  return (
    <div className={classes.root}>
      <CircularProgress className={classes.loading} />
    </div>
  );
}
