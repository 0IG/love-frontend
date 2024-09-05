// Components
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import Signup from "./components/auth/signup/Signup";
import Signout from "./components/auth/signout/Signout";
import Photos from "./components/photos/Photos";
import Maps from "./components/maps/Maps";

// Context
import { UserProvider } from "./components/context/userContext/UserContext";

//Library
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <UserProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signout" element={<Signout />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/maps" element={<Maps />} />
      </Routes>
    </UserProvider>
  );
}

// Testing Arch Laptop Security
// Test 2 Arch GNOME keyring
