// import React, { useEffect, useState } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage,SignupPage } from "./routes/Routes.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}
