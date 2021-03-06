import React from "react";

import { Card } from "evergreen-ui";

const MainCard = props => (
  <Card
    elevation={3}
    backgroundColor="white"
    width="100%"
    height="auto"
    marginBottom="1rem"
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    padding="1rem"
    {...props}
  >
    {props.children}
  </Card>
);

export default MainCard;
