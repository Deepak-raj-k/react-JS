import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Button } from "bootstrap";

import LandingPage from "./screens/landingpage";
import HomePage from "./screens/homepage";
import RegisterformPage from "./screens/registerpage";

const Application = () => {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path="" element={<LandingPage></LandingPage>} ></Route>
  <Route path="register" element= {<RegisterformPage></RegisterformPage>} ></Route>
  <Route path="home" element = {<HomePage></HomePage>}></Route>
</Routes>
</BrowserRouter>
    </div>
  )
}

export default Application;