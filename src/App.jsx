import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Layout from "./layouts/Layout";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="admin" element={<Admin />} />
      </Route>
    </Routes>
  );
};

export default App;
