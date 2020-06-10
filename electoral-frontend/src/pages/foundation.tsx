import React from "react";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import axiosRetry from "axios-retry";
import ServiceUp from "../components/serviceUp";

axiosRetry(axios, { retryDelay: axiosRetry.exponentialDelay });

interface Props {
  children: React.ReactNode;
}

interface State {
  data: object;
}

export default class Foundation extends React.Component<Props, State> {
  state: State = {
    data: {},
  };

  componentDidMount() {
    // See if backend is up and responsive.
    axios
      .get("/api/testdata/")
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((error) => {
        this.setState({ data: { error: "Could not contact backend" } });
      });
  }

  render() {
    return (
      <div id="foundation">
        <div id="page-header">
          <Typography variant="h1" component="h1" gutterBottom>
            Electoral
          </Typography>
        </div>
        <div>{this.props.children}</div>
        <br />
        <Typography variant="h5" component="h2">
          Debug Output
        </Typography>
        <br />
        <ServiceUp />
        <Box fontFamily="Monospace">
          <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
        </Box>
      </div>
    );
  }
}
