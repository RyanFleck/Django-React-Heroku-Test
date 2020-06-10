import React from "react";
import Typography from "@material-ui/core/Typography";

interface Props {}

interface State {}

export default class Vote extends React.Component<Props, State> {
  render() {
    return (
      <div id="page-wrap">
        <Typography variant="h5" component="h2">
          Vote in an Election
        </Typography>
        <Typography variant="body1">
          To vote, use the custom URL provided by your institution.
        </Typography>
      </div>
    );
  }
}
