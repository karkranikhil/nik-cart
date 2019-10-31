import React from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
 

const App=()=> {
  return (
    <div>
      <Route exact path="/" component={HomePage}/>
      <Route path="/shop" component={ShopPage}/>
    </div>
  );
}

export default App;
