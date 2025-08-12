import React from "react";
import {useCart} from "../stores/cartStore";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";


export default function Header() {
    const items = useCart(state => state.items);
    const totalCount = items.reduce((s, it) => s + it.qty, 0);
    const user = useSelector(state => state.user);

    return (
        <header className="bg-white shadow-sm">
            {!user.loggedIn &&
                <div className="w-full flex items-center justify-around bg-black text-white text-center ">sign
                    in and get 20 % off</div>
            }

            <div className="container flex items-center justify-between py-4">
                <Link to="/" className=" font-bold text-primary-600">Shoply</Link>
                <nav className="flex gap-4 items-center">
                    <Link to="/" className="hover:underline">Home</Link>
                    <Link to="/checkout" className="relative">
                        Cart
                        {totalCount > 0 && (
                            <span
                                className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs rounded-full bg-primary-600 text-black">
                {totalCount}
              </span>
                        )}
                    </Link>
                </nav>
            </div>
        </header>
    );
}
