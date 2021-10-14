import React from 'react';

import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';
import NaviBar from './Components/Navibar'
import Footer from './Components/Footer'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Home } from './Components/Home';
import { Products } from './Components/Products';
import { Learn } from './Components/Learn';
import { Support } from './Components/Support';
import { Who } from './Components/Who';


function App() {
  return (
    <>
    <Router>
      <NaviBar />
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route path="/Products" component={Products} />
          <Route path="/Learn" component={Learn} />
          <Route path="/Support" component={Support} />
          <Route path="/Who" component={Who} />
        </Switch>
    </Router>
    <Footer></Footer>
    </>
  );
}

export default App;
