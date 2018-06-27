import React from 'react';

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
