import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/MainPage/Main";
import Login from "./pages/LoginPage/Login";
import PlanDetail from "./pages/PlanDetailPage/PlanDetail";
import PlanList from "./pages/PlanListPage/PlanList";
import PlanSets from "./pages/PlanSetsPage/PlanSets";
import SignUp from "./pages/SignUpPage/SignUp";
import UploadPlan from "./pages/UploadPlanPage/UploadPlan";
import UserInfo from "./pages/UserInfoPage/UserInfo";
import ViewPlan from "./pages/ViewPlanPage/ViewPlan";
import WishList from "./pages/WishListPage/WishList";
import SearchPage from "./pages/SearchPage/SearchPage";
import FindId from "./pages/FindInfoPage/FindID";
import FindPw from "./pages/FindInfoPage/FindPw";

export const SearchKeyword = React.createContext();
export const DispatchContext = React.createContext();
const Router = () => {
  const [keyword, setKeyword] = useState();
  const onSearch = (keywordInput) => {
    setKeyword(keywordInput);
  };

  return (
    <SearchKeyword.Provider value={keyword}>
      <DispatchContext.Provider value={{ onSearch }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/plandetail" element={<PlanDetail />} />
            <Route path="/planlist" element={<PlanList />} />
            <Route path="/plansets" element={<PlanSets />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/uploadplan" element={<UploadPlan />} />
            <Route path="/userinfo" element={<UserInfo />} />
            <Route path="/viewplan" element={<ViewPlan />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/findId" element={<FindId />} />
            <Route path="/findPw" element={<FindPw />} />
          </Routes>
        </BrowserRouter>
      </DispatchContext.Provider>
    </SearchKeyword.Provider>
  );
};

export default Router;
