import {
  ThemeProvider,
  CssBaseline,
  AppBar,
  Container,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Counter from "./pages/counter/Counter";
import theme from "./configs/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6">React template</Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="sm">
          <Paper>
            <Counter />
          </Paper>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
