import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Forgotpassword from "../pages/Forgotpassword";
import Unreguser from "../pages/Unreguser";
import Createpassword from "../pages/Createpassword";
import Reguser from "../pages/Reguser";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Business from "../pages/Business";
import AddBusiness from "../pages/AddBusiness";
import Verification from "../pages/Verification";
import UserHome from "../pages/UserHome";
import Services from "../components/business/Services";
import ServiceReview from "../pages/ServiceReviews";
import ProfilePage from "../pages/ProfilePage";

import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import UserBusinessView from "../pages/UserBusinessView";

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
      const profile = JSON.parse(localStorage.getItem("user"));

      setHasBusiness(profile.data.hasBusiness);
    }
  }, []);

  console.log("hasBusiness", hasBusiness);

  return (
    <BrowserRouter>
      <Nav hasBusiness={hasBusiness} className={`hidden`} />
      <Routes>
        <Route
          index
          path={"/"}
          element={<Home setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path={`/login`}
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path={`/signup`} element={<Signup />} />
        <Route path={`/forgotpassword`} element={<Forgotpassword />} />
        <Route path={`/Verification`} element={<Verification />} />
        <Route path={`/Createpassword`} element={<Createpassword />} />
        <Route path={`/Reguser`} element={<Reguser />} />
        <Route path={`/Unreguser`} element={<Unreguser />} />
        <Route path={`/profile`} element={<ProfilePage />} />

        {isLoggedIn ? (
          <>
            <Route
              path={`/brag`}
              element={<Layout setIsLoggedIn={setIsLoggedIn} />}
            >
              <Route path={`/brag`} element={<UserHome />} />
              <Route path={`/brag/business/:id`} element={<UserBusinessView />} />
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

{
  /* <>
          
          <Route path={`/brag`} element={<Layout  setIsLoggedIn={setIsLoggedIn}/>}>
            <Route path={`/brag/business/:id`} element={<UserBusinessView />} />
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
          
        </> */
}
