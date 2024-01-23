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

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const styleCard = {
    backgroundColor : '#f0f0f0'
};

const RestaurantCard = (props) => {
    console.log(props);
    return(
        <div className="res-card" style={styleCard}>
            <img className="res-logo" 
                alt="res-logo" 
                src="https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg">
            </img>
            <h3>{props.restaurantName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.4 Stars</h4>
            <h4>30 Mins</h4>
        </div>
    );
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <RestaurantCard restaurantName = "Meghana Foods" cuisine = "South Indian, North Indian"/>
                <RestaurantCard restaurantName = "KFC" cuisine = "Burger, Fast Food"/>
            </div>

        </div>
    );
}

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