import React from "react";

function Banner({ status, children }) {
  const theme =
    status === "success" ? "happy" : status === "error" ? "sad" : "";
  return <div className={`${theme} banner`}>{children}</div>;
}

export default Banner;
