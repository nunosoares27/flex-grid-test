import React from 'react';
import { css, jsx } from '@emotion/core';
import Container from './Container';
import Row from './Row';

/** @jsx jsx */

function App() {
  return (
    <div>
      <Container width="200px" height="200px" flexDirection="row" >
        <Row desktop="4" tablet="6" mobile="12" justifyContent="center" alignItems="center">
          <h2>ok</h2>
        </Row>
        <Row desktop="8" tablet="6" mobile="12" justifyContent="center" alignItems="center">
          <div>
            <h2>is awesome</h2>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default App;
