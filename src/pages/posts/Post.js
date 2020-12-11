import {
  Card,
  makeStyles,
  Avatar,
  CardHeader,
  IconButton,
  CardContent,
  Typography,
  CardActions,
  CardActionArea,
  Divider,
} from "@material-ui/core";
import React from "react";
import {
  MoreVert as MoreVertIcon,
  FavoriteBorder,
  Favorite,
  Share,
} from "@material-ui/icons";
import Skeleton from "@material-ui/lab/Skeleton";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2.5, 1),
  },
  cardHeader: {
    // backgroundColor: theme.palette.background.default,
    paddingBottom: theme.spacing(1),
  },
  cardContent: {
    padding: theme.spacing(1),
  },
  cardMedia: {
    padding: theme.spacing(1, 0),
  },
  cardActions: {
    // backgroundColor: theme.palette.background.default,
  },
}));

export default function Post(props) {
  const { index, isScrolling } = props;
  const postEntity = useSelector((state) => state.posts.entities[index]);
  const { id, albumId, title, thumbnailUrl, url } = postEntity || {};
  const classes = useStyles();

  const titleTracking = isScrolling ? (
    <Skeleton animation="wave" width="80%" />
  ) : (
    `Post ${id}`
  );
  const subheaderTracking = isScrolling ? (
    <Skeleton animation="wave" width="40%" />
  ) : (
    `Album ${albumId}`
  );

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
              <Avatar aria-label="avatar" src={thumbnailUrl}>
                {id}
              </Avatar>
            )
          }
          action={
            <IconButton aria-label="mores">
              <MoreVertIcon />
            </IconButton>
          }
          title={titleTracking}
          subheader={subheaderTracking}
          className={classes.cardHeader}
        />
        <Divider />
        <CardContent className={classes.cardContent}>
          <Typography variant="body1" color="initial">
            {postEntity ? title : "No content"}
          </Typography>
          <Typography variant="body2" color="initial">
            {thumbnailUrl}
          </Typography>
          <Typography variant="subtitle2" color="initial" noWrap={false}>
            {url}
          </Typography>
        </CardContent>
        {url && (
          <CardActionArea className={classes.cardMedia}>
            <div style={{ "--aspect-ratio": 16 / 9 }}>
              <img src={url} alt={title ? title : "images"} />
            </div>
          </CardActionArea>
        )}
        <Divider />
        <CardActions className={classes.cardActions}>
          <IconButton aria-label="add to favorites">
            {index % 2 ? <FavoriteBorder /> : <Favorite color="secondary" />}
          </IconButton>
          <IconButton aria-label="Share" style={{ marginLeft: "auto" }}>
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
}
