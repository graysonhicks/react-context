import React from "react";

const ChangeStateButton = props => {
  return (
    <Button appearance="blue" onClick={context.growOlder} marginTop="2rem">
      When you click me, I update state on GrandParent
    </Button>
  );
};

export default ChangeStateButton;
