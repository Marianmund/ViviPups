import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home.jsx";
import LockScreen from "../pages/LockScreen.jsx";
import Gallery from "../pages/Gallery.jsx";


function AppRouter() {
    return (
            <Routes>
                <Route path="/" element={<LockScreen />} />
                <Route path="/home" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
            </Routes>
    );
}

export default AppRouter;