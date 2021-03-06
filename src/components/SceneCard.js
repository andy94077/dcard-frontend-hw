import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { BrokenImageRounded } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    width: 320,
    height: 180,
    display: "flex",
  },
  media: { flex: 1 },
  broken: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#ddd",
  },
  contentContainer: { flex: 1 },
  content: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    "&:last-child": { paddingBottom: 16 },
  },
  title: { fontSize: "1em" },
  text: {
    flex: 1,
    display: "-webkit-box",
    overflow: "hidden",
    textOverflow: "ellipsis",
    "-webkit-line-clamp": 6,
    "-webkit-box-orient": "vertical",
  },
});

export default function SceneCard(props) {
  const {
    name,
    image = "",
    text,
    className,
    classes: propClass = { root: "", title: "", text: "" },
  } = props;
  const classes = useStyles();

  return (
    <Card className={`${classes.root} ${className} ${propClass.root}`}>
      {image === undefined || image === "" ? (
        <CardMedia className={classes.media}>
          <div className={classes.broken}>
            <BrokenImageRounded style={{ fontSize: 40 }} />
            <Typography variant="subtitle1">No Picture</Typography>
          </div>
        </CardMedia>
      ) : (
        <CardMedia className={classes.media} image={image} />
      )}
      <div className={classes.contentContainer}>
        <CardContent className={classes.content}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={`${classes.title} ${propClass.title}`}
          >
            {name}
          </Typography>
          <Typography
            className={`${classes.text} ${propClass.text}`}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {text}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
