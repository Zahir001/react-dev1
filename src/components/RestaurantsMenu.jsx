import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { INFO_CDN, infoImage_CDN, RESINFO_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantsMenu = () => {
    const [resInfo, setResInfo] = useState([]);
    const { resId } = useParams();
    useEffect(() => {
        fetchMenu();
    }, []);
    const fetchMenu = async () => {
        const data = await fetch(`${RESINFO_URL}${resId}`);
        const json = await data.json();
        setResInfo(json);
    };
    const { name, cuisines, costForTwoMessage } =
        resInfo?.data?.cards[2]?.card?.card?.info || {};

    const { itemCards } =
        resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
            ?.card?.card || {};
    console.log("resinfonew", itemCards);
    return resInfo.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="infoDetailParent">
            <h1>{name}</h1>
            <p>
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>

            <h2>Menu</h2>
            {itemCards.map((item) => {
                const {
                    name,
                    price,
                    isBestseller,
                    ribbon,
                    imageId,
                    id,
                    variantsV2,
                } = item?.card?.info;

                // ribbon: bottomBackgroundColor: "#b02331";
                // text: "Bestseller";
                // textColor: "#ffffff";
                // topBackgroundColor: "#d53d4c";
                return (
                    <div className="detailCard" key={id}>
                        <div className="detailCardText">
                            <p>
                                {isBestseller}
                                {ribbon.text}
                            </p>
                            <li>{name}</li>
                            <p>
                                Rs.
                                {price / 100 ||
                                    variantsV2.pricingModels[0].price/100}
                            </p>
                        </div>
                        <div>
                            <img src={`${INFO_CDN}${imageId}`} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
export default RestaurantsMenu;
