import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';

export default function Routes() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route path="/" exact component={Home} />
    </BrowserRouter>
  );
}
