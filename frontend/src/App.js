import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.js";
import Test from "./pages/test.js";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/test" element={<Test />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
