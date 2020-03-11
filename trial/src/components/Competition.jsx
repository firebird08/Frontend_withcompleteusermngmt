  import React from 'react';
  import '../App.css';
  // import Page from "./PracticeChallenge/Page"
  import './Competition.css';
  import { Card, CardHeader, CardBody, CardFooter } from 'react-simple-card';
  import ExampleComponent from 'react-simple-card';
  class Competition extends React.Component {
    constructor() {
      super();
      
      this.state = {
        clicked: false
      };
      
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState({
        clicked: true
      });
    }
    render() {
  
      if(!localStorage.getItem("Authenticated")){
      return (
        <div className="App">
          <title>Bebras </title>
          <meta charset="UTF-8"></meta>

          <link href='http://fonts.googleapis.com/css?family=Lato:300,400,400italic,700,700italic,900%7CPacifico' rel='stylesheet' type='text/css' />
          <link rel="shortcut icon" src={require('../images/favicon.ico')} />
          <link rel="stylesheet" src={require('../css/bootstrap/css/bootstrap.min.css')} type="text/css" media="all" />
          <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" />
          <link rel="stylesheet" src={require('../style.css')} type="text/css" media="all" />
          <link rel="stylesheet" src={require('../js/prettyphoto/css/prettyPhoto.css')} type="text/css" media="all" />
          <div id="main" class="wrap">
            <section class="page-top wrap">

              <h2 class="page-section-title">Enter the Competition</h2>
              <div class="dist"></div>
          <div class='row' >
          <b style={{"margin-left":"1%"}}>You havent Logged in , Please click on This button to Login</b>
          <br></br>
         <a  href="/login"class ="registerbutton"> Login</a>
        </div>
              <p></p>
            </section>
            <div className="zz-bottom"></div>
            <section className=" margin-t72 wrap">
            {/* questionstartshere */}
            <div className="container">
              <p>Click on the competition you want to enter into:</p>
              <div>
              <div className="competition-con">
   <button id="startButton" onClick={this.handleClick}>bebras test {this.state.clicked ? window.location="http://localhost:3000/newapp/Teacher" : null}</button>
        </div>
        {/* <div className="competition-con">
   <Button id="startButton">heyy</Button>
        </div>
        <div className="competition-con">
   <Button id="startButton">heyy</Button>
        </div> */}
              </div>
              </div></section>
          {/* <div>
              
          </div>
          <div>
              hiiii
          </div>
             */}
            <div class="zz-bottom"></div>
          </div>
        </div>
      );
      }
      else{
        return( <div className="App">
        <title>Bebras </title>
        <meta charSet="UTF-8"></meta>

        <link href='http://fonts.googleapis.com/css?family=Lato:300,400,400italic,700,700italic,900%7CPacifico' rel='stylesheet' type='text/css' />
        <link rel="shortcut icon" src={require('../images/favicon.ico')} />
        <link rel="stylesheet" src={require('../css/bootstrap/css/bootstrap.min.css')} type="text/css" media="all" />
        <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" />
        <link rel="stylesheet" src={require('../style.css')} type="text/css" media="all" />
        <link rel="stylesheet" src={require('../js/prettyphoto/css/prettyPhoto.css')} type="text/css" media="all" />
        <div id="main" className="wrap">
          <section className="page-top wrap">

            <h2 className="page-section-title">Enter the Competition</h2>
         

          
          </section>
          <div className="zz-bottom"></div>
        </div>
      </div>);
      }
    }
  }
  class Button extends React.Component {
    render() {
      return (
        <button {...this.props}>
        </button>
      );
    }  
  }
  export default Competition;
