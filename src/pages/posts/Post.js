import {
  Card,
  makeStyles,
  Avatar,
  CardHeader,
  IconButton,
  CardContent,
  Typography,
  CardActions,
} from "@material-ui/core";
import React from "react";
import { MoreVert as MoreVertIcon, Favorite, Share } from "@material-ui/icons";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 2),
  },
}));

export default function Post(props) {
  const { index, content, isScrolling } = props;
  const classes = useStyles();
  const subheaderTracking = isScrolling ? "scolling..." : `subheader ${index}`;

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            isScrolling ? (
              <Skeleton
                animation="wave"
                variant="circle"
                width={40}
                height={40}
              />
            ) : (
              <Avatar aria-label="avatar">{index}</Avatar>
            )
          }
          action={
            <IconButton aria-label="mores">
              <MoreVertIcon />
            </IconButton>
          }
          title={`Title ${index}`}
          subheader={subheaderTracking}
        />
        <CardContent>
          <Typography variant="body2" color="initial">
            {content ? content : "No content"}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="add to favorites">
            <Favorite />
          </IconButton>
          <IconButton aria-label="Share" style={{ marginLeft: "auto" }}>
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
}
