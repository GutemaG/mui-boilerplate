import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/DefaultLayout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import { CompanyListPage } from "../features/company-managemnt/CompanyListPage";
import { CompanyCreatePage } from "../features/company-managemnt/pages/CompanyCreatePage";

const Routing: React.FC = () => {
  // State to track if the user is logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Routes>
      {/* If the user is not logged in, show non-logged-in routes */}
      {!isLoggedIn ? (
        <>
          <Route
            path="/login"
            element={<Login onLogin={() => setIsLoggedIn(true)} />}
          />
          <Route path="*" element={<Navigate to="/login" />} />{" "}
        </>
      ) : (
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="companies">
            <Route index element={<CompanyListPage />} />
            <Route path="create-company" element={<CompanyCreatePage />} />
          </Route>
          <Route path="*" element={<Navigate to="/home" />} />{" "}
        </Route>
      )}
    </Routes>
  );
};

export default Routing;
