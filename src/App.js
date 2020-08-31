import React, { Fragment } from 'react';
import '../src/App.less';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {Button} from 'antd';
import Header from './Layout/Header';

function App() {
  return (
   <Fragment>
      <Router>
          <Header />
         <Switch>
              <Route />
         </Switch>
      </Router>
        
   </Fragment>
  );
}

export default App;
