import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    axios.get("api/testdata/").then((res) => {
      console.log("got testdata:");
      console.log(res.data);
      this.setState({ data: res.data });
    });
  }

  render() {
    return (
      <div id={"app-wrap"}>
        <h1>Django + React</h1>
        <p>
          Data:{" "}
          {this.state.data.hasOwnProperty("it_works")
            ? "present"
            : "not present"}
        </p>
        <br />
        <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
        <br />
        <br />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/RyanFleck/Django-React-Heroku-Test"
        >
          Source code
        </a>
      </div>
    );
  }
}

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
