import React from "react";
import ReactDOM from "react-dom/client";


//React element=object
const ele=<span>React element</span>

//component composition

const num=1000;

const Title =()=>(
  <h1 id="heading" className="head">
    Namste react using jsx🙏🏻
  </h1>
);


const HeadingComponent=()=>(
    <div id="container">
        {Title()}
        <Title></Title>
        <Title/>
         <h1>Namste React functional component</h1>
    </div>
    
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);

