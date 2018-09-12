import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//components
import Header from './components/headerComponents/header';
import Homepage from './components/pages/homePage';
import Product from './components/pages/product';
import Contact from './components/pages/contact';

//Css
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header/>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/Products' component={Product}/>
          <Route exact path='/Contact' component={Contact}/>
      </div>
      </Router>
    );
  }
}

export default App;
