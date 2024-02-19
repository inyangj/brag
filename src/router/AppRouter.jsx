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
import RequireAuth from "../utility/RequireAuth";
import Missing from "../pages/Missing";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasBusiness, setHasBusiness] = useState(false);

  useEffect(() => {
    // Check if user or token is saved in localStorage
    const user = JSON.parse(localStorage.getItem("user"))
    const token = localStorage.getItem("token");
    const hasBusiness = user?.data.hasBusiness;

    if (hasBusiness) {
      setHasBusiness(true);
    }



    if (user && token) {
      const profile = JSON.parse(localStorage.getItem("user"));
      setIsLoggedIn(true);
      

      
    }
  }, []);

console.log(`hasBusiness for Router ${hasBusiness}`);

  return (
    <BrowserRouter>
      <Nav hasBusiness={hasBusiness} className={`hidden`} />
      <Routes>
        <Route
          index
          path={"/"}
          element={<Home />}
        />
        <Route
          path={`/login`}
          element={<Login />}
        />
        <Route path={`/signup`} element={<Signup />} />
        <Route path={`/forgotpassword`} element={<Forgotpassword />} />
        <Route path={`/Verification`} element={<Verification />} />
        <Route path={`/createpassword/:token`} element={<Createpassword />} />
        <Route path={`/Reguser`} element={<Reguser />} />
        <Route path={`/Unreguser`} element={<Unreguser />} />
        <Route path={`/profile`} element={<ProfilePage />} />
        <>
          
         <Route element={<RequireAuth />}>
          <Route path={`/`} element={<Layout />}>
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
          </Route>
        </> 
        <Route path="*" element={<Missing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;





// {isLoggedIn ? (
//   <>
//     <Route
//       path={`/brag`}
//       element={<Layout setIsLoggedIn={setIsLoggedIn} />}
//     >
//       <Route path={`/brag`} element={<UserHome />} />
//       <Route path={`/brag/business/:id`} element={<UserBusinessView />} />
//       {hasBusiness ? (
//         <Route path={`/brag/business`} element={<Business />}>
//           <Route path={`/brag/business/`} element={<ServiceReview />} />
//         </Route>
//       ) : (
//         <Route path={`/brag/business`} element={<AddBusiness />} />
//       )}
//     </Route>
//     <Route path={`/addBusiness`} element={<AddBusiness />} />
//   </>
// ) : (
//   <Route path="*" element={<Navigate to="/login" />} />
// )}

