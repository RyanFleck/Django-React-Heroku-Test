import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Create from "./pages/create";
import Vote from "./pages/vote";
import axios from "axios";

const page_header = "Electoral";

interface Props {}

interface State {
  data: object;
}

class App extends React.Component<Props, State> {
  state: State = {
    data: {},
  };

  componentDidMount() {
    // See if backend is up and responsive.
    axios.get("api/testdata/").then((res) => {
      this.setState({ data: res.data });
    });
  }

  render() {
    return (
      <div id="app-wrap">
        <h1>{page_header}</h1>

        <Router>
          <Link to="/">Home</Link>
          {" · "}
          <Link to="/login">Login</Link>
          {" · "}
          <Link to="/create">Create</Link>
          {" · "}
          <Link to="/vote">Vote</Link>

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

        <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
        <Links>
          <RepoLink />
          {" · "}
          <PrivacyPolicy />
          {" · "}
          <TermsOfService />
        </Links>
      </div>
    );
  }
}

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

const Links: React.FunctionComponent = (props) => {
  return <div id={"links"}>{props.children}</div>;
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
