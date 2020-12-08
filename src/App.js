import {
  ThemeProvider,
  CssBaseline,
  Container,
  Box,
  Hidden,
} from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import theme from "./configs/theme";
import Counter from "./pages/counter/Counter";
import Todos from "./pages/todos/Todos";
import BottomNavigatorBar from "./components/BottomNavigatorBar";
import HomePage from "./pages/home/HomePage";
import Posts from "./pages/posts/Posts";
import Feeds from "./pages/home/Feeds";
import InfiniteList from "./components/infinite-list/InfiniteList";


//pollyfill for ResizeObserver
if (typeof ResizeObserver === "undefined") {
  global.ResizeObserver = require("resize-observer-polyfill").default;
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Header />
        <Container maxWidth="lg">
          <Box my={2}>
            <Switch>
              <Route path="/counter">
                <Counter />
              </Route>
              <Route path="/todos">
                <Todos />
              </Route>
              <Route path="/posts">
                <Posts />
              </Route>
              <Route path="/testVirtuoso">
                <InfiniteList />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
              <Route path="*">
                <HomePage />
              </Route>
            </Switch>
          </Box>
          <Hidden smUp>&nbsp;</Hidden>
          <BottomNavigatorBar />
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
