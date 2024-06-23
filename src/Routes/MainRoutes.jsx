import { Route, Routes } from "react-router-dom";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import Home from "../pages/Home/Home";

function MainRoutes( ){
return( 
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup />} />
    </Routes>
)
}

export default MainRoutes;