import { ThemeProvider, CssBaseline, Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import theme from "./configs/theme";
import Counter from "./pages/counter/Counter";
import Todos from "./pages/todos/Todos";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Header />
        <Container maxWidth="lg">
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
          </Switch>
        </Container>
        {/* <Container maxWidth="sm"></Container> */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
