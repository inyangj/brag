import { BrowserRouter, Route, Routes } from "react-router-dom";
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

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path={"/"} element={<Home />} />
        <Route path={`/login`} element={<Login />} />
        <Route path={`/signup`} element={<Signup />} />
        <Route path={`/forgotpassword`} element={<Forgotpassword />} />
        <Route path={`/Verification`} element={<Verification />} />
        <Route path={`/Createpassword`} element={<Createpassword />} />
        <Route path={`/Reguser`} element={<Reguser />} />
        <Route path={`/Unreguser`} element={<Unreguser />} />
        <Route path={`/brag`} element={<Layout />}>
          <Route path={`/brag`} element={<UserHome />} />
          <Route path={`/brag/business`} element={<Business />}>
            <Route path={`/brag/business/`} element={<ServiceReview />} />
          </Route>
        </Route>
        <Route path={`/addBusiness`} element={<AddBusiness />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
