import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Spinner from "./spinner";
import axiosRetry from "axios-retry";
import { Typography } from "@material-ui/core";

axiosRetry(axios, { retryDelay: axiosRetry.exponentialDelay });

interface Props {}

interface State {
  backendUp: boolean;
}

class ServiceUp extends React.Component<Props, State> {
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
      <span>
        {this.state.backendUp ? (
          <div>
            <Typography variant="body1">
              Electoral backend is responsive to POST requests.
            </Typography>
          </div>
        ) : (
          <div>
            <Typography variant="body1">
              Waiting for Electoral service to respond to POST...
            </Typography>
            <Spinner />
          </div>
        )}
      </span>
    );
  }
}

export default ServiceUp;
