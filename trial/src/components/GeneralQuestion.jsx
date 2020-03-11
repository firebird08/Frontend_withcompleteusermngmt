import React from 'react';
import '../App.css';
import './PracticeChallenge.css';
const templates = {
    template1: {
      items: ["At the LIFO ice cream parlour the scoops of ice cream are stacked on your cone in the exact order in which you ask for them.What do you have to say in order to get the ice cream shown in the picture?"],
      items1:[5,6,7,8]
    }
  };
class GeneralQuestion extends React.Component {
  constructor() {
    super();
    
  }
 
  render() {
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

            <h2 class="page-section-title">Competition</h2>
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
            <div align="left">
    {
      Object.keys(templates).map(template_name => {
        return (
          <div>
            <div>Question:</div>
            {
              templates[template_name].items.map(item => {
                return(<div>{item}</div>)
              })
            }
            <div>Options: </div>
          {
            templates[template_name].items1.map(item => {
              return(
                <div><div><div><button class="col-md-2" style={{margin:"10px"}}>{item}</button></div></div></div>)
            })
          }
          </div>
          
        )
      })
    }
  </div>
            </div>
            <div clas="dist"><br></br></div>
            </section>
            
          <div class="zz-bottom"></div>
        </div>
      </div>
    );
    }
  }

export default GeneralQuestion;
