import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Create from "./pages/create";
import Vote from "./pages/vote";
import Foundation from "./pages/foundation";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",

    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
  headerLink: {
    textAlign: "center",
  },
}));

const App: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Foundation>
          <Router>
            <Paper>
              <Typography variant="body1">
                <div style={{ padding: 14 }}>
                  <Grid container spacing={1}>
                    <Grid className={classes.headerLink} item xs={3}>
                      <Link to="/">Home</Link>
                    </Grid>
                    <Grid className={classes.headerLink} item xs={3}>
                      <Link to="/login">Login</Link>
                    </Grid>
                    <Grid className={classes.headerLink} item xs={3}>
                      <Link to="/create">Create</Link>
                    </Grid>
                    <Grid className={classes.headerLink} item xs={3}>
                      <Link to="/vote">Vote</Link>
                    </Grid>
                  </Grid>
                </div>
              </Typography>
            </Paper>

            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/vote">
                <Vote />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </Foundation>
      </Container>
      <Footer />
    </div>
  );
};

const Footer: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Typography variant="body1">
          <RepoLink />
          {" · "}
          <PrivacyPolicy />
          {" · "}
          <TermsOfService />
        </Typography>
      </Container>
    </footer>
  );
};

const RepoLink: React.FunctionComponent = () => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/RyanFleck/Django-React-Heroku-Test"
    >
      Source code
    </a>
  );
};

const PrivacyPolicy: React.FunctionComponent = () => {
  return <a href="/privacy-policy/">Privacy Policy</a>;
};

const TermsOfService: React.FunctionComponent = () => {
  return <a href="/terms-of-service/">Terms of Service</a>;
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
