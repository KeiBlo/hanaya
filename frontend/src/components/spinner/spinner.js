import React, {Fragment} from "react";
import spinner from "./sp.svg";

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      alt="Loading..."
      style={{width: "50px", margin: "auto", display: "block"}}
    />
  </Fragment>
);

export default Spinner;
