import React, { Component } from "react";
import {Link} from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (
            <div className="bg-blue-700 text-white p-4 flex items-center justify-between">
                <div className="flex items-center">
                    <img src="/assets/images/navbar/Logo.png" alt="" className="h-12 w-12"/>
                    <h1 className="text-2xl font-bold ml-2 cursor-pointer">Lucidi-fy</h1>
                </div>
                <ul className="list-none flex items-center space-x-4">
                    <li className="text-lg cursor-pointer">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="text-lg cursor-pointer">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="text-lg cursor-pointer">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                </ul>
                <div className="flex items-center space-x-4">

                    <button className="transition-colors ease-in-out delay-150 text-lg border-2 border-white rounded-full px-4 py-2 hover:bg-amber-50
                            hover:text-blue-700 duration-150">Login</button>
                </div>
            </div>
        );
    }
}
