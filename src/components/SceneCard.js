import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 320,
    height: 180,
    display: "flex",
  },
  media: { flex: 1 },
  contentContainer: { flex: 1 },
  content: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    "&:last-child": { paddingBottom: 16 },
  },
  title: { fontSize: "1.1em" },
  description: {
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
    scene,
    className,
    classes: propClass = { root: "", title: "", description: "" },
  } = props;
  const classes = useStyles();

  return (
    <Card className={`${classes.root} ${className} ${propClass.root}`}>
      <CardMedia className={classes.media} image={scene.Picture.PictureUrl1} />
      <div className={classes.contentContainer}>
        <CardContent className={classes.content}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={`${classes.title} ${propClass.title}`}
          >
            {scene.Name}
          </Typography>
          <Typography
            className={`${classes.description} ${propClass.description}`}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {scene.Description}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}