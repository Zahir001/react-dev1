import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { MdDeleteSweep } from "react-icons/md";
import { clearCart } from "../store/cartSlice";
import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
// import { clearCart } from "../store/cartSlice";

const Cart = () => {
    const items = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearItem = () => {
        if (window.confirm("Are you sure you want to clear the cart?")) {
            dispatch(clearCart());
        }
    };
    return (
        <div>
            <div className="text-center w-6/12 m-auto">
                <h1 className="font-bold">Cart</h1>
                <button
                    className="bg-slate-600 text-white font-medium rounded-md p-2 m-2 shadow-lg flex items-center justify-center mx-auto"
                    onClick={handleClearItem}
                >
                    <MdDeleteSweep className="mr-2" /> Clear Cart
                </button>
                {items.length === 0 && (
                    <div>
                        <h1>Cart is Empty ! Please add item</h1>
                        <h2 className="text-green-600 text-2xl">
                            <Link to={"/"} className="flex justify-center items-center">
                                add items
                                <IoAddCircleOutline />
                            </Link>
                        </h2>
                    </div>
                )}
                <ItemList items={items} />
            </div>
        </div>
    );
};

export default Cart;
