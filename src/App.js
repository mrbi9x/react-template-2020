import {
  ThemeProvider,
  CssBaseline,
  Container,
  Paper,
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Header />
        <Container maxWidth="lg">
          <Box my={2}>
            <Paper>
              <Switch>
                <Route path="/counter">
                  <Counter />
                </Route>
                <Route path="/todos">
                  <Todos />
                </Route>
                <Route path="/posts">
                  <Todos />
                </Route>
                <Route path="/">
                  <HomePage />
                </Route>
              </Switch>
            </Paper>
          </Box>
          <Hidden smUp></Hidden>
          <BottomNavigatorBar />
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
