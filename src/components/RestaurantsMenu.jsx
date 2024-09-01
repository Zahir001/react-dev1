import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { INFO_CDN, infoImage_CDN, RESINFO_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantsMenu from "../utils/useRestaurantsMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantsMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantsMenu(resId);

    const [showIndex, setShowIndex] = useState(0);

    if (resInfo.length === 0) {
        return <Shimmer />;
    }

    const { name, cuisines, costForTwoMessage } =
        resInfo?.data?.cards[2]?.card?.card?.info;

    const { itemCards } =
        resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
            ?.card?.card;
    console.log(
        "withoutCAtegory",
        resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
    // console.log("category", resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    console.log("resinfonew", itemCards);
    const category =
        resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (item) =>
                item.card?.card?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
    console.log("category", category);
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-medium">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            {/* categories accordions */}
            {category.map((category, index) => (
                //controlled component now
                <RestaurantCategory
                    key={category?.card?.card?.title}
                    data={category?.card?.card}
                    setShowIndex={() => setShowIndex(index)}
                    isVisible={index === showIndex ? true : false}
                />
            ))}
        </div>
    );
};
export default RestaurantsMenu;
