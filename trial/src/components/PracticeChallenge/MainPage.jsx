import React from 'react';
import '../../App.css';
import Page from "./Page";
import {
  Route,
  NavLink,
  HashRouter,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import Practice_challenge1 from './Practice_challenge1';
// import { Button } from '@material-ui/core';
const componentsarr=[<Page/>];
class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      correctopt: '',
      wrongopt: '',
      answercorrect: 'hidden',
      answerwrong: 'hidden',
      clicked: false
    }
    
    this.handleClick = this.handleClick.bind(this);


  }
// handleClick()
// {
//   return (<Page/>);
// }
handleClick() {
  this.setState({
    clicked: true
  });
}
  render() {

    return (
      <div className="P">
        <title>Bebras </title>
        <meta charset="UTF-8"></meta>


        <div id="main" class="wrap">

          <section class="page-top wrap">

            <h2 class="page-section-title">Try out these practice challenges.</h2>

          </section>
          <div class="zz-bottom"></div>
          <section class=" margin-t72 wrap">
              <div>
      <div className="content">
              <Switch>
              <Route   path="/newapp/Practice_challenge/Page" component={Page} />
              {/* <Route   path="/newapp/Render" component={Register} /> */}
              </Switch>
            </div>
      <a href="/newapp/Practice_challenge/Page">Click here</a>
              </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
          </section>
        </div>
      </div>
    );
  }
}
class Button extends React.Component {
  render() {
    return (
      <button {...this.props}>
        click
      </button>
    );
  }  
}
export default MainPage;
