import React from "react";

/* Do not touch the DIVs */

const Spinner: React.FunctionComponent = () => {
  return (
    <span>
      <div className={"lds-spinner"}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </span>
  );
};

export default Spinner;
