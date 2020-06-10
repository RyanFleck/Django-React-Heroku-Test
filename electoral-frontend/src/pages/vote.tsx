import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Spinner from "../components/spinner";
import axiosRetry from "axios-retry";

axiosRetry(axios, { retryDelay: axiosRetry.exponentialDelay });

interface Props {}

interface State {
  backendUp: boolean;
}

export default class Vote extends React.Component<Props, State> {
  state: State = {
    backendUp: false,
  };

  componentDidMount() {
    const csrf_token = Cookies.get("csrftoken");
    const headers = { "X-CSRFTOKEN": csrf_token };
    axios
      .post("api/authenticate/", { data: "Hello" }, { headers: headers })
      .then(
        (res) => {
          this.setState({ backendUp: true });
        },
        (error) => {
          this.setState({ backendUp: false });
        }
      );
  }

  render() {
    return (
      <div id="page-wrap">
        <h2>Vote</h2>
        {this.state.backendUp ? (
          <div>
            <p>Ready.</p>
          </div>
        ) : (
          <div>
            <p>Waiting for service to respond...</p>
            <Spinner />
          </div>
        )}
      </div>
    );
  }
}
