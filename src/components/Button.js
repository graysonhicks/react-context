import React, { Component } from 'react';
import { Button } from 'evergreen-ui';

const MainButton = ({ children, ...rest }) => (
  <Button height={48} appearance="blue" marginTop="1rem" {...rest}>
    {children}
  </Button>
);

export default MainButton;
