import * as React from 'react';
import Home from './Pages/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BlogPost from './reusable/BlogPost'

export interface IAppProps {
    data: string;
}

function App () {
  return (
    <>
      <BrowserRouter>
        <div>
            <Home />
            <BlogPost/>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App
