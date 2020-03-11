  import React from 'react';
  import './App.css';
  import { BrowserRouter as Router } from 'react-router-dom';
  import {
    Route,
    Switch,
  } from "react-router-dom";
  import Page from "./components/PracticeChallenge/Page";
  import Register from "./containers/RegisterPage/Register";
  import Certificate from './components/Certificate'
  import GeneralQuestion from './components/GeneralQuestion';
  import Page1 from './components/Page1';
  import Now from "./containers/LoginPage/Login";
  import NewApp from "./containers/NewApp/NewApp";
  import TeacherNavbarNew from "./containers/TeacherNew/TeacherNavbarNew";
  class App extends React.Component {
    render() { 
      return (
            <Router>
              <Switch>
              <Route   path="/newapp" component={NewApp} />
              <Route   path="/Register" component={Register} />
              <Route   path="/Login" component={Now} />
              <Route   path="/teachernew" component={TeacherNavbarNew} />
              <Route   path="/certificate" component={Certificate} />
              <Route   path="/GeneralQuestion" component={GeneralQuestion} />
              <Route   path="/Page1" component={Page1} />
              </Switch>
            </Router>
      );
    }
  }

  export default App;
