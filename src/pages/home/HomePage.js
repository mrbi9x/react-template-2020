import React, { useCallback } from "react";
import Container from "@material-ui/core/Container";
import InfiniteWindowScrollList from "pages/tests/InfiniteWindowScrollList";
import {
  Paper,
  Grid,
  Typography,
  Box,
  Hidden,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

function useWidth() {
  const theme = useTheme();
  const keys = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || "xs"
  );
}

const HomePage = () => {
  const width = useWidth();

  return (
    <>
      <Grid
        container
        spacing={1}
        direction="row"
        justify="space-around"
        wrap="nowrap"
      >
        <Hidden mdDown>
          <Grid container item lg={3}>
            <Box width="100%">
              <Paper>
                <Typography variant="h6" color="initial">
                  Left
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </Hidden>
        <Grid item lg={6} md={10} sm={12} xs={12} style={{ maxWidth: "720px" }}>
          <Paper>
            <Typography variant="h6" color="initial">
              {width}
            </Typography>
          </Paper>
          <Container
            maxWidth="md"
            disableGutters
            fixed
            style={{ paddingBottom: "64px" }}
          >
            <InfiniteWindowScrollList />
          </Container>
        </Grid>
        <Hidden smDown>
          <Grid container item lg={3} md>
            <Box width="100%">
              <Paper>
                <Typography variant="h6" color="initial">
                  Right
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </Hidden>
      </Grid>
    </>
  );
};

export default HomePage;
