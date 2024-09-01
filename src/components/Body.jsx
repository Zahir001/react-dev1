import { useEffect, useState } from "react";
import resListObj from "../utils/mockData";
import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [resList, setResList] = useState([]);
    const [filteredRestraurant, setFilteredRestaurant] = useState([]);
    const [searcText, setSearchText] = useState("");

    const onlnineStatus = useOnlineStatus();
    const RestaurantOpen = withOpenLabel(RestaurantCard);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.57350&lng=77.32080&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
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

    if (onlnineStatus === false) {
        return (
            <h1>
                Looks like you're offline!! Please check your internet
                Connection !!!
            </h1>
        );
    }
    if (filteredRestraurant.length === 0) {
        return (
            <div>
                <Shimmer />
            </div>
        );
    }

    return (
        <div className="body w-11/12 m-auto">
            <div className="filter flex py-2 gap-x-3 items-center my-6">
                <div className="search flex gap-x-2">
                    <input
                        className="border border-solid border-black"
                        type="text"
                        value={searcText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                        className="px-4 py-1 bg-green-200 hover:bg-green-100 rounded-lg text-[16px]"
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
                    className="px-4 py-1 rounded-lg bg-gray-300 hover:bg-gray-200"
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 mt-4">
                {filteredRestraurant.map((restaurant) => {
                    return (
                        <Link
                            to={`/restaurants/${restaurant.info.id}`}
                            key={restaurant.info.id}
                        >
                            {restaurant.info.isOpen ? (
                                <RestaurantOpen resData={restaurant}/>
                            ) : (
                                <RestaurantCard resData={restaurant} />
                            )}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Body;
