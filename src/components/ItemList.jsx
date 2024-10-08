import { useDispatch } from "react-redux";
import { INFO_CDN } from "../utils/constants";
import { addItem } from "../store/cartSlice";

const ItemList = ({ items }) => {
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        // Add item to cart
        dispatch(addItem(item));
        // alert('Item added to cart');
    };
    return (
        <div>
            {items.map((item) => (
                <div
                data-testid='foodItem'
                    key={item?.card?.info?.id }
                    className="p-2 m-2 border-gray-300 border-b-2 text-left flex items-center"
                >
                    <div className="flex flex-col w-9/12">
                        <span>{item.card.info.name}</span>
                        <span>₹{item.card.info.price / 100}</span>
                        <p>{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 ml-6 relative">
                        <img
                            src={`${INFO_CDN}${item.card.info.imageId}`}
                            className="w-72"
                            alt=""
                        />
                        <div className="h-12 text-center">
                            <button className="px-4 py-2 bg-slate-200 shadow-lg relative bottom-4" onClick={()=>handleAddItem(item)}>
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default ItemList;
