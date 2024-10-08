import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ resData }) => {
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla,
        isOpen,
    } = resData?.info;
    const { loggedInUser } = useContext(UserContext);
    return (
        <>
            {/* <label htmlFor="">{isOpen ? "Open" : ""}</label> */}
            <div data-testid="resCard" className="res-card transform transition-transform duration-300 hover:scale-[0.95]">
                <img
                    className="rounded-md"
                    src={`${CDN_URL}${cloudinaryImageId}`}
                />
                <h3 className="text-lg font-medium py-4">{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating}</h4>
                <h4>{costForTwo}</h4>
                <h4>{sla.slaString}</h4>
                <h4>User: {loggedInUser}</h4>
            </div>
        </>
    );
};

export default RestaurantCard;

export const withOpenLabel = (RestaurantCard)=>{
    return (props)=>{
        return (
            <>
                <label htmlFor="" className="absolute z-10 bg-gray-700 text-white m-1 py-1 px-2 rounded-md">Open</label>
                <RestaurantCard {...props}/>
            </>
        )
    }
}