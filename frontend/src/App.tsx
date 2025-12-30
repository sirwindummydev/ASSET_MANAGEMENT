import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import { ThemeProvider } from "./context/ThemeContext";

import "./App.css";
import Dashboard from "./pages/Dashboard";
import AllAssets from "./pages/AllAssets";
import AssetDomain from "./pages/AssetDomain";
import AssetMajorClass from "./pages/AssetMajorClass";
import AssetCategory from "./pages/AssetCategory";
import AssetSpecificType from "./pages/AssetSpecificType";
import AssetBrands from "./pages/AssetBrands";
import AssetUnits from "./pages/AssetUnits";
function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<MainLayout />}>
              <Route
                index
                element={<Navigate to="/dashboard/overview" replace />}
              />
              <Route path="dashboard/overview" element={<Dashboard />} />
              <Route path="assets/all-assets" element={<AllAssets />} />
              <Route
                path="assets/asset-settings/asset-domain"
                element={<AssetDomain />}
              />
              <Route
                path="assets/asset-settings/asset-major-class"
                element={<AssetMajorClass />}
              />
              <Route
                path="assets/asset-settings/categories"
                element={<AssetCategory />}
              />
              <Route
                path="assets/asset-settings/specific-type"
                element={<AssetSpecificType />}
              />
              <Route
                path="assets/asset-settings/brands"
                element={<AssetBrands />}
              />
              <Route
                path="assets/asset-settings/units"
                element={<AssetUnits />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
