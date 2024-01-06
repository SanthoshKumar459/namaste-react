import React from "react";
import ReactDOM from "react-dom/client";

/*
* <div id = "parent">
*   <div id = "child1">
*       <h1>I'm h1 tag from child1</h1>
*       <h2>I'm h2 tag from child1</h2>
*   </div>
*   <div id = "child2">
*       <h1>I'm h1 tag from child2</h1>
*       <h2>I'm h2 tag from child2</h2>
*   </div>
*</div>
*
*
*
*
*
*
*/

const element = React.createElement(
                                        "div", {id : "parent"},
                                        [
                                            React.createElement(
                                                "div",
                                                {id : "child1"}
                                                ,[React.createElement(
                                                       "h1",
                                                       {},
                                                       "I'm h1 tag from child1"     
                                                    ),
                                                    React.createElement(
                                                        "h2",
                                                        {},
                                                        "I'm h2 tag from child1"     
                                                     )
                                                    ]

                                           ) ,
                                           React.createElement(
                                            "div",
                                            {id : "child2"}
                                            ,[React.createElement(
                                                   "h1",
                                                   {},
                                                   "I'm h1 tag from child2"     
                                                ),
                                                React.createElement(
                                                    "h2",
                                                    {},
                                                    "I'm h2 tag from child2"     
                                                 )
                                                ]

                                       ) 
                                        ]
                                   );

console.log(element);


const heading = React.createElement("h1", {id : "heading", xyz : "abc"}, "Hello World from React!.");

//console.log(heading); // returns object

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root); // returns object

root.render(element);