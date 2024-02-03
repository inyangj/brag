import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Forgotpassword from "../pages/Forgotpassword ";
import Createpassword from "../pages/Createpassword";
import Home from "../pages/Home";
import Layout from "../pages/Layout";




const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path={'/'} element={<Home />} />
        <Route path={`/login`} element={<Login />} />
        <Route path={`/signup`} element={<Signup />} />
        <Route path={`/forgotpassword`} element={<Forgotpassword />} />
        <Route path={`/createpassword`} element={<Createpassword />} />
        <Route path={`/business`} element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
