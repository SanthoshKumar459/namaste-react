import { styleCard } from "../utils/constants";

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

export default RestaurantCard;