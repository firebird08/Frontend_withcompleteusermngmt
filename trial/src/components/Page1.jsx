
import "../App.css";
import React from 'react';
import {
    Route,
    NavLink,
    HashRouter,
    BrowserRouter as Router,
    Switch
  } from "react-router-dom";
  // import logoz from '../images/Bebras_india_logo.png';
import Pagination from './Pagination1';
import GeneralQuestion from "./GeneralQuestion";
import Practice_challenge1 from "./PracticeChallenge/Practice_challenge1";
import Practice_challenge2 from "./PracticeChallenge/Practice_challenge2";
import Practice_challenge3 from "./PracticeChallenge/Practice_challenge3";
import Practice_challenge4 from "./PracticeChallenge/Practice_challenge4";
import Practice_challenge5 from "./PracticeChallenge/Practice_challenge5";
// import BulkRegistration from "./BulkRegistration/BulkRegistration";
  const componentsarr=[<GeneralQuestion/>,<GeneralQuestion/>,<GeneralQuestion/>,<GeneralQuestion/>,<GeneralQuestion/>];
//   const componentsarr=[<Practice_challenge1/>,<Practice_challenge2/>,<Practice_challenge3/>,<Practice_challenge4/>,<Practice_challenge5/>];

class Page1 extends React.Component {
    constructor() {
        super();

        // an example array of items to be paged
        var exampleItems = [...Array(10).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));
exampleItems=[{id:1,name: componentsarr[0]},{id:2,name: componentsarr[1]},{id:3,name: componentsarr[2]},{id:4,name: componentsarr[3]},{id:5,name: componentsarr[4]}]
        this.state = {
            exampleItems: exampleItems,
            pageOfItems: []
        };

        // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
        this.onChangePage = this.onChangePage.bind(this);
    }
    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }
    render() {
        return (
        <div className="App">
        <title>Bebras </title>
        <meta charset="UTF-8"></meta>
        <div id="main" class="wrap">
          {/* <div class="zz-bottom"></div> */}
          <div >
                    <div className="text-center">
                        {this.state.pageOfItems.map(item =>
                            <div key={item.id}>{item.name}
                                <div>
                                    {componentsarr.map(block => block.component)}
                                </div>
                            </div> )}
                        
                        <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
                        <div>{this.sayHello}</div>
                    </div>
                </div>
        </div>
      </div>
      
        );
    }
        
    
}

export default Page1;
