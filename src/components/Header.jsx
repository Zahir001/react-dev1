import React from "react";
import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import LOGO_URL from "../public/tandoori_fustion.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { FaHamburger } from "react-icons/fa";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlnineStatus = useOnlineStatus();
    const [menuOpen, setMenuOpen] = useState(false);

    const { loggedInUser } = useContext(UserContext);

    const cartItem = useSelector((store) => store.cart.items);
    console.log(cartItem);
    return (
        <div
            className={`header flex justify-between items-center bg-pink-100 shadow-lg `}
        >
            <div className="logo-container">
                <img className="w-32 p-2" src={LOGO_URL} alt="" />
            </div>

            <div className={`${menuOpen ? "block" : "hidden"} lg:block`}>
                <ul className="flex p-6 gap-x-4 text-lg flex-col md:flex-row absolute md:relative">
                    <li>Online Status{onlnineStatus ? "✅" : "🔴"}</li>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About</Link>
                    </li>

                    <li>
                        <Link to={"/contact"}>Contact Us</Link>
                    </li>
                    <li>
                        <Link to={"/grocery"}>Grocery</Link>
                    </li>
                    <li>
                        <Link to={"/cart"}>Cart - {cartItem.length}</Link>
                    </li>
                    <button
                        onClick={() => {
                            btnName === "Login"
                                ? setBtnName("Logout")
                                : setBtnName("Login");
                        }}
                    >
                        {btnName}
                    </button>
                    <li className="font-bold">{loggedInUser}</li>
                </ul>
            </div>
            <FaHamburger
                className="block md:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
            />
        </div>
    );
};

export default Header;
