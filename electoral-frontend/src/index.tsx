import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";

const page_header = "Django + React + TypeScript";

interface Props {}

interface State {
  data: object;
}

class App extends React.Component<Props, State> {
  state: State = {
    data: {},
  };

  componentDidMount() {
    axios.get("api/testdata/").then((res) => {
      console.log("got testdata:");
      console.log(res.data);
      this.setState({ data: res.data });
    });
  }

  render() {
    return (
      <div id="app-wrap">
        <h1>{page_header}</h1>
        <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
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
