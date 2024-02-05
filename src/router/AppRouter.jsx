import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Forgotpassword from "../pages/Forgotpassword";
import Createpassword from "../pages/Createpassword";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Business from "../pages/Business";
import AddBusiness from "../pages/AddBusiness";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path={"/"} element={<Home />} />
        <Route path={`/login`} element={<Login />} />
        <Route path={`/signup`} element={<Signup />} />
        <Route path={`/forgotpassword`} element={<Forgotpassword />} />
        <Route path={`/createpassword`} element={<Createpassword />} />
        <Route path={`/business`} element={<Layout />} >
          <Route path={`/business`} element={<Business />} />
        </Route>
        <Route path={`/addBusiness`} element={<AddBusiness />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
