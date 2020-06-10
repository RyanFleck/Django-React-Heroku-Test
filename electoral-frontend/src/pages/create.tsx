import React from "react";
import Typography from "@material-ui/core/Typography";

interface Props {}

interface State {}

export default class Create extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <Typography variant="h5" component="h2">
          Create a New Election
        </Typography>
        <Typography variant="body1">
          Need to run an Election? Electoral helps you organize by managing
          authentication and result presentation. All you need to do is give a
          list of candidates, with platforms and categories.
        </Typography>
      </div>
    );
  }
}
