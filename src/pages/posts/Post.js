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
  CardMedia,
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
    margin: theme.spacing(2, 2),
  },
  cardMedia: {
    height: "400px",
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
  const mediaTracking = isScrolling ? (
    <Skeleton animation="wave" variant="rect" className={classes.cardMedia} />
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
        />
        <CardContent>
          <Typography variant="body1" color="initial">
            {postEntity ? title : "No content"}
          </Typography>
          <Typography variant="body2" color="initial">
            {thumbnailUrl}
          </Typography>
          <Typography variant="subtitle2" color="initial">
            {url}
          </Typography>
        </CardContent>
        {url && (
          <CardActionArea className={classes.cardMedia}>
            {isScrolling ? (
              mediaTracking
            ) : (
              <CardMedia
                title="title"
                image={url}
                className={classes.cardMedia}
              />
            )}
          </CardActionArea>
        )}
        <CardActions>
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
