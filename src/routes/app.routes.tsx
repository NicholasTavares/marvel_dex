import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "../pages/Details";
import Home from "../pages/Home";

const SystemRoutes: React.FunctionComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  </BrowserRouter>
);

export default SystemRoutes;
