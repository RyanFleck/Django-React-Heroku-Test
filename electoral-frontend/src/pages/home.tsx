import React from "react";
import Typography from "@material-ui/core/Typography";

interface Props {}

interface State {}

export default class Home extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <Typography variant="h5" component="h2">
          Welcome to Electoral, your Voting Platform
        </Typography>
        <br />
        <Typography variant="body1">
          Need to run an Election? Electoral helps you organize by managing
          authentication and result presentation. All you need to do is give a
          list of candidates, with platforms and categories.
        </Typography>
        <br />
        <Typography variant="body1">
          Currently Electoral is in alpha/development.
        </Typography>
      </div>
    );
  }
}
