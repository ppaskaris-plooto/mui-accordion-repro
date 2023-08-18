import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Paper,
} from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import logo from "./logo.svg";
import "./App.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const emotionCache = createCache({
  key: "mui",
  prepend: true,
});

const theme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: ({ ownerState: { variant, elevation } }) =>
          variant === "elevation" && elevation === 1
            ? { boxShadow: "none" }
            : undefined,
        elevation1: {
          border: "1px solid red",
        },
      },
    },
  },
});

function App() {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Paper className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Accordion>
              <AccordionSummary>
                <Typography>LEARN</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Edit <code>src/App.js</code> and save to reload.
                </Typography>
                <Button
                  variant="contained"
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </Button>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary>
                <Typography>LAUGH</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Edit <code>src/App.js</code> and save to reload.
                </Typography>
                <Button
                  variant="contained"
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Laugh React
                </Button>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary>
                <Typography>LOVE</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Edit <code>src/App.js</code> and save to reload.
                </Typography>
                <Button
                  variant="contained"
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Love React
                </Button>
              </AccordionDetails>
            </Accordion>
          </header>
        </Paper>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
