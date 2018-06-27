import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Router from './Router';
import Nav from './Nav';
import SideBar from './SideBar';
import Footer from './Footer';

function App(){
  return (
    <div>
      <Nav />
      <Router />
      <SideBar />
      <Footer />
    </div>
  );
}

export default App;


// function liveTime(){
// let clock = React.createElement('h2', {}, `It is ${new Date().toLocaleTimeString()}`);

// }

// setInterval(liveTime, 1000);
