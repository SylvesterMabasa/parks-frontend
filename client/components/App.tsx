import React from 'react';
import Home from 'pages/Home';
import About from 'pages/About';
import Contact from 'pages/Contact';

import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom'

export default class App extends React.Component{
    render(){
        return (
            <Router>
            <div className="App">
             <div className="container">

      {/* <!-- Static navbar --> */}
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <NavLink className="navbar-brand" to="/">Parks App</NavLink>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li ><NavLink exact activeClassName="activeNav" to="/" >Home</NavLink></li>
              <li ><NavLink activeClassName="activeNav"  to="/about">About</NavLink></li>
              <li  ><NavLink activeClassName="activeNav" to="/contact" >Contact</NavLink></li>
             
            </ul>
           
          </div>{/* <!--/.nav-collapse --> */}
       </div> {/* <!--/.container-fluid --> */}
      </nav>

      


      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>

    </div>{/* <!-- /container --> */}
            </div>

</Router>

        );
    }
}
