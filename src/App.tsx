// import * as React from 'react';
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import Project from './Pages/Project'
import CardView from './Pages/Project/CardView';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

export interface IAppProps {
    data: string;
}

function App () {
  return (
    <>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/project" component={Project}/>
            <Route path="/projects/:numberParams" exact component={CardView}/>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App
