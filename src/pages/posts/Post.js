import {
  Card,
  makeStyles,
  Avatar,
  CardHeader,
  IconButton,
  CardContent,
  Typography,
  CardActionArea,
} from "@material-ui/core";
import React from "react";
import { MoreVert as MoreVertIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 0),
  },
}));

export default function Post() {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          avatar={<Avatar aria-label="avatar"></Avatar>}
          action={
            <IconButton aria-label="mores">
              <MoreVertIcon />
            </IconButton>
          }
          title="title"
          subheader="subheader"
        />
        <CardContent>
          <Typography variant="body2" color="initial">
            Test post content
          </Typography>
        </CardContent>
        <CardActionArea></CardActionArea>
      </Card>
    </>
  );
}
