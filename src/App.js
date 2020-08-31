import React, { Fragment } from 'react';
import '../src/App.less';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {Button} from 'antd';
import Header from './Layout/Header';
import Home from './page/Home';

function App() {
  return (
   <Fragment>
      <Router>
          <Header />
         <Switch>
              <Route exact path="/" component={Home}/>
         </Switch>
      </Router>
        
   </Fragment>
  );
}

export default App;
