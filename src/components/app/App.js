import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from '../header';
import Schedule from '../../page/schedule';
import Courses from '../../page/courses';
import Dictionary from '../../page/dictionary';
import Useful from '../../page/useful';

import './App.css';

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Route exact path="/" render={()=><h2 style={{margin: "0 auto", width: "300px", height: "100vh"}}>тестовое задание</h2>} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/dictionary" component={Dictionary} />
        <Route path="/courses" component={Courses} />
        <Route path="/useful" component={Useful} />
      </div>
    </Router>
  );
}

export default App;
