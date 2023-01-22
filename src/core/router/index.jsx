// LIBs
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// VIEWs
import HomeView from "../../views/Home";
import CartView from "../../views/Cart";

// CONFIG
import config from "../config/App.config";

// THEMEs
import themes from "../../themes";

// STYLEs
import "react-toastify/dist/ReactToastify.css";

const Router = (props) => {
  const Theme = themes._default;

  return (
    <BrowserRouter basename={config.path+"/"}>
      <Routes>
        <Route path="/" element={<Theme><HomeView /></Theme>} />
        <Route path="/cart" element={<Theme><CartView /></Theme>} />
        <Route path="*" element={<Theme><HomeView /></Theme>} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default Router;