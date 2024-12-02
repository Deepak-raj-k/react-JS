import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landingpage from "./src/landingpage";
import HomepageScreen from "./src/homepage";
import RegisterpageScreen from "./src/register";




const Application = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Landingpage></Landingpage>}></Route>
          <Route path="home" element = {<HomepageScreen></HomepageScreen>}></Route>
          <Route path="register" element = {<RegisterpageScreen></RegisterpageScreen>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Application;