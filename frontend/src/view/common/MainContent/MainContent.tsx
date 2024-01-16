import React, {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/Home";
import {About} from "../../pages/About/About";
import {Contact} from "../../pages/Contact/Contact";
import {SignUp} from "../../pages/SignUp/SignUp";


export class MainContent extends Component {
    render() {
        return (
            <div className="overflow-hidden"
                >
                <div className="flex">

                    <Routes>
                        <Route path='/' Component={Home}></Route>
                        <Route path='/about' Component={About}></Route>
                        <Route path='/contact' Component={Contact}></Route>
                        <Route path='/signup' Component={SignUp}></Route>
                    </Routes>

                </div>

            </div>
        );
    }
}
