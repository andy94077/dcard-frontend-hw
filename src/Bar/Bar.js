import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, NativeSelect } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";

import { CITIES } from "../config";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: { marginRight: theme.spacing(2) },
  select: {
    backgroundColor: "#eee",
    paddingLeft: theme.spacing(1),
    "&:focus": { backgroundColor: "#eee", borderRadius: 4 },
  },
  offset: theme.mixins.toolbar,
}));

export default function Bar() {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const [selectedOption, setSelectedOption] = useState(
    /scenicSpot\/.+$/.test(location.pathname)
      ? location.pathname.split("/").slice(-1).pop()
      : "all"
  );

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
    history.push(
      `/scenicSpot/${e.target.value === "all" ? "" : e.target.value}`
    );
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Choose the city:
          </Typography>
          <NativeSelect
            classes={{ select: classes.select }}
            value={selectedOption}
            variant="outlined"
            onChange={handleSelectChange}
          >
            <option value="all">全部</option>
            {Object.entries(CITIES).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </NativeSelect>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </div>
  );
}
