import { Container, Paper } from '@material-ui/core';
import React from 'react';

const FromContainer = ({ children }) => {
  return (
    <div>
      <Paper style={{ paddingBottom: '24px', paddingTop: '24px' }}>
        <Container>{children}</Container>
      </Paper>
    </div>
  );
};

export default FromContainer;
