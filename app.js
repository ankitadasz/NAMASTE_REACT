import React from "react";
import ReactDOM from "react-dom/client";
const parent=React.createElement("div",{id:"parent"},
   [ React.createElement("div",{id:"child"},
        [
        React.createElement("h1",{},"i am Ankita😃..."),
        React.createElement("h2",{},"cvcvcvcvcvvcvcvvc")
        ]
    ),

React.createElement("div",{id:"child2"},
        [
        React.createElement("h1",{},"i amjndjknkjnfvjk h1 tag"),
        React.createElement("h2",{},"i am tag")
        ]
    )

]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
