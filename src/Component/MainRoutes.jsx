import React from "react";
import { Route, Routes } from "react-router-dom";
import { SignIn } from "../Pages/SignIn";
import { SignUpPage } from "../Pages/SignUp";
import { LandingPage } from "../Pages/LandingPage";

import { ErrorPage } from "../Pages/ErrorPage";

import { PrivateRoute } from "./PrivateRoutes";
import CreatePage from "../Pages/CreatePage";
import { DashboardPage } from "../Pages/DashboardPage";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/task"
        element={
          <PrivateRoute>
            <CreatePage />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<SignIn />} />
      <Route path="/signup" element={<SignUpPage />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
