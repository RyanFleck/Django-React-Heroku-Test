import React from "react";
import Typography from "@material-ui/core/Typography";

interface Props {}

interface State {}

export default class Login extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <Typography variant="h5" component="h2">
          Login
        </Typography>
        <Typography variant="body1">
          Authentication is to be done on Election creation and when voting.
        </Typography>
      </div>
    );
  }
}
