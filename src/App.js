import {
  ThemeProvider,
  CssBaseline,
  AppBar,
  Container,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import theme from "./configs/theme";
import Counter from "./pages/counter/Counter";
import Todos from "./pages/todos/Todos";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="sticky" color="default">
          <Toolbar>
            <Typography variant="h6">React template</Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="sm">
          <Paper>
            <Counter />
          </Paper>
          <Paper>
            <Todos></Todos>
          </Paper>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
