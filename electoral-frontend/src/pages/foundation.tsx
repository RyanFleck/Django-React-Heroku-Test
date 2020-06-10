import React from "react";
import axios from "axios";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

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
    axios.get("/api/testdata/").then((res) => {
      this.setState({ data: res.data });
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
        <Box fontFamily="Monospace">
          <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
        </Box>
      </div>
    );
  }
}
