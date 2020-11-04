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

function App() {
  return (
    <>
      <ThemeProvider>
        <CssBaseline />
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6"></Typography>
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
