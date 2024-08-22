import { useEffect, useState } from "react";
import resListObj from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [resList, setResList] = useState([]);
    const [filteredRestraurant, setFilteredRestaurant] = useState([]);
    const [searcText, setSearchText] = useState("");
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.57350&lng=77.32080&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(
            json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        );
        setResList(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );
        setFilteredRestaurant(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );
    };

    // //conditional rendering
    // if(resList.length === 0){
    //     return <Shimmer />
    // }
    return resList.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                        className="search-box"
                        type="text"
                        value={searcText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                        onClick={() => {
                            const filteredItem = resList.filter((res) =>
                                res.info.name
                                    .toLowerCase()
                                    .includes(searcText.toLowerCase())
                            );
                            setFilteredRestaurant(filteredItem);
                        }}
                    >
                        Search
                    </button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const resListn = resList.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setFilteredRestaurant(resListn);
                    }}
                >
                    Top rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {filteredRestraurant.map((restaurant) => {
                    return (
                        <Link
                            to={`/restaurants/${restaurant.info.id}`}
                            key={restaurant.info.id}
                        >
                            <RestaurantCard resData={restaurant} />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Body;
