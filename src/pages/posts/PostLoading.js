import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { Card, CardContent, CardHeader, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 2),
  },
}));

export default function PostLoading() {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Skeleton
              animation="wave"
              variant="circle"
              width={40}
              height={40}
            />
          }
          title={
            <Skeleton
              animation="wave"
              height={15}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          }
          subheader={<Skeleton animation="wave" height={10} width="40%" />}
        />
        <CardContent>
          <Skeleton animation="wave" variant="rect" height={150} />
        </CardContent>
        <CardContent>
          <Skeleton animation="wave" variant="rect" height={40} />
        </CardContent>
      </Card>
    </>
  );
}
