import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, setShowIndex, isVisible }) => {
    const handleClick = () => {
        setShowIndex();
    };
    return (
        <div>
            <div className="w-7/12 mx-auto my-4 p-4 bg-gray-50 shadow-md">
                <div
                    className="flex justify-between cursor-pointer"
                    onClick={handleClick}
                >
                    <span className="font-bold text-lg">
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span>⬇️</span>
                </div>
                {/* <div className={`${isVisible ? 'block':'hidden'}`}> */}
                {isVisible && <ItemList items={data.itemCards} />}
                {/* </div> */}
            </div>
        </div>
    );
};
export default RestaurantCategory;
