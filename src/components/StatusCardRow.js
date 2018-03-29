import React from "react";

import { Card } from 'evergreen-ui';


const StatusCardRow = (props) => {
  return (
    <Card
      clearfix
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="row"
      marginTop="2rem"
      width="100%"
      {...props}
    >
      {props.children}
    </Card>
  );
};

export default StatusCardRow;
