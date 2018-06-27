import React from './react';
import ShoeList from './ShoeList';
import AboutUs from './AboutUs';

function Router(){
  return(
    <div>
      <Switch>
        <Route exact path='/' component={ShoeList} />
        <Route path='/aboutUs' component={AboutUs} />
      </Switch>
    </div>
  )
}

export default Router;
