import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import BlogHome from './pages/BlogHome';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';

const PrimaryLayout = props => {
  return (
    <React.Fragment>
      <header></header>
      <main>
        <Switch>
          <Route path="/" exact component={BlogHome} />
          <Route path="/p/:postSlug" component={BlogPost} />
          <Route component={NotFound} />
        </Switch>
        <hr />
        <p>
          Hey <span role="img" aria-label="smiley face">😊</span>: this is just a test blog, there's no real content here, I am just testing some technologies.
        </p>
        <p>
          Please visit my Github by clicking <a href="https://github.com/Eitz">here</a>.
        </p>
      </main>
    </React.Fragment>
  )
}

function App() {
  return (
    <BrowserRouter>
      <PrimaryLayout />
    </BrowserRouter>
  );
}

export default App;