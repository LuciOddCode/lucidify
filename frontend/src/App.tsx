import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css';
import {DefaultLayout} from "./view/common/DefaulltLayout/DefaultLayout";
import {Login} from "./view/pages/Login/Login";
import {SignUp} from "./view/pages/SignUp/SignUp";
import {Users} from "./view/pages/Users/Users";
import {Professionals} from "./view/pages/Professionals/Professionals";
import {About} from "./view/pages/About/About";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/*" Component={DefaultLayout}/>
          <Route path="/login" Component={Login}/>
          <Route path="/signup" Component={SignUp}/>
          <Route path="/forgot" Component={Users}/>
          <Route path="/professionalLogged" Component={Professionals}/>
          <Route path="/userLogged" Component={Users}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
