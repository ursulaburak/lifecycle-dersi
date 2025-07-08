import React from "react";

const Button = (props) => {
  console.log("button render", Math.random());
  return <button {...props} />;
};

export default React.memo(Button);