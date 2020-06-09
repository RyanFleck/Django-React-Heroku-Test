import React from "react";
import axios from "axios";
import Cookies from "js-cookie";

interface Props {}

interface State {}

export default class Vote extends React.Component<Props, State> {
  componentDidMount() {
    const csrf_token = Cookies.get("csrftoken");
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrf_token;
    const headers = { "X-CSRFTOKEN": csrf_token };

    console.log(`Got token: ${csrf_token || "none"}`);
    axios
      .post("api/authenticate/", { data: "Hello" }, { headers: headers })
      .then((res) => {
        console.log(res.data);
      });
  }

  render() {
    return (
      <div id="page-wrap">
        <h2>Vote</h2>
      </div>
    );
  }
}
