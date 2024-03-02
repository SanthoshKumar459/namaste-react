// Episode - 04
/*
*   Header
        - Logo
        - Nav Items Container
*   Body
        - Restaurent Container
        - Restaurent Card
            - Name
            - Rating

*   Footer
        - Copyright
        - Links
        - Address
        - Contact
*/

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../src/components/Header";
import Body from "../src/components/Body";

const AppLayout = () =>{
    return (
        <div className = "app">
            <Header/>
            <Body/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>)