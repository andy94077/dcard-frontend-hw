import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, useTheme } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useInfiniteQuery } from "react-query";
import ReactLoading from "react-loading";
import { useInView } from "react-intersection-observer";

import SceneCard from "./SceneCard";
import { SERVER, CITIES } from "../config";

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
  const theme = useTheme();

  const { ref: nextPageRef, inView } = useInView();
  const {
    isLoading,
    isFetchingNextPage,
    isError,
    isLoadingError,
    fetchNextPage,
    data: scenes,
    error,
  } = useInfiniteQuery(
    ["scenes", city],
    async (page) => {
      const { data } = await SERVER.get(
        city === "all" || city === "" || city === undefined
          ? "/ScenicSpot"
          : `/ScenicSpot/${city}`,
        {
          params: {
            $top: 30,
            $skip: page.pageParam || 0,
            $format: "JSON",
          },
        }
      );
      return data;
    },
    {
      retry: false,
      getNextPageParam(lastPage, pages) {
        return lastPage.length === 0 ? undefined : pages.length * 30;
      },
    }
  );

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  if (isError || isLoadingError) {
    return (
      <Typography className={classes.badRequest} variant="h4">
        {error.response ? (
          <>
            Bad Request.
            <br /> Please enter the right city.
          </>
        ) : (
          <>
            Connection Failed.
            <br /> Please check your Internet connection.
          </>
        )}
      </Typography>
    );
  }
  if (isLoading)
    return <ReactLoading type="bubbles" color={theme.palette.primary.main} />;

  return (
    <>
      <div className={classes.root}>
        {scenes.pages.map((page) =>
          page
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
            ))
        )}
      </div>
      <div ref={nextPageRef}>
        {isFetchingNextPage && (
          <ReactLoading type="bubbles" color={theme.palette.primary.main} />
        )}
      </div>
    </>
  );
}
