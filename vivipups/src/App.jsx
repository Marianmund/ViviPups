import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import LockScreen from "./"
import AppRouter from "./Router/AppRouter";



function App() {
  return (
    <div className="bg-pink-200">
      <AppRouter />
    </div>
  );
}

export default App;