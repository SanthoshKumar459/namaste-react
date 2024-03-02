import RestaurantCard from "./RestaurantCard";

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

export default Body;