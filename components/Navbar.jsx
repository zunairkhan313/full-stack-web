"use client"


import Link from "next/link"
import 'bootstrap/dist/css/bootstrap.min.css';
import UserInfo from "./UserInfo";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Icon from "./CartIcon";

export default function Navbar() {
    const { data: session } = useSession();

    var menu;
    var menu1;
    if (session?.user) {

        menu = (
            <li className="nav-item mt-1">
                <button
                    onClick={() => signOut()}
                    className="text-white "
                >
                    Logout
                </button>
            </li>

        )
    } else {
        menu1 = (
            <>
                <li className="nav-item mt-1">
                    <Link href="/login">
                        <button style={{ color: "white" }} className="active text-sm font-bold hover">Login</button>
                    </Link>
                </li>
                <li class="nav-item mt-1">
                    <Link href="/register">
                        <button style={{ color: "white" }} className=" active text-sm font-bold">Register</button>
                    </Link>

                </li>
            </>


        )
    }


    return (
        <>
            <div >

                <nav id="mainnavbar" className="fixed navbar navbar-expand-md navbar-dark bg-dark py-3 ">
                    <div className="container-fluid">

                        <div >
                            <a href="/" className="font-bold text-white no-underline">Outfiters</a>
                        </div>
                        <div>
                            <ul className="navbar-nav  mb-2 gap-4 mb-md-0 justify-around text-white">
                                <li className="nav-item">
                                    <a href="/#kids" style={{ color: "white" }} className="active font-sans text-sm no-underline cursor-pointer hover:underline">Kids</a>
                                </li>
                                <li className="nav-item ">
                                    <a href="/#Mens" style={{ color: "white" }} className="active font-sans text-sm no-underline cursor-pointer hover:underline">Mens</a>
                                </li>
                                <li className="nav-item ">
                                    <a href="/#Womens" style={{ color: "white" }} className="active font-sans text-sm no-underline cursor-pointer hover:underline">Womens</a>
                                </li>
                                <li className="nav-item ">
                                    <a href="/#Watches" style={{ color: "white" }} className="active font-sans text-sm no-underline cursor-pointer hover:underline">Watches</a>
                                </li>
                                
                            </ul>
                        </div>
                        <div>

                            <ul className="navbar-nav me-auto mb-2 gap-3 mb-md-0">
                                <li className="nav-item">
                                    <Link href={"./cart"}>
                                    <div>
                                        <span className="text-white "><Icon/></span>
                                    </div>
                                    </Link>
                                </li>
                                <li className="nav-item mt-1">
                                    <div>
                                        <span className="font-bold text-white ">{session?.user?.name}</span>
                                    </div>
                                </li>
                                {menu1}
                                {menu}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}