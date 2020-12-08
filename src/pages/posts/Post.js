import {
  Card,
  makeStyles,
  Avatar,
  CardHeader,
  IconButton,
  CardContent,
  Typography,
  CardActionArea,
  CardActions,
} from "@material-ui/core";
import React from "react";
import { MoreVert as MoreVertIcon, Favorite, Share } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 2),
  },
}));

export default function Post(props) {
  const { index, content} = props;
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          avatar={<Avatar aria-label="avatar">{index}</Avatar>}
          action={
            <IconButton aria-label="mores">
              <MoreVertIcon />
            </IconButton>
          }
          title={`Title ${index}`}
          subheader={`subheader ${index}`}
        />
        <CardActionArea disableRipple>
          <CardContent>
            <Typography variant="body2" color="initial">
              {content? content : 'No content'}
            </Typography>
          </CardContent>
        </CardActionArea>
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
