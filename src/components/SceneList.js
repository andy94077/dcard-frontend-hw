import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import SceneCard from "./SceneCard";
import { SERVER, CITIES } from "../config";
import Loading from "./Loading";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: 320 * 3 + 5 * 6,
    marginTop: 10,
    [theme.breakpoints.down("sm")]: { width: 320 * 2 + 5 * 4 },
    [theme.breakpoints.down(660)]: { maxWidth: 400, width: "100%" },
  },
  card: {
    margin: 3,
    width: "100%",
    [theme.breakpoints.up(660)]: { width: 320, margin: 5 },
  },
  badRequest: { marginTop: 20, textAlign: "center" },
}));

export default function SceneList() {
  const { city = "all" } = useParams();
  const classes = useStyles();

  const { isLoading, isError, isLoadingError, data: scenes, error } = useQuery(
    ["scenes", city],
    async () => {
      const { data } = await SERVER.get(
        city === "all" || city === "" || city === undefined
          ? "/ScenicSpot"
          : `/ScenicSpot/${city}`,
        {
          params: { $top: 30, $format: "JSON" },
        }
      );
      return data;
    },
    { retry: false }
  );

  if (isError || isLoadingError) {
    return (
      <Typography className={classes.badRequest} variant="h4">
        Bad Request. <br />
        Please Enter the Right City.
      </Typography>
    );
  }
  if (isLoading) {
    return <Loading mode="linear" />;
  }

  console.log("scenes", scenes);
  return (
    <div className={classes.root}>
      {scenes
        .filter(
          (scene) =>
            city === undefined ||
            city === "" ||
            city === "all" ||
            scene.City === CITIES[city]
        )
        .map((scene) => (
          <SceneCard
            key={scene.ID}
            className={classes.card}
            name={scene.Name}
            image={scene.Picture.PictureUrl1}
            text={scene.Description}
          />
        ))}
    </div>
  );
}
