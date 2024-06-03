// Components
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Photos from "./components/photos/Photos";
import Maps from "./components/maps/Maps";

// Context
import { UserContext } from "./components/context/userContext/UserContext";

//Library
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <UserContext>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/maps" element={<Maps />} />
      </Routes>
    </UserContext>
  );
}
