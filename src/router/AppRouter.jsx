import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Forgotpassword from "../pages/Forgotpassword";
import Createpassword from "../pages/Createpassword";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Business from "../pages/Business";
import AddBusiness from "../pages/AddBusiness";
import Verification from "../pages/Verification";
import UserHome from "../pages/UserHome";
import Services from "../components/business/Services";
import ServiceReview from "../pages/ServiceReviews";

import { useEffect, useState } from "react";
import Nav from "../components/Nav";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasBusiness, setHasBusiness] = useState(false);

  useEffect(() => {
    // Check if user or token is saved in localStorage
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (user && token) {
      setIsLoggedIn(true);
      // Assuming 'hasBusiness' is a boolean stored in localStorage
      const data = localStorage.getItem("user");
      const hasBusiness = data?.data?.hasBusiness
      setHasBusiness(hasBusiness);
    }
  }, []);

  
  return (
    <BrowserRouter>
    <Nav hasBusiness={hasBusiness} className={`hidden`}/>
      <Routes>
        <Route index path={"/"} element={<Home  setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path={`/login`} element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path={`/signup`} element={<Signup />} />
        <Route path={`/forgotpassword`} element={<Forgotpassword />} />
        <Route path={`/Verification`} element={<Verification />} />

        {isLoggedIn ? (
          <>
          
            <Route path={`/brag`} element={<Layout  setIsLoggedIn={setIsLoggedIn}/>}>
              <Route path={`/brag`} element={<UserHome />} />
              {hasBusiness ? (
                <Route path={`/brag/business`} element={<Business />}>
                  <Route path={`/brag/business/`} element={<ServiceReview />} />
                </Route>
              ) : (
                <Route path={`/brag/business`} element={<AddBusiness />} />
              )}
            </Route>
            <Route path={`/addBusiness`} element={<AddBusiness />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
